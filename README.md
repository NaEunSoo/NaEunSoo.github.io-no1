# 마이크로컨트롤러제어 프로젝트 
# 마이크로 컨트롤러 제어 개요
> 공업고등학교 교육과정 - Arduino와 ESP32를 활용한 실전 제어 시스템 구축

---

## 📊 과정 개요

| 항목 | 내용 |
|------|------|
| **핵심 목표** | 3가지 |
| **활용 센서** | 10+ 종류 |
| **실습 비중** | 100% |

---

## 🎯 1. 프로젝트 목표

마이크로 컨트롤러 제어를 통해 달성하고자 하는 핵심 역량

### 1.1 제어 개념 이해

디지털 신호와 아날로그 신호의 차이를 이해하고, 입력-처리-출력의 기본 제어 흐름을 학습합니다. PWM, 인터럽트, 타이머 등 핵심 제어 기법을 실습을 통해 체득합니다.

**학습 내용:**
- ▸ 디지털/아날로그 신호 처리
- ▸ PWM 제어 기법
- ▸ 인터럽트 및 타이머 활용
- ▸ 시리얼 통신 이해

### 1.2 센서·액추에이터 활용

다양한 센서로 환경 데이터를 수집하고, 액추에이터를 통해 물리적 제어를 수행합니다. 실제 산업 현장에서 사용되는 부품들을 직접 다루며 실무 감각을 키웁니다.

**학습 내용:**
- ▸ 온습도, 거리, 조도 센서 활용
- ▸ 모터, LED, 서보 제어
- ▸ 센서 데이터 분석 및 처리
- ▸ 액추에이터 정밀 제어

### 1.3 문제해결 및 협업 능력 강화

실제 문제 상황을 분석하고 해결하는 과정을 통해 논리적 사고력을 기릅니다. 팀 프로젝트를 통해 협업 능력과 의사소통 능력을 향상시킵니다.

**학습 내용:**
- ▸ 문제 분석 및 설계 능력
- ▸ 디버깅 및 트러블슈팅
- ▸ 팀 프로젝트 수행
- ▸ 기술 문서 작성

---

## 🔧 2. 활용 기술

프로젝트에서 사용하는 마이크로 컨트롤러와 센서 모듈

### 2.1 마이크로 컨트롤러 유닛 (MCU)

#### Arduino Uno 🟢 입문용
가장 널리 사용되는 입문용 보드로, 풍부한 라이브러리와 커뮤니티 지원이 특징입니다.

**사양:**
- **MCU:** ATmega328P
- **동작 전압:** 5V
- **디지털 I/O:** 14핀
- **아날로그 입력:** 6핀
- **플래시 메모리:** 32KB

#### Arduino Nano 🔵 소형
Uno와 동일한 기능을 소형 폼팩터로 제공하여 공간이 제한된 프로젝트에 적합합니다.

**사양:**
- **MCU:** ATmega328P
- **동작 전압:** 5V
- **디지털 I/O:** 14핀
- **아날로그 입력:** 8핀
- **크기:** 18mm × 45mm

#### ESP32 🔴 IoT
WiFi와 Bluetooth를 내장한 강력한 MCU로, IoT 프로젝트에 최적화되어 있습니다.

**사양:**
- **MCU:** Xtensa 32-bit LX6
- **동작 전압:** 3.3V
- **WiFi:** 802.11 b/g/n
- **Bluetooth:** v4.2 BR/EDR & BLE
- **플래시 메모리:** 4MB

#### ESP8266 🟡 WiFi
저렴한 가격의 WiFi 모듈로, 간단한 IoT 프로젝트에 적합합니다.

**사양:**
- **MCU:** Tensilica L106 32-bit
- **동작 전압:** 3.3V
- **WiFi:** 802.11 b/g/n
- **GPIO:** 17핀
- **플래시 메모리:** 4MB

---

### 2.2 센서 및 모듈

#### 🌡️ DHT11/DHT22 - 온습도 센서
온도와 습도를 동시에 측정하는 디지털 센서

#### 📏 HC-SR04 - 초음파 거리 센서
2cm~400cm 범위의 거리를 측정

#### ☀️ CDS 포토셀 - 조도 센서
주변 밝기를 감지하는 아날로그 센서

#### 👤 PIR 센서 - 인체 감지 센서
적외선으로 움직임을 감지

#### ⏰ DS3231 - RTC 모듈
정밀한 시간 관리를 위한 실시간 시계

#### 📺 LCD 1602 - 문자 디스플레이
16x2 문자를 표시하는 LCD

