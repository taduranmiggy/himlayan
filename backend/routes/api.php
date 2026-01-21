<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PlotController;
use App\Http\Controllers\Api\BurialRecordController;
use App\Http\Controllers\Api\QrCodeController;
use App\Http\Controllers\Api\MapController;
use App\Http\Controllers\Api\PublicController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Auth\SocialAuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Smart Cemetery Navigation and Digital Plot Management System
| API Routes organized by module
|
*/

// ============================================
// PUBLIC ROUTES (No Authentication Required)
// ============================================

// Authentication
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

// Social Authentication (OAuth)
Route::get('/auth/{provider}/redirect', [SocialAuthController::class, 'redirect']);
Route::get('/auth/{provider}/callback', [SocialAuthController::class, 'callback']);

// Public grave profile (accessed via QR code)
Route::get('/public/grave/{code}', [PublicController::class, 'graveProfile']);

// Public search for burial records
Route::get('/public/search', [PublicController::class, 'search']);

// Public announcements
Route::get('/announcements', [PublicController::class, 'announcements']);

// ============================================
// PROTECTED ROUTES (Authentication Required)
// ============================================

Route::middleware('auth:sanctum')->group(function () {
    
    // Auth Management
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);

    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index']);

    // ----------------------------------------
    // PLOT MANAGEMENT
    // ----------------------------------------
    Route::prefix('plots')->group(function () {
        Route::get('/', [PlotController::class, 'index']);
        Route::get('/available', [PlotController::class, 'available']);
        Route::get('/statistics', [PlotController::class, 'statistics']);
        Route::get('/{id}', [PlotController::class, 'show']);
        
        // Admin only routes
        Route::middleware('role:admin')->group(function () {
            Route::post('/', [PlotController::class, 'store']);
            Route::delete('/{id}', [PlotController::class, 'destroy']);
        });

        // Admin and Staff routes
        Route::middleware('role:admin,staff')->group(function () {
            Route::put('/{id}', [PlotController::class, 'update']);
        });
    });

    // ----------------------------------------
    // BURIAL RECORD MANAGEMENT
    // ----------------------------------------
    Route::prefix('burial-records')->group(function () {
        Route::get('/', [BurialRecordController::class, 'index']);
        Route::get('/search', [BurialRecordController::class, 'search']);
        Route::get('/statistics', [BurialRecordController::class, 'statistics']);
        Route::get('/{id}', [BurialRecordController::class, 'show']);

        // Admin and Staff routes
        Route::middleware('role:admin,staff')->group(function () {
            Route::post('/', [BurialRecordController::class, 'store']);
            Route::put('/{id}', [BurialRecordController::class, 'update']);
        });

        // Admin only routes
        Route::middleware('role:admin')->group(function () {
            Route::delete('/{id}', [BurialRecordController::class, 'destroy']);
        });
    });

    // ----------------------------------------
    // QR CODE MANAGEMENT
    // ----------------------------------------
    Route::prefix('qr-codes')->group(function () {
        Route::get('/{code}', [QrCodeController::class, 'show']);
        
        Route::middleware('role:admin,staff')->group(function () {
            Route::post('/generate/{burialId}', [QrCodeController::class, 'generate']);
            Route::post('/regenerate/{burialId}', [QrCodeController::class, 'regenerate']);
            Route::patch('/{code}/deactivate', [QrCodeController::class, 'deactivate']);
        });
    });

    // ----------------------------------------
    // MAP DATA
    // ----------------------------------------
    Route::prefix('map')->group(function () {
        Route::get('/markers', [MapController::class, 'markers']);
        Route::get('/marker/{plotId}', [MapController::class, 'markerDetails']);
        Route::get('/bounds', [MapController::class, 'bounds']);
    });

    // ----------------------------------------
    // MEMBER ROUTES (for visitors/members)
    // ----------------------------------------
    Route::prefix('member')->group(function () {
        Route::get('/my-plots', [PlotController::class, 'myPlots']);
    });
});
