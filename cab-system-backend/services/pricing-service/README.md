Trước khi test, chạy lệnh để tạo dữ liệu mẫu:
node src/scripts/seed.js
npm install
npm install uuid  
chạy : npm run dev   
GET All Pricing - Xem tất cả bảng giá
URL: GET http://localhost:5001/api/v1/pricing
kết quả
{
    "success": true,
    "data": [
        {
            "_id": "69a6f2faa577e524056c2dce",
            "vehicleType": "car",
            "baseFare": 10000,
            "perKmRate": 5000,
            "perMinuteRate": 1000,
            "__v": 0
        },
        {
            "_id": "69a6f2faa577e524056c2dcf",
            "vehicleType": "suv",
            "baseFare": 15000,
            "perKmRate": 7000,
            "perMinuteRate": 1200,
            "__v": 0
        }
    ]
}

GET Pricing by Type - Xem giá theo loại xe
URL: GET http://localhost:5001/api/v1/pricing/car
kết quả
{
    "success": true,
    "data": {
        "_id": "69a6f2faa577e524056c2dce",
        "vehicleType": "car",
        "baseFare": 10000,
        "perKmRate": 5000,
        "perMinuteRate": 1000,
        "__v": 0
    }
}

CREATE Pricing - Thêm bảng giá mới
URL: POST http://localhost:5001/api/v1/pricing
{
    "vehicleType": "truck",
    "baseFare": 20000,
    "perKmRate": 8000,
    "perMinuteRate": 1500
}
kết quả:
{
    "success": true,
    "data": {
        "vehicleType": "truck",
        "baseFare": 20000,
        "perKmRate": 8000,
        "perMinuteRate": 1500,
        "_id": "69a836e32ff567a8a0a47152",
        "__v": 0
    }
}

UPDATE Pricing - Cập nhật bảng giá
URL: PUT http://localhost:5001/api/v1/pricing/truck
{
    "baseFare": 25000,
    "perKmRate": 9000
}
kết quả
{
    "success": true,
    "data": {
        "_id": "69a6f5dbcb83d133d714e7a1",
        "vehicleType": "truck",
        "baseFare": 25000,
        "perKmRate": 9000,
        "perMinuteRate": 1500,
        "__v": 0
    }
}


GET All Surge - Xem tất cả hệ số giá theo khu vực
URL: GET http://localhost:5001/api/v1/surge
kết quả
{
    "success": true,
    "data": [
        {
            "_id": "69a6f2faa577e524056c2dd2",
            "zone": "CENTER",
            "multiplier": 2.5,
            "__v": 0
        },
        {
            "_id": "69a6f2faa577e524056c2dd3",
            "zone": "AIRPORT",
            "multiplier": 2,
            "__v": 0
        },
        {
            "_id": "69a6f2faa577e524056c2dd4",
            "zone": "SUBURB",
            "multiplier": 1,
            "__v": 0
        }
    ]
}

GET Surge by Zone - Xem hệ số giá theo từng khu vực
URL: GET http://localhost:5001/api/v1/surge/CENTER
kết quả 
{
    "success": true,
    "data": {
        "zone": "CENTER",
        "multiplier": 2.5
    }
}

CREATE Surge - Thêm hệ số giá mới
URL: POST http://localhost:5001/api/v1/surge
{
    "zone": "BEACH",
    "multiplier": 1.8
}
kết quả
{
    "success": true,
    "data": {
        "zone": "BEACH",
        "multiplier": 1.8,
        "_id": "69a83a512ff567a8a0a4715a",
        "__v": 0
    }
}

UPDATE Surge - Cập nhật hệ số giá mới
URL: PUT http://localhost:5001/api/v1/surge/CENTER
{
    "multiplier": 2.5
}
kết quả
{
    "success": true,
    "data": {
        "_id": "69a6f2faa577e524056c2dd2",
        "zone": "CENTER",
        "multiplier": 2.5,
        "__v": 0
    }
}

DELETE Surge 
URL: DELETE http://localhost:5001/api/v1/surge/BEACH
kết quả
{
    "success": true,
    "data": {
        "message": "Deleted successfully"
    }
}

Create Promotion - Tạo khuyến mãi
URL: POST http://localhost:5001/api/v1/promotion
{
    "code": "WELCOME50",
    "type": "fixed",
    "value": 50000,
    "minTripValue": 100000,
    "validFrom": "2025-01-01T00:00:00.000Z",
    "validTo": "2026-12-31T23:59:59.000Z",
    "usageLimit": 1000,
    "applicableVehicleTypes": ["car", "suv"],
    "applicableZones": ["CENTER", "AIRPORT"],
    "isActive": true
}