#### 🔄 서보 모터 - 액추에이터
정밀한 각도 제어가 가능한 모터

#### 💡 RGB LED - 출력 장치
다양한 색상을 표현하는 LED

#### 🔊 부저 - 음향 출력
소리를 출력하는 피에조 부저

#### ⌨️ 키패드 4x4 - 입력 장치
16개 버튼으로 입력을 받는 키패드

---

## 📦 3. 산출물

프로젝트 완료 시 제출해야 할 결과물

### 3.1 회로도

프로젝트의 하드웨어 구성을 명확하게 보여주는 회로도를 작성합니다. Fritzing, TinkerCAD, 또는 KiCAD 등의 도구를 활용할 수 있습니다.

#### 포함 사항
✓ 브레드보드 배선도 (Breadboard View)  
✓ 회로 구성도 (Schematic View)  
✓ 부품 목록 (Bill of Materials)  
✓ 연결 핀 번호 및 설명

#### 권장 도구
- `Fritzing` - 직관적인 회로도 작성 도구
- `TinkerCAD Circuits` - 온라인 시뮬레이터
- `KiCAD` - 전문가용 PCB 설계 도구
- `EasyEDA` - 웹 기반 회로 설계 도구

---

### 3.2 소스코드

마이크로 컨트롤러를 제어하는 프로그램 코드를 작성합니다. 코드는 가독성이 높고 주석이 충분히 포함되어야 합니다.

#### 포함 사항
✓ 주석이 포함된 소스코드 (.ino 또는 .cpp)  
✓ 코드 설명 문서 (README.md)  
✓ 사용된 라이브러리 목록  
✓ 업로드 및 실행 방법

#### 코드 작성 예시

```cpp
// DHT11 온습도 센서 제어 예제
#include <DHT.h>

#define DHTPIN 2      // DHT11 데이터 핀
#define DHTTYPE DHT11 // 센서 타입

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
  Serial.println("DHT11 센서 초기화 완료");
}

void loop() {
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();
  
  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("센서 읽기 실패!");
    return;
  }
  
  Serial.print("습도: ");
  Serial.print(humidity);
  Serial.print("% | 온도: ");
  Serial.print(temperature);
  Serial.println("°C");
  
  delay(2000);
}
```

---

### 3.3 추가 산출물 (선택사항)

#### 🎥 시연 영상
프로젝트 동작을 보여주는 영상

#### 📄 프로젝트 보고서
개발 과정과 결과를 정리한 문서

#### 📸 실물 사진
완성된 하드웨어의 사진

#### 📊 발표 자료
프로젝트를 설명하는 PPT 또는 PDF

---

## 💡 4. 예제 프로젝트

학습 단계별 추천 프로젝트

### 🟢 초급: 스마트 온도계

DHT11 센서로 온습도를 측정하고 LCD에 표시하는 프로젝트입니다. 일정 온도 이상이 되면 LED가 켜지고 부저가 울립니다.

**사용 기술:**
- Arduino Uno
- DHT11
- LCD 1602
- LED

**학습 내용:**
- 디지털 센서 데이터 읽기
- LCD 문자 출력
- 조건문을 이용한 제어

---

### 🟡 중급: 자동 조명 시스템

조도 센서와 PIR 센서를 활용하여 어두울 때 사람이 감지되면 자동으로 LED가 켜지는 시스템입니다.

**사용 기술:**
- Arduino Nano
- CDS 센서
- PIR 센서
- RGB LED

**학습 내용:**
- 아날로그 센서 값 처리
- 다중 센서 통합
- PWM을 이용한 LED 밝기 조절

---

### 🔴 고급: IoT 환경 모니터링

ESP32를 사용하여 온습도, 조도 데이터를 수집하고 WiFi를 통해 웹 서버로 전송하여 실시간 모니터링합니다.

**사용 기술:**
- ESP32
- DHT22
- CDS 센서
- WiFi

**학습 내용:**
- WiFi 연결 및 통신
- 웹 서버 구축
- JSON 데이터 전송
- 실시간 데이터 시각화

---

## 📚 5. 학습 자료

### 공식 문서 및 도구

#### 📖 [Arduino 공식 문서](https://www.arduino.cc/reference/ko/)
함수 레퍼런스 및 튜토리얼

#### 🔧 [TinkerCAD Circuits](https://www.tinkercad.com/circuits)
온라인 회로 시뮬레이터

#### ⚡ [Fritzing](https://fritzing.org/)
회로도 작성 도구

