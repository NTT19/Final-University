# Công việc cần thực hiện

- [ ] **Điều khiển:**
  - [ ] Thủ công
  - [ ] Tự động (cảm biến)
  - [ ] Tự động (thời gian)

- [ ] **API hiển thị camera**

- [ ] **Chatbot**

- [X] **Full tiếng Việt**

- [X] **Format màu trùng với website**

- [ ] **API thời tiết**

ngày 21/03/2025
- dashboard -> vườn -> cài đặt  -> hồ sơ
- 


- [X] API sensor reading: http://plantify.info.vn/api/sensorReading GET

- [X] API Login: http://plantify.info.vn/api/user/login POST
	+ {phone_number, password}

- [ ] API Register: http://plantify.info.vn/api/user/register POST
	+ {fullName, phoneNumber, email, password, status, role_id = 1}

- [ ] API Weather: http://plantify.info.vn/api/weather/location?lat={lat}&lon={lon}
	+ xài thư viện trong react native để lấy vị trí hiện tại của người dùng, truyền lat và lon vào api

- [X] API Mode(lấy ra chế độ): http://plantify.info.vn/api/modeSetting GET

- [X] API Update Mode(cập nhật chế độ): http://plantify.info.vn/api/modeSetting/updateMode?mode={mode} PUT (truyền tham số mode vào)
	+ Mode = 0: Thủ công
	+ Mode = 1: Tự động theo cảm biến
	+ Mode = 2: Đặt lịch tưới

- [X] API lấy thông tin điều khiển: http://plantify.info.vn/api/ledStatus GET

- [X] API update điều khiển(bật tắt thiết bị): http://plantify.info.vn/api/ledStatus/update?led={ledName}&status={status} PUT
	+ Ledname: led1 = Đèn sợi đốt, led2 = motor tưới gốc, led3 = motor phun sương, led4 = camera
	+ status: 0 = off, 1 = on

- [ ] API đặt lịch tưới: http://plantify.info.vn/api/ledControl GET

-- mới 

- [] thay cài đặt thành thông báo