{
    "code": "SAVE20",
    "type": "percentage",
    "value": 20,
    "maxDiscount": 30000,
    "minTripValue": 50000,
    "validFrom": "2025-01-01T00:00:00.000Z",
    "validTo": "2026-12-31T23:59:59.000Z",
    "usageLimit": 500,
    "applicableVehicleTypes": ["car", "suv", "bike"],
    "applicableZones": ["CENTER", "SUBURB"],
    "isActive": true
}


kết quả
{
    "success": true,
    "data": {
        "code": "WELCOME50",
        "type": "fixed",
        "value": 50000,
        "minTripValue": 100000,
        "validFrom": "2025-01-01T00:00:00.000Z",
        "validTo": "2026-12-31T23:59:59.000Z",
        "usageLimit": 1000,
        "usedCount": 0,
        "applicableVehicleTypes": [
            "car",
            "suv"
        ],
        "applicableZones": [
            "CENTER",
            "AIRPORT"
        ],
        "isActive": true,
        "_id": "69a83b9e2ff567a8a0a47162",
        "createdAt": "2026-03-04T14:03:10.031Z",
        "updatedAt": "2026-03-04T14:03:10.031Z",
        "__v": 0
    }
}


 GET All Promotions - Xem tất cả khuyến mãi
 URL: GET http://localhost:5001/api/v1/promotion
 kết quả
 {
            "_id": "69a82cb5968dcc761efea097",
            "code": "WELCOME2025",
            "type": "fixed",
            "value": 50000,
            "minTripValue": 100000,
            "validFrom": "2025-01-01T00:00:00.000Z",
            "validTo": "2026-12-31T23:59:59.000Z",
            "usageLimit": 1000,
            "usedCount": 1,
            "applicableVehicleTypes": [
                "car",
                "suv"
            ],
            "applicableZones": [
                "CENTER",
                "AIRPORT"
            ],
            "isActive": true,
            "createdAt": "2026-03-04T12:59:33.200Z",
            "updatedAt": "2026-03-04T13:04:31.171Z",
            "__v": 0
        }

APPLY Promotion - Áp dụng khuyến mãi
URL: POST http://localhost:5001/api/v1/promotion/apply
{
    "code": "WELCOME50",
    "tripValue": 150000,
    "vehicleType": "car",
    "zone": "CENTER"
}
kết quả
{
    "success": true,
    "data": {
        "code": "WELCOME50",
        "originalPrice": 150000,
        "discount": 50000,
        "finalPrice": 100000,
        "promotionType": "fixed",
        "promotionValue": 50000
    }
}

UPDATE Promotion - Cập nhật khuyến mãi
URL: PUT http://localhost:5001/api/v1/promotion/WELCOME50
{
    "usageLimit": 2000,
    "maxDiscount": 60000
}
kết quả
{
    "success": true,
    "data": {
        "_id": "69a83b9e2ff567a8a0a47162",
        "code": "WELCOME50",
        "type": "fixed",
        "value": 50000,
        "minTripValue": 100000,
        "validFrom": "2025-01-01T00:00:00.000Z",
        "validTo": "2026-12-31T23:59:59.000Z",
        "usageLimit": 2000,
        "usedCount": 1,
        "applicableVehicleTypes": [
            "car",
            "suv"
        ],
        "applicableZones": [
            "CENTER",
            "AIRPORT"
        ],
        "isActive": true,
        "createdAt": "2026-03-04T14:03:10.031Z",
        "updatedAt": "2026-03-04T14:39:10.256Z",
        "__v": 0,
        "maxDiscount": 60000
    }
}

DELETE Promotion 
URL: DELETE http://localhost:5001/api/v1/promotion/SAVE20
kết quả
{
    "success": true,
    "data": {
        "message": "Promotion deleted successfully"
    }
}

Estimate - Tính giá chuyến đi
URL: POST http://localhost:5001/api/v1/estimate
{
    "vehicleType": "car",
    "distance": 5,
    "duration": 15,
    "zone": "CENTER"
}
kết quả
{
    "success": true,
    "data": {
        "requestId": "bc23342e-5cb2-4c99-b8e8-05bd2a3340ce",
        "vehicleType": "car",
        "distance": 5,
        "duration": 15,
        "surgeMultiplier": 2.5,
        "estimatedFare": 125000
    }
}


Get Historical Data - Xem lịch sử tính giá
URL: GET http://localhost:5001/api/v1/historical?startDate=2026-03-01&endDate=2026-03-04
kết quả
{
    "success": true,
    "data": [
        {
            "_id": "69a846c8e7489f674fd0dda9",
            "requestId": "77c04e3b-ef0f-43ce-a6a8-16376928d017",
            "vehicleType": "car",
            "distance": 5,
            "duration": 15,
            "zone": "CENTER",
            "baseFare": 10000,
            "perKmRate": 5000,
            "perMinuteRate": 1000,
            "surgeMultiplier": 2.5,
            "estimatedFare": 125000,
            "timestamp": "2026-03-04T14:50:48.687Z",
            "__v": 0
        }
    ]
}