#### 🎥 [YouTube 튜토리얼](https://www.youtube.com/results?search_query=arduino+tutorial+korean)
동영상 강의 자료

---

## 📋 부록

### A. 프로젝트 체크리스트

- [ ] 프로젝트 목표 설정
- [ ] MCU 및 센서 선정
- [ ] 회로도 작성
- [ ] 브레드보드 구성
- [ ] 소스코드 작성
- [ ] 테스트 및 디버깅
- [ ] 문서화
- [ ] 발표 준비

### B. 안전 수칙

⚠️ **전기 안전**
- 전원을 연결하기 전 회로를 재확인하세요
- 5V와 3.3V 전압을 혼동하지 마세요
- 단락(Short Circuit)에 주의하세요

⚠️ **부품 취급**
- 정전기 방지를 위해 손을 씻으세요
- IC 칩은 핀을 구부리지 않도록 조심하세요
- 극성이 있는 부품(LED, 전해 콘덴서)의 방향을 확인하세요

### C. 트러블슈팅 가이드

#### 문제: 업로드 실패
**해결 방법:**
1. USB 케이블 연결 확인
2. 올바른 보드 선택 (도구 > 보드)
3. 올바른 포트 선택 (도구 > 포트)
4. 드라이버 설치 확인

#### 문제: 센서 값이 이상함
**해결 방법:**
1. 배선 연결 재확인
2. 전원 전압 확인
3. 풀업/풀다운 저항 확인
4. 센서 데이터시트 참조

#### 문제: 코드가 작동하지 않음
**해결 방법:**
1. 시리얼 모니터로 디버깅
2. 라이브러리 설치 확인
3. 변수 초기화 확인
4. 논리 오류 점검

---

## 📞 문의 및 지원

프로젝트 진행 중 문제가 발생하면:
- 담당 교사에게 문의
- Arduino 공식 포럼 활용
- 온라인 커뮤니티 참여 (네이버 카페, 디스코드 등)

---

## 📄 라이선스

이 문서는 교육 목적으로 제작되었습니다.

**© 2026 공업고등학교 마이크로 컨트롤러 제어 과정**

Made with ❤️ for education.

---

### 문서 정보

- **작성일:** 2026-01-17
- **버전:** 1.0
- **대상:** 공업고등학교 학생
- **과목:** 마이크로 컨트롤러 제어

---

## 🔖 빠른 참조

| 항목 | 설명 |
|------|------|
| **Arduino IDE** | https://www.arduino.cc/en/software |
| **ESP32 보드 매니저** | https://dl.espressif.com/dl/package_esp32_index.json |
| **DHT 라이브러리** | Adafruit DHT sensor library |
| **LCD 라이브러리** | LiquidCrystal_I2C |
| **서보 라이브러리** | Servo.h (내장) |

---

**끝.**

# 마이크로컨트롤러 제어 기초 (Microcontroller Basics)

이 폴더는 공업고등학교 2학년 과정을 위한 마이크로컨트롤러 기초 학습 자료를 포함하고 있습니다.
웹 브라우저를 통해 인터랙티브한 시각 자료와 함께 학습할 수 있도록 구성되었습니다.

## 📂 파일 구성
- **index.html**: 메인 학습 페이지입니다. 브라우저에서 이 파일을 열어주세요.
- **style.css**: 웹페이지의 디자인 스타일 시트입니다.
- **script.js**: 시뮬레이션 및 애니메이션 제어 스크립트입니다.

## 🎓 다루는 주요 내용

### 1. 개요 (Introduction)
- **마이크로컨트롤러(MCU)란?**: 전자 제품의 두뇌 역할을 하는 소형 컴퓨터입니다.
- **비유**: 사람의 눈(센서) -> 뇌(MCU) -> 손(액추에이터) 구조와 비교하여 설명합니다.

### 2. 핵심 구조 (Structure)
- **입력 (Input)**: 물리적인 신호를 전기 신호로 받아들이는 과정 (예: 스위치, 온도센서).
- **처리 (Processing)**: 입력된 신호를 프로그램(코드)에 따라 판단하고 계산하는 과정.
- **출력 (Output)**: 판단 결과를 이용해 외부 장치를 제어하는 과정 (예: LED 켜기, 모터 회전).

### 3. 신호의 이해 (Signals)
- **디지털 신호 (Digital)**: 0 또는 1, 켜짐(ON) 또는 꺼짐(OFF)의 두 가지 상태만 존재합니다.
- **아날로그 신호 (Analog)**: 온도, 소리, 빛의 밝기처럼 연속적으로 변화하는 값입니다.

### 4. 제어 로직 (Logic)
- **조건문 (If-Else)**: "만약 버튼이 눌리면 -> LED를 켜라, 아니면 -> 꺼라"와 같은 판단 구조입니다.

## 🚀 실행 방법
`index.html` 파일을 더블 클릭하거나 웹 브라우저로 드래그하여 실행하면 바로 학습을 시작할 수 있습니다.

# 마이크로 컨트롤러 기초 예제 문제
> 공업고등학교 마이크로 컨트롤러 제어 과정 - 연습 문제집

---

## 📚 문제 구성

| 난이도 | 문제 수 | 주제 |
|--------|---------|------|
| 🟢 기초 | 4문제 | 기본 개념, 디지털 I/O |
| 🟡 중급 | 4문제 | 아날로그 입력, PWM, 센서 |
| 🔴 고급 | 2문제 | 통합 제어, 프로젝트 |

---

## 🟢 기초 문제

### 문제 1: LED 깜빡이기 (Blink)

**난이도:** ⭐☆☆☆☆

**문제:**
Arduino Uno를 사용하여 13번 핀에 연결된 LED를 1초 간격으로 깜빡이게 하는 프로그램을 작성하시오.

**조건:**
- LED ON: 1초
- LED OFF: 1초
- 무한 반복

**예시 답안:**
```cpp
void setup() {
  pinMode(13, OUTPUT);  // 13번 핀을 출력으로 설정
}

void loop() {
  digitalWrite(13, HIGH);  // LED 켜기
  delay(1000);             // 1초 대기
  digitalWrite(13, LOW);   // LED 끄기
  delay(1000);             // 1초 대기
}
```

**학습 포인트:**
- `pinMode()` 함수로 핀 모드 설정
- `digitalWrite()` 함수로 디지털 출력
- `delay()` 함수로 시간 지연

---

### 문제 2: 버튼으로 LED 제어

**난이도:** ⭐⭐☆☆☆

**문제:**
2번 핀에 연결된 버튼을 누르면 13번 핀의 LED가 켜지고, 버튼을 떼면 LED가 꺼지는 프로그램을 작성하시오.

**회로 구성:**
- 버튼: 2번 핀 (풀다운 저항 사용)
- LED: 13번 핀

**조건:**
- 버튼을 누르는 동안만 LED가 켜져야 함
- 시리얼 모니터에 버튼 상태 출력

**예시 답안:**
```cpp
const int buttonPin = 2;  // 버튼 핀
const int ledPin = 13;    // LED 핀

void setup() {
  pinMode(buttonPin, INPUT);   // 버튼 핀을 입력으로 설정
  pinMode(ledPin, OUTPUT);     // LED 핀을 출력으로 설정
  Serial.begin(9600);          // 시리얼 통신 시작
}

void loop() {
  int buttonState = digitalRead(buttonPin);  // 버튼 상태 읽기
  
  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);  // 버튼이 눌리면 LED 켜기
    Serial.println("버튼 눌림 - LED ON");
  } else {
    digitalWrite(ledPin, LOW);   // 버튼이 떼지면 LED 끄기
    Serial.println("버튼 떼짐 - LED OFF");
  }
  
  delay(100);  // 디바운싱을 위한 짧은 지연
}
```

**학습 포인트:**
- `digitalRead()` 함수로 디지털 입력 읽기
- 조건문(`if-else`)을 이용한 제어
- 시리얼 통신 기초
- 디바운싱 개념

---

### 문제 3: 신호등 시스템

**난이도:** ⭐⭐☆☆☆

**문제:**
빨강(8번), 노랑(9번), 초록(10번) LED를 사용하여 신호등 시스템을 구현하시오.

**동작 순서:**
1. 빨강 LED 5초 점등
2. 노랑 LED 2초 점등
3. 초록 LED 5초 점등
4. 반복

**예시 답안:**
```cpp
const int redPin = 8;
const int yellowPin = 9;
const int greenPin = 10;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(yellowPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
}

void loop() {
  // 빨강 신호
  digitalWrite(redPin, HIGH);
  digitalWrite(yellowPin, LOW);
  digitalWrite(greenPin, LOW);
  delay(5000);
  
  // 노랑 신호
  digitalWrite(redPin, LOW);
  digitalWrite(yellowPin, HIGH);
  digitalWrite(greenPin, LOW);
  delay(2000);
  
  // 초록 신호
  digitalWrite(redPin, LOW);
  digitalWrite(yellowPin, LOW);
  digitalWrite(greenPin, HIGH);
  delay(5000);
}
```

**학습 포인트:**
- 다중 출력 제어
- 순차적 동작 구현
- 실생활 응용 사례

**응용 과제:**
- 보행자 신호등 추가하기
- 버튼으로 보행자 신호 요청 기능 추가

---

### 문제 4: 시리얼 모니터로 LED 제어

**난이도:** ⭐⭐☆☆☆

**문제:**
시리얼 모니터에서 '1'을 입력하면 LED가 켜지고, '0'을 입력하면 LED가 꺼지는 프로그램을 작성하시오.

**조건:**
- LED: 13번 핀
- 보드레이트: 9600
- 잘못된 입력 시 오류 메시지 출력

**예시 답안:**
```cpp
const int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
  Serial.println("LED 제어 프로그램 시작");
  Serial.println("1: LED ON, 0: LED OFF");
}

void loop() {
  if (Serial.available() > 0) {
    char command = Serial.read();  // 시리얼 입력 읽기
    
    if (command == '1') {
      digitalWrite(ledPin, HIGH);
      Serial.println("LED가 켜졌습니다.");
    } 
    else if (command == '0') {
      digitalWrite(ledPin, LOW);
      Serial.println("LED가 꺼졌습니다.");
    } 
    else {
      Serial.println("오류: '1' 또는 '0'을 입력하세요.");
    }
  }
}
```

**학습 포인트:**
- 시리얼 통신 활용
- `Serial.available()` 및 `Serial.read()` 사용
- 사용자 입력 처리

---

## 🟡 중급 문제

### 문제 5: 가변 저항으로 LED 밝기 조절

**난이도:** ⭐⭐⭐☆☆

**문제:**
A0 핀에 연결된 가변 저항(포텐셔미터)의 값을 읽어 9번 핀의 LED 밝기를 조절하는 프로그램을 작성하시오.

**회로 구성:**
- 가변 저항: A0 핀 (아날로그 입력)
- LED: 9번 핀 (PWM 핀)

**조건:**
- 가변 저항 값(0-1023)을 PWM 값(0-255)으로 변환
- 시리얼 모니터에 현재 값 출력

**예시 답안:**
```cpp
const int potPin = A0;   // 가변 저항 핀
const int ledPin = 9;    // LED 핀 (PWM)

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int potValue = analogRead(potPin);           // 아날로그 값 읽기 (0-1023)
  int brightness = map(potValue, 0, 1023, 0, 255);  // 0-255로 변환
  
  analogWrite(ledPin, brightness);  // PWM 출력
  
  // 시리얼 모니터 출력
  Serial.print("가변저항 값: ");
  Serial.print(potValue);
  Serial.print(" | LED 밝기: ");
  Serial.println(brightness);
  
  delay(100);
}
```

**학습 포인트:**
- `analogRead()` 함수로 아날로그 입력
- `analogWrite()` 함수로 PWM 출력
- `map()` 함수로 값 범위 변환
- PWM 개념 이해

---

### 문제 6: 온도 센서로 경고 시스템

**난이도:** ⭐⭐⭐☆☆

**문제:**
DHT11 센서로 온도를 측정하여 30°C 이상이면 빨간 LED를 켜고 부저를 울리는 경고 시스템을 만드시오.

**회로 구성:**
- DHT11 센서: 2번 핀
- 빨간 LED: 13번 핀
- 부저: 8번 핀

**조건:**
- 1초마다 온도 측정
- 시리얼 모니터에 온도 출력
- 30°C 이상: 경고 (LED + 부저)
- 30°C 미만: 정상 (LED OFF)

**예시 답안:**
```cpp
#include <DHT.h>

#define DHTPIN 2
#define DHTTYPE DHT11

const int ledPin = 13;
const int buzzerPin = 8;
const float tempThreshold = 30.0;  // 경고 온도

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buzzerPin, OUTPUT);
  Serial.begin(9600);
  dht.begin();
  Serial.println("온도 경고 시스템 시작");
}

void loop() {
  float temperature = dht.readTemperature();
  
  if (isnan(temperature)) {
    Serial.println("센서 읽기 실패!");
    return;
  }
  
  Serial.print("현재 온도: ");
  Serial.print(temperature);
  Serial.println("°C");
  
  if (temperature >= tempThreshold) {
    // 경고 상태
    digitalWrite(ledPin, HIGH);
    tone(buzzerPin, 1000);  // 1000Hz 소리
    Serial.println("⚠️ 경고: 온도가 높습니다!");
  } else {
    // 정상 상태
    digitalWrite(ledPin, LOW);
    noTone(buzzerPin);
    Serial.println("✓ 정상 온도");
  }
  
  delay(1000);
}
```

**학습 포인트:**
- DHT 라이브러리 사용
- 센서 데이터 읽기 및 검증
- `tone()` 함수로 부저 제어
- 임계값 기반 제어

**필요 라이브러리:**
- DHT sensor library by Adafruit

---

### 문제 7: 초음파 센서로 거리 측정

**난이도:** ⭐⭐⭐☆☆

**문제:**
HC-SR04 초음파 센서로 거리를 측정하여 LCD에 표시하고, 20cm 이하일 때 LED를 켜는 프로그램을 작성하시오.

**회로 구성:**
- HC-SR04: Trig(7번), Echo(6번)
- LCD 1602: I2C 연결
- LED: 13번 핀

**예시 답안:**
```cpp
#include <LiquidCrystal_I2C.h>

const int trigPin = 7;
const int echoPin = 6;
const int ledPin = 13;

LiquidCrystal_I2C lcd(0x27, 16, 2);  // I2C 주소 0x27, 16x2 LCD

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(ledPin, OUTPUT);
  
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("Distance Meter");
  delay(2000);
  lcd.clear();
  
  Serial.begin(9600);
}

void loop() {
  // 초음파 발생
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Echo 신호 수신
  long duration = pulseIn(echoPin, HIGH);
  
  // 거리 계산 (cm)
  float distance = duration * 0.034 / 2;
  
  // LCD 출력
  lcd.setCursor(0, 0);
  lcd.print("Distance: ");
  lcd.print(distance);
  lcd.print(" cm  ");
  
  // 시리얼 출력
  Serial.print("거리: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  // 20cm 이하일 때 LED 켜기
  if (distance <= 20) {
    digitalWrite(ledPin, HIGH);
    lcd.setCursor(0, 1);
    lcd.print("WARNING: CLOSE! ");
  } else {
    digitalWrite(ledPin, LOW);
    lcd.setCursor(0, 1);
    lcd.print("                ");
  }
  
  delay(500);
}
```

**학습 포인트:**
- 초음파 센서 동작 원리
- `pulseIn()` 함수 사용
- 거리 계산 공식
- LCD I2C 통신

**필요 라이브러리:**
- LiquidCrystal_I2C

---

### 문제 8: RGB LED 색상 제어

**난이도:** ⭐⭐⭐☆☆

**문제:**
RGB LED를 사용하여 빨강, 초록, 파랑, 노랑, 보라, 청록, 흰색을 순서대로 표시하는 프로그램을 작성하시오.

**회로 구성:**
- RGB LED: R(9번), G(10번), B(11번) - PWM 핀 사용

**조건:**
- 각 색상을 1초씩 표시
- 무한 반복

**예시 답안:**
```cpp
const int redPin = 9;
const int greenPin = 10;
const int bluePin = 11;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);
  Serial.begin(9600);
}

void setColor(int red, int green, int blue) {
  analogWrite(redPin, red);
  analogWrite(greenPin, green);
  analogWrite(bluePin, blue);
}

void loop() {
  // 빨강
  Serial.println("빨강");
  setColor(255, 0, 0);
  delay(1000);
  
  // 초록
  Serial.println("초록");
  setColor(0, 255, 0);
  delay(1000);
  
  // 파랑
  Serial.println("파랑");
  setColor(0, 0, 255);
  delay(1000);
  
  // 노랑 (빨강 + 초록)
  Serial.println("노랑");
  setColor(255, 255, 0);
  delay(1000);
  
  // 보라 (빨강 + 파랑)
  Serial.println("보라");
  setColor(255, 0, 255);
  delay(1000);
  
  // 청록 (초록 + 파랑)
  Serial.println("청록");
  setColor(0, 255, 255);
  delay(1000);
  
  // 흰색 (모든 색)
  Serial.println("흰색");
  setColor(255, 255, 255);
  delay(1000);
  
  // 꺼짐
  Serial.println("꺼짐");
  setColor(0, 0, 0);
  delay(1000);
}
```

**학습 포인트:**
- RGB 색상 혼합 원리
- 함수 정의 및 사용
- PWM을 이용한 색상 제어

**응용 과제:**
- 가변 저항 3개로 RGB 값을 각각 조절하기
- 무지개 색상 그라데이션 효과 만들기

---

## 🔴 고급 문제

### 문제 9: 스마트 식물 관리 시스템

**난이도:** ⭐⭐⭐⭐☆

**문제:**
토양 습도 센서와 조도 센서를 사용하여 식물 관리 시스템을 만드시오.

**기능 요구사항:**
1. 토양이 건조하면 (센서 값 < 300) 물 펌프 작동 (릴레이 제어)
2. 어두우면 (조도 < 500) LED 조명 켜기
3. LCD에 현재 상태 표시
4. 시리얼 모니터에 센서 값 출력

**회로 구성:**
- 토양 습도 센서: A0
- 조도 센서(CDS): A1
- 릴레이 모듈: 7번 핀
- LED: 8번 핀
- LCD 1602: I2C

**예시 답안:**
```cpp
#include <LiquidCrystal_I2C.h>

const int soilPin = A0;
const int lightPin = A1;
const int pumpPin = 7;
const int ledPin = 8;

const int soilThreshold = 300;
const int lightThreshold = 500;

LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  pinMode(pumpPin, OUTPUT);
  pinMode(ledPin, OUTPUT);
  
  lcd.init();
  lcd.backlight();
  Serial.begin(9600);
  
  lcd.setCursor(0, 0);
  lcd.print("Smart Plant");
  lcd.setCursor(0, 1);
  lcd.print("System Ready");
  delay(2000);
}

void loop() {
  int soilValue = analogRead(soilPin);
  int lightValue = analogRead(lightPin);
  
  // 시리얼 출력
  Serial.print("토양 습도: ");
  Serial.print(soilValue);
  Serial.print(" | 조도: ");
  Serial.println(lightValue);
  
  // LCD 첫 번째 줄: 센서 값
  lcd.setCursor(0, 0);
  lcd.print("S:");
  lcd.print(soilValue);
  lcd.print(" L:");
  lcd.print(lightValue);
  lcd.print("   ");
  
  // 토양 습도 제어
  if (soilValue < soilThreshold) {
    digitalWrite(pumpPin, HIGH);  // 펌프 ON
    lcd.setCursor(0, 1);
    lcd.print("Pump:ON ");
    Serial.println("💧 물 공급 중...");
  } else {
    digitalWrite(pumpPin, LOW);   // 펌프 OFF
    lcd.setCursor(0, 1);
    lcd.print("Pump:OFF");
  }
  
  // 조도 제어
  if (lightValue < lightThreshold) {
    digitalWrite(ledPin, HIGH);   // LED ON
    lcd.setCursor(9, 1);
    lcd.print("L:ON ");
    Serial.println("💡 조명 켜짐");
  } else {
    digitalWrite(ledPin, LOW);    // LED OFF
    lcd.setCursor(9, 1);
    lcd.print("L:OFF");
  }
  
  delay(2000);
}
```

**학습 포인트:**
- 다중 센서 통합
- 릴레이 모듈 제어
- 실시간 모니터링 시스템
- 자동화 제어 로직

**안전 주의사항:**
- 릴레이 사용 시 전원 분리
- 물 펌프는 방수 처리 필요

---

### 문제 10: IoT 온습도 모니터링 (ESP32)

**난이도:** ⭐⭐⭐⭐⭐

**문제:**
ESP32와 DHT22 센서를 사용하여 WiFi를 통해 웹 서버에서 온습도를 실시간으로 확인할 수 있는 시스템을 만드시오.

**기능 요구사항:**
1. WiFi 연결
2. 웹 서버 구동
3. 온습도 데이터를 HTML 페이지로 표시
4. 자동 새로고침 (5초마다)

**회로 구성:**
- ESP32
- DHT22 센서: GPIO 4번

**예시 답안:**
```cpp
#include <WiFi.h>
#include <WebServer.h>
#include <DHT.h>

// WiFi 설정
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

// DHT 센서 설정
#define DHTPIN 4
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);

// 웹 서버 객체
WebServer server(80);

void setup() {
  Serial.begin(115200);
  dht.begin();
  
  // WiFi 연결
  Serial.print("WiFi 연결 중...");
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println("\nWiFi 연결 성공!");
  Serial.print("IP 주소: ");
  Serial.println(WiFi.localIP());
  
  // 웹 서버 라우팅
  server.on("/", handleRoot);
  server.on("/data", handleData);
  
  server.begin();
  Serial.println("웹 서버 시작!");
}

void loop() {
  server.handleClient();
}

void handleRoot() {
  String html = "<!DOCTYPE html><html><head>";
  html += "<meta charset='UTF-8'>";
  html += "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
  html += "<title>ESP32 온습도 모니터</title>";
  html += "<style>";
  html += "body { font-family: Arial; text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 50px; }";
  html += ".container { background: rgba(255,255,255,0.1); padding: 30px; border-radius: 20px; max-width: 500px; margin: 0 auto; }";
  html += "h1 { font-size: 2.5em; margin-bottom: 30px; }";
  html += ".data { font-size: 3em; margin: 20px 0; font-weight: bold; }";
  html += ".label { font-size: 1.2em; opacity: 0.9; }";
  html += "</style>";
  html += "<script>";
  html += "setInterval(function() { location.reload(); }, 5000);";  // 5초마다 새로고침
  html += "</script>";
  html += "</head><body>";
  html += "<div class='container'>";
  html += "<h1>🌡️ 온습도 모니터</h1>";
  
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();
  
  if (isnan(temperature) || isnan(humidity)) {
    html += "<p style='color: #ff6b6b;'>센서 읽기 실패!</p>";
  } else {
    html += "<div class='label'>온도</div>";
    html += "<div class='data'>" + String(temperature, 1) + " °C</div>";
    html += "<div class='label'>습도</div>";
    html += "<div class='data'>" + String(humidity, 1) + " %</div>";
  }
  
  html += "<p style='margin-top: 30px; opacity: 0.7;'>자동 새로고침: 5초</p>";
  html += "</div></body></html>";
  
  server.send(200, "text/html", html);
}

void handleData() {
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();
  
  String json = "{";
  json += "\"temperature\":" + String(temperature, 1) + ",";
  json += "\"humidity\":" + String(humidity, 1);
  json += "}";
  
  server.send(200, "application/json", json);
}
```

**학습 포인트:**
- ESP32 WiFi 연결
- 웹 서버 구축
- HTML/CSS를 이용한 UI 구성
- JSON 데이터 전송
- IoT 시스템 구현

**필요 라이브러리:**
- WiFi (ESP32 내장)
- WebServer (ESP32 내장)
- DHT sensor library

**사용 방법:**
1. WiFi SSID와 비밀번호 입력
2. 코드 업로드
3. 시리얼 모니터에서 IP 주소 확인
4. 웹 브라우저에서 해당 IP 접속

---

## 📝 평가 기준

### 코드 품질
- [ ] 주석이 적절히 포함되어 있는가?
- [ ] 변수명이 의미있게 작성되었는가?
- [ ] 들여쓰기가 올바른가?
- [ ] 매직 넘버 대신 상수를 사용했는가?

### 기능 구현
- [ ] 요구사항을 모두 충족하는가?
- [ ] 예외 상황을 처리하는가?
- [ ] 안정적으로 동작하는가?

### 회로 구성
- [ ] 회로도가 정확한가?
- [ ] 부품 연결이 올바른가?
- [ ] 안전 수칙을 준수했는가?

---

## 💡 학습 팁

### 디버깅 방법
1. **시리얼 모니터 활용**: `Serial.println()`으로 변수 값 확인
2. **단계별 테스트**: 기능을 하나씩 추가하며 테스트
3. **LED로 상태 표시**: 코드 실행 흐름 파악

### 코드 작성 순서
1. 핀 번호 및 상수 정의
2. `setup()` 함수에서 초기화
3. `loop()` 함수에서 메인 로직 구현
4. 필요시 별도 함수로 분리

### 자주 하는 실수
- ❌ PWM 핀이 아닌 곳에 `analogWrite()` 사용
- ❌ 아날로그 핀을 디지털로 사용할 때 'A' 접두사 누락
- ❌ `delay()` 과다 사용으로 반응성 저하
- ❌ 시리얼 통신 보드레이트 불일치

---

## 🔗 참고 자료

- [Arduino 공식 레퍼런스](https://www.arduino.cc/reference/ko/)
- [TinkerCAD Circuits](https://www.tinkercad.com/circuits) - 온라인 시뮬레이터
- [Fritzing](https://fritzing.org/) - 회로도 작성 도구

---

## 📊 난이도별 학습 로드맵

```
🟢 기초 (1-4주차)
├─ 디지털 I/O
├─ 시리얼 통신
└─ 기본 제어 구조

🟡 중급 (5-8주차)
├─ 아날로그 I/O
├─ PWM 제어
├─ 센서 활용
└─ LCD 출력

🔴 고급 (9-12주차)
├─ 다중 센서 통합
├─ 릴레이 제어
├─ WiFi 통신
└─ 웹 서버 구축
```

---

**문서 정보**
- 작성일: 2026-01-17
- 버전: 1.0
- 문제 수: 10개
- 대상: 공업고등학교 학생

**© 2026 공업고등학교 마이크로 컨트롤러 제어 과정**

