<!-- lastmod 2022-08-03 -->
<!-- image -->

Evaluates: MAX78000

## General Description

The MAX78000 evaluation kit (EV kit) provides a platform for leveraging the capabilities of the MAX78000 to build new generations of artificial intelligence (AI) devices.

Onboard hardware includes a digital microphone, a gyroscope/accelerometer,  parallel  camera  module  support and a 3.5in touch-enabled color TFT display. A secondary display  is  driven  by  a  power  accumulator  for  tracking device power consumption over time. Uncommitted GPIO as  well  as  analog  inputs  are  readily  accessible  through 0.1in pin headers. Primary system power as well as UART access is provided by a USB Micro-B connector. A USB to SPI bridge provides rapid access to onboard memory, allowing large networks or images to load quickly.

## EV Kit Contents

- EV Kit Board Featuring the MAX78000
- MAX32625PICO Debugger with Cables
- Olimex ARM-USB-OCD-H
- Olimex ARM-JTAG 20-10 Adapter
- Camera Module
- 2 USB Standard-A to USB Micro-B Cables
- 1 USB Standard-A to USB Standard-B Cable
- Extra Shunts

## MAX78000 EV Kit Board

<!-- image -->

319-100579; Rev 2; 5/22

©

## MAX78000 Evaluation Kit

## Benefits and Features

- Power Accumulator with Dedicated Display to Track Device Power over Time
- Onboard Digital Microphone
- Onboard Accelerometer/Gyroscope
- SWD JTAG 10-Pin Header
- RISC-V Coprocessor JTAG 10-Pin Header
- 16MB QSPI Flash
- Select GPIOs Accessible through 0.1in Headers
- Four ADC Inputs with Optional AA Filter
- Touch-Enabled, 3.5in, 320 x 240 Color TFT Display
- UART Access through USB Bridge
- QSPI Memory Access through USB Bridge
- All IC Power Rails May Be Isolated by Jumpers for Individual Current Measurements
- Two General-Purpose LEDs and Two GeneralPurpose Pushbutton Switches

Ordering Information appears at end of data sheet.

## Quick Start

## Required Equipment

- MAX78000 EV Kit
- One USB Standard-A to USB Micro-B Cable

## Procedure

The MAX78000 EV kit comes with a MAX78000 device that has been preprogrammed with a sample application. This  application  blinks  an  LED  and  repeatedly  outputs messages to its UART. Use this application to verify the hardware  is  connected  and  functioning  properly.  Follow the steps below to verify board operation:

- 1) While observing safe ESD practices, carefully re -move the MAX78000 EV kit board out of its packaging. Inspect the board to ensure that no damage occurred during shipment. Jumpers/shunts are preinstalled prior to testing and packaging.
- 2) Begin by making sure the PWR switch (SW1) is in the 'OFF' position.
- 3) Make sure that jumper JP1 is installed. This jumper enables LED, D1. Also, make sure that the P0\_0 and P0\_1 jumpers are installed on JH1. These two jumpers connect UART 0 RX and TX to the console output.
- 4) Connect a USB cable from the PC to the USB/PWR connector (CN1) of the EV kit. This cable will power the board and provide a virtual serial port connection to the MAX78000 UART.
- 5) On your PC, open a serial terminal application (such as minicom or gtkterm), and connect to the virtual serial port using a baud rate of 115200bps and 8-N-1 settings.
- 6) Move the PWR switch to the 'ON' position.
- 7) You will see message from the MAX78000 appear in the terminal, and LED1 (D1) on the board will begin blinking at a steady rate. This verifies proper EV kit operation.

Windows is a registered trademark of Microsoft Corporation.

## Evaluates: MAX78000

## Detailed Description of Hardware (or Software)

## Power Supply

The EV kit is powered by +5V sourced from VBUS on the USB Micro-B connector CN1. The IC features an integrated SIMO switching power supply, offering high efficiency and supporting  low-power-drain  operating  modes.  The  CNN power boost circuit supplements the single-input multipleoutput (SIMO), supporting the CNN core when peak com -puting speed is required.

## Current Monitoring

Two-pin jumper JP21 provides a convenient current moni -toring point for total MAX78000 consumption. All device current passes through this jumper. In addition, jumpers JP8 through JP12 provide both current monitoring points on individual device power rails, plus a way to bypass the internal SIMO regulator with onboard LDO regulators.

## Power Accumulator

This specialized IC, U13, provides cumulative power con -sumption data on major internal blocks of the MAX78000. Raw  data  is  formatted  for  display  by  the  power  data processor, U20, which drives an onboard OLED display. Operating mode options are selected with the LEFT and RIGHT power mode pushbuttons, which cycle through the available options using the OLED display.

## UART - USB Bridge

The  EV  kit  includes  an  FTDI  FT230X  USB-to-UART bridge chip. This eliminates the requirement for a physical RS-232  COM  port.  Instead,  the  MAX78000  UARTs  are accessed through a USB Micro-B connector, CN1. UART 0 and UART 1 are selected using JH1 and JH2, which also provide direct access to the MAX78000 UARTs, bypass -ing the bridge chip. Virtual COM port drivers and guides for installing Windows ® drivers are available at the FTDI chip website.

## QSPI - USB Bridge

The  EV  kit  includes  an  FTDI  FT4222  QSPI-to-UART bridge chip. This provides rapid access to system memory for loading network and image data.

## MAX780 Evaluation Kit

## I 2 S

An onboard digital microphone is provided along with a low-jitter  12.288MHz  clock  oscillator  and  provisions  for external I 2 S clocking using SMA connector J5.

## Color TFT Display with Touch Control

The display provided is a 3.5in, 320 x 240 color TFT. It has three-wire serial control and a white LED backlight, and it uses a resistive touch-sensitive screen.

## RV JTAG/Arm ® SWD (Serial Wire Debug) Support

RISC V coprocessor JTAG is accessed through an Arm Cortex ® standard  10-pin  connector  (JH4).  Logic  levels are set to VDDIO (1.8V). A hardware (HW) reset may be enabled using JP18, but this function is normally reserved for  the  Arm  Cortex  processor  using  SWD  through  an Arm Cortex standard 10-pin connector (JH5), also using VDDIO (1.8V) levels.

## Reset Pushbutton

Pushbutton SW5 manually resets the MAX78000.

## Auxiliary LEDs

The  indicator  LED1  (D1)  is  connected  to  GPIO  P0.2. Indicator  LED2  (D2)  is  connected  to  GPIO  P0.3.  These

## Table 1. MAX78000 EV Kit Jumper Settings

| JUMPER   | SIGNAL    | SETTINGS   | DESCRIPTION                            |
|----------|-----------|------------|----------------------------------------|
| JP1      | LED1 EN   | 1-2*       | Enables auxiliary LED1                 |
| JP1      | LED1 EN   | Open       | Disables auxiliary LED1                |
| JP2      | LED2 EN   | 1-2*       | Enables auxiliary LED2                 |
| JP2      | LED2 EN   | Open       | Disables auxiliary LED2                |
| JP3      | TRIG1     | 1-2*       | Enables power monitor event trigger 1  |
| JP3      | TRIG1     | Open       | Disables power monitor event trigger 1 |
| JP4      | TRIG2     | 1-2*       | Enables power monitor event trigger 2  |
| JP4      | TRIG2     | Open       | Disables power monitor event trigger 2 |
| JP5      | VREGI     | 1-2*       | Enables 3V3 VREGI power                |
| JP5      | VREGI     | Open       | Disables 3V3 VREGI power               |
| JP6      | VREGIA    | 1-2*       | Enables 3V3 VREGIA power               |
| JP6      | VREGIA    | Open       | Disables 3V3 VREGIA power              |
| JP7      | CNN BOOST | 1-2*       | Enables 1V1 boost LDO power            |
| JP7      | CNN BOOST | Open       | Disables 1V1 boost LDO power           |

Arm and Cortex are registered trademarks of Arm Limited.

Evaluates: MAX78000

GPIOs must be configured for VDDIOH (3.3V) for proper operation.  Buffer  U2  prevents  loading  the  ports,  since these ports also may serve as HW flow control for UART 0.

## GPIO Pushbuttons

Pushbuttons  PB1  and  PB2  connect  to  P2.6  and  P2.7, respectively. Pressing a button pulls the associated port low.

## GPIO Headers

Select GPIOs are accessible through 0.1in spaced header pins.  The  IC  provides  support  for  both  1.8V  and  3.3V peripherals  through  power  rails  VDDIO  and  VDDIOH. GPIO voltages can be programmed on a pin-by-pin basis.

## Wakeup Input

The MAX78000 offers multiple low-power and micropower operating  modes.  Wakeup  pushbutton  SW4  provides  a debounced signal to bring the IC back into normal operat -ing mode.

## Parallel Camera Module

The MAX78000 supports parallel camera interface (PCIF) devices. The included camera module plugs into the EV kit board and uses an OVM7692 integrated camera/lens device.

## Table 1. MAX78000 EV Kit Jumper Settings (continued)

| JUMPER   | SIGNAL           | SETTINGS      | DESCRIPTION                                          |
|----------|------------------|---------------|------------------------------------------------------|
| JP8      | VDDA             | 1-2*          | Internal SIMO powers VDDA                            |
| JP8      | VDDA             | 2-3           | External LDO powers VDDA                             |
| JP9      | VDDIO            | 1-2*          | Internal SIMO powers VDDIO                           |
| JP9      | VDDIO            | 2-3           | External LDO powers VDDIO                            |
| JP10     | VDDIOH           | 1-2*          | DUT LDO powers VDDIOH                                |
| JP10     | VDDIOH           | 2-3           | AUX LDO powers VDDIOH                                |
| JP11     | VCOREB           | 1-2*          | Internal SIMO powers VCOREB                          |
| JP11     | VCOREB           | 2-3           | External LDO powers VCOREB                           |
| JP12     | VCOREA           | 1-2*          | Internal SIMO powers VCOREA                          |
| JP12     | VCOREA           | 2-3           | External LDO powers VCOREA                           |
| JP13     | VREGI PM BYPASS  | 1-2           | Bypasses power monitor shunt                         |
| JP13     | VREGI PM BYPASS  | Open*         | Enables power monitoring using power accumulator     |
| JP14     | CNN 1V1          | 1-2*          | Connects 1V1 boost LDO to VCOREA                     |
| JP14     | CNN 1V1          | Open          | Disables 1V1 boost LDO                               |
| JP15     | VCOREAPM BYPASS  | 1-2           | Bypasses power monitor shunt                         |
| JP15     | VCOREAPM BYPASS  | Open*         | Enables power monitoring using power accumulator     |
| JP16     | VCOREB PM BYPASS | 1-2           | Bypasses power monitor shunt                         |
| JP16     | VCOREB PM BYPASS | Open*         | Enables power monitoring using power accumulator     |
| JP17     | VREG_APM BYPASS  | 1-2           | Bypasses power monitor shunt                         |
| JP17     | VREG_APM BYPASS  | Open*         | Enables power monitoring using power accumulator     |
| JP18     | RESET EN         | 1-2           | Enables RV JTAG adapter to perform full system reset |
| JP18     | RESET EN         | Open*         | Disables system reset by RV JTAG adapter             |
| JP19     | TFT BL           | 1-2*          | Enables main TFT screen backlight                    |
| JP19     | TFT BL           | Open          | Disables main TFT screen backlight                   |
| JP20     | I2S CLK SEL      | 1-2*          | Onboard 12.288MHz oscillator drives I 2 S clock      |
| JP20     | I2S CLK SEL      | 2-3           | External 1V8 CMOS LEVEL source drives I 2 S clock    |
| JP21     | DUT I            | 1-2*          | DUT 3V3 total current monitor point                  |
| JP21     | DUT I            | Open          | Open to insert current meter                         |
| JP22     | USB-SPI/CAM      | 1-2           | Enables USB-SPI bridge                               |
| JP22     | USB-SPI/CAM      | 2-3*          | Enables camera                                       |
| JH1      | UART 0 EN        | 1-2*, 3-4*    | Enables USB-UART0 bridge, software flow control      |
|          | UART 0 EN        | All open      | Disables USB-UART0 bridge, allows reuse of port pins |
| JH2      | UART 1 EN        | All installed | Enables USB-UART1 bridge                             |
| JH2      | UART 1 EN        | All open*     | Disables USB-UART1 bridge, allows reuse of port pins |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX78000EVKIT# | EV Kit |

Evaluates: MAX78000

## MAX78000 EV Kit Bill of Materials

|   QUANTITY | PART REFERENCE                                                                                                                | VALUE                  | BOM_DESCRIPTION                       | MANUFACTURER_PN        | MANUFACTURER                     |
|------------|-------------------------------------------------------------------------------------------------------------------------------|------------------------|---------------------------------------|------------------------|----------------------------------|
|          7 | BMP1,BMP2,BMP3,BMP4, BMP5,BMP6,BMP7                                                                                           | RB Bump                | BUMPER RECESSED #4 SCREW BLACK        | 720                    | Keystone Electronics             |
|          4 | C1,C75,C111,C112                                                                                                              | 1uF                    | CAP CER 1UF 35V 10% X5R 0603          | GMK107BJ105KA-T        | Taiyo Yuden                      |
|         26 | C2,C6,C8,C9,C44,C49,C69, C70,C71,C72,C86,C88,C89, C90,C91,C92,C93,C94,C95, C100,C101,C102,C105,C106, C108,C116                | 100nF                  | CAP CER 0.1UF 16V 10% X7R 0402        | GRM155R71C104KA88D     | Murata Electronics               |
|          3 | C3,C103,C113                                                                                                                  | 100nF                  | CAP CER 0.1UF 50V 10% X7R 0603        | C0603C104K5RACTU       | Kemet                            |
|          2 | C4,C5                                                                                                                         | 47pF                   | CAP CER 47PF 50V 1% NP0 0402          | C1005C0G1H470F050BA    | TDK Corporation                  |
|         10 | C7,C15,C17,C28,C41,C46,                                                                                                       | 4.7uF                  | CAP CER 4.7uF 10V 10% X5R 0603        | C0603C475K8PACTU       | Kemet                            |
|         26 | C56,C74,C104,C107 C10,C11,C12,C13,C14,C16, C22,C23,C24,C38,C39,C45, C48,C55,C61,C73,C76,C77, C78,C79,C80,C81,C82,C83, C84,C85 | 1uF                    | CAP CER 1UF 16V 10% X5R 0402          | GRT155R61C105KE01D     | Murata Electronics North America |
|          2 | C18,C20                                                                                                                       | 10nF                   | CAP CER 10000PF 16V 10% X7R 0402      | GRM155R71C103KA01D     | Murata Electronics North America |
|          3 | C19,C21,C87                                                                                                                   | 10uF                   | CAP CER 10UF 25V 10% X7S 0805         | GRM21BC71E106KE11L     | Murata Electronics               |
|          2 | C25,C26                                                                                                                       | 47uF                   | CAP CER 47UF 6.3V 20% X5R 0805        | C2012X5R0J476M125AC    | TDK Corporation                  |
|          1 | C27                                                                                                                           | 3.3nF                  | CAP CER 3300PF 16V 10% X7R 0402       | GRM15XR71C332KA86D     | Murata Electronics North America |
|          7 | C29,C30,C31,C32,C35,C40, C50                                                                                                  | 22uF                   | CAP CER 22UF 6.3V 20% X5R 0603        | C1608X5R0J226M080AC    | TDK Corporation                  |
|          1 | C34                                                                                                                           | 100uF                  | CAP ALUM POLY 100UF 20% 25V SMD       | 25SVPF100M             | Panasonic Electronic Components  |
|          8 | C36,C37,C43,C47,C53,C54, C59,C60                                                                                              | 100nF                  | CAP CER 0.1UF 6.3V 10% X5R 0201       | GRM033R60J104KE19D     | Murata                           |
|         10 | C52,C57,C62,C64,C65,C66, C96,C97,C98,C99                                                                                      | DNI                    | DNI                                   |                        |                                  |
|          1 | C68                                                                                                                           | 220pF                  | CAP CER 220pF 50V 5% NP0 0402         | C1005C0G1H221J         | TDK Corporation                  |
|          1 | C109                                                                                                                          | 100pF                  | CAP CER 100PF 50V +/-1% NP0 0402      | 04025A101FAT2A         | AVX Corporation                  |
|          2 | C110,C114                                                                                                                     | 27pF                   | CAP CER 27PF 50V 5% NP0 0402          | GRM1555C1H270JA01D     | Murata Electronics               |
|          1 | C115                                                                                                                          | 470nF                  | CAP CER 0.47UF 10V 10% X5R 0402       | GRM155R61A474KE15J     | Murata Electronics North America |
|          3 | CN1,CN2,J1                                                                                                                    | MICRO USB B R/A        | CONN RCPT 5POS MICRO USB B R/A        | 47346-0001             | Molex                            |
|          1 | D1                                                                                                                            | GRN                    | LED 565NM WTR CLR GREEN 1206 SMD      | SML-LX1206GC-TR        | Lumex Opto                       |
|          1 | D2                                                                                                                            | RED                    | LED 660NM RED WTR CLR 1206 SMD        | SML-LX1206SRC-TR       | Lumex Opto                       |
|          1 | D3                                                                                                                            | BLUE                   | LED 469NM BLUE DIFF 1206 SMD          | HSMR-C150              | Avago Technologies US Inc.       |
|          1 | D4                                                                                                                            | SML-LX0404SIUPGUSB     | LED RGB CLEAR 0404 SMD                | SML-LX0404SIUPGUSB     | Lumex Opto/Components Inc.       |
|          1 | DSP1                                                                                                                          | CFAF320240F-035T-TS-CB | 320x240 Color TFT with Carrier Board  | CFAF320240F-035T-TS-CB | Crystalfontz                     |
|          1 | DSP2                                                                                                                          | 42P (2x21)             | CONN RCPT 42P 0.100" SMD              | HLE-121-02-f-dv        | Samtec Inc.                      |
|          7 | H1,H2,H3,H4,H5,H6,H7                                                                                                          | DNI                    | DNI MTG 125DRL 300PAD                 |                        |                                  |
|          1 | J2                                                                                                                            | MAXDAP                 | MAXDAP_POGO_PIN CBL PLUG-OF-NAILS PIN | 10- TC2050-IDC-NL      | Tag-Connect LLC                  |
|          1 | J3                                                                                                                            | 503480-1000            | CONN FFC FPC 10POS 0.50MM R/A         | 503480-1000            | Molex, LLC                       |
|          1 | J4                                                                                                                            | 24P 2x12__OVM7692-RYAA | CONN HDR 24POS 0.1 TIN PCB            | PPPC122LFBN-RC         | Sullins                          |
|          1 | J5                                                                                                                            | SMA                    | CONN SMA JACK STR 50 OHM PCB          | 5-1814832-1            | TE Connectivity                  |
|          2 | JH1,JH3                                                                                                                       | 8P 2x4                 | CONN HEADER .100 DUAL STR 8POS        | PEC04DAAN              | Sullins                          |
|          1 | JH2                                                                                                                           | 4P 2x2                 | CONN HEADER .100 DUAL STR 4POS        | PEC02DAAN              | Sullins                          |
|          2 | JH4,JH5                                                                                                                       | 10P CORTEX DEBUG       | IDC BOX HEADER 0.050 10 POS SMD       | 3220-10-0300-00        | CNC Tech                         |
|          1 | JH6                                                                                                                           | 5P 1x5                 | CONN HEADER .100 SINGL STR 5POS       | PEC05SAAN              | Sullins                          |
|         15 | JP1,JP2,JP3,JP4,JP5,JP6, JP7,JP13,JP14,JP15,JP16, JP17,JP18,JP19,JP21                                                         | JUMPER                 | CONN HEADER .100 SINGL STR 2POS (2x1) | PEC02SAAN              | Sullins                          |
|          7 | JP8,JP9,JP10,JP11,JP12, JP20,JP22                                                                                             | 3P JUMPER              | CONN HEADER .100 SINGL STR 3POS       | PEC03SAAN              | Sullins                          |
|          1 | L1                                                                                                                            | BLM41PG102SN1L         | FERRITE CHIP 1K OHM 1500MA 1806       | BLM41PG102SN1L         | Murata Electronics               |
|          1 | L2                                                                                                                            | 2.2uH                  | FIXED IND 2.2UH 1A 150 MOHM SMD 0805  | MLP2012H2R2MT0S1       | TDK Corporation                  |
|          2 | L3,L4                                                                                                                         | BLM21AG121SN1D         | FERRITE BEAD 120 OHM 0805 1LN         | BLM21AG121SN1D         | Murata Electronics North America |
|          1 | L5                                                                                                                            | 2.2uH                  | FIXED IND 2.2UH 3.25A 61 MOHM         | 74437324022            | Wurth Elektronik                 |
|            | MS7 MST1,MST2,MST3,MST4,                                                                                                      |                        |                                       | 1808                   |                                  |
|          7 | MST5,MST6,MST7                                                                                                                | STANDOFF               | HEX STANDOFF 4-40 ALUMINUM 5/8"       |                        | Keystone Electronics             |

Evaluates: MAX780

## MAX78000 EV Kit Bill of Materials (continued)

| QUANTITY   | PART REFERENCE                                    | VALUE                          | BOM_DESCRIPTION                                              | MANUFACTURER_PN                       | MANUFACTURER                              |
|------------|---------------------------------------------------|--------------------------------|--------------------------------------------------------------|---------------------------------------|-------------------------------------------|
| 1          | PCB1                                              | PCB                            |                                                              |                                       |                                           |
| 1          | R1                                                | 332                            | RES 332 OHM 1/10W 1% 0603 SMD                                | ERJ-3EKF3320V                         | Panasonic                                 |
| 3          | R2,R3,R35                                         | 100K                           | RES SMD 100K OHM 1% 1/10W 0402                               | ERJ-2RKF1003X                         | Panasonic                                 |
| 1          | R4                                                | 470                            | RES 470 OHM 1/10W 1% 0603 SMD                                | ERJ-3EKF4700V                         | Panasonic                                 |
| 2          | R5,R6                                             | 27                             | RES SMD 27 OHM 1% 1/10W 0402                                 | ERJ-2RKF27R0X                         | Panasonic                                 |
| 1          | R7                                                | 2.7K                           | RES 2.7K OHM 1/10W 1% 0603 SMD                               | ERJ-3EKF2701V                         | Panasonic                                 |
| 1          | R9                                                | 30K                            | RES SMD 30K OHM 1% 1/10W 0402                                | ERJ-2RKF3002X                         | Panasonic                                 |
| 1          | R10                                               | 3.32K                          | RES SMD 3.32K OHM 1% 1/10W 0402                              | ERJ-2RKF3321X                         | Panasonic                                 |
| 1          | R11                                               | 8.2K                           | RES SMD 8.2K OHM 1% 1/16W 0402                               | RC0402FR-078K2L                       | Yageo                                     |
| 16         | R12,R36,R40,R41,R46,R47, R48,R53,R55,R56,R58,R59, | 10K                            | RES SMD 10K OHM 1% 1/16W 0402                                | RC0402FR-0710KL                       | Yageo                                     |
| 0          | R13,R16,R21,R24                                   | 33.2                           | RES 33.2 OHM 1/10W 1% 0603 SMD                               | ERJ-3EKF33R2V                         | Panasonic                                 |
| 4          | R14,R18,R22,R25                                   | 100 mOhms                      | RES 0.1 OHM 1% 3/4W 1206                                     | KRL1632E-M-R100-F-T5                  | Susumu                                    |
| 1          | R17                                               | 383K                           | RES SMD 383K OHM 1% 1/10W 0402                               | ERJ-2RKF3833X                         | Panasonic Electronic Components           |
| 2          | R28,R29                                           | 49.9K                          | RES SMD 49.9K OHM 1% 1/10W 0402                              | ERJ-2RKF4992X                         | Panasonic Electronic Components           |
| 4          | R30,R31,R33,R34                                   | 0                              | RES 0.0 OHM 1/10W JUMP 0402 SMD                              | ERJ-2GE0R00X                          | Panasonic                                 |
| 6          | R37,R38,R39,R42,R50,R51                           | 2.21K                          | RES SMD 2.21K OHM 1% 1/10W 0402                              | ERJ-2RKF2211X                         | Panasonic                                 |
| 1          | R43                                               | 2.7K                           | RES SMD 2.7K OHM 1% 1/10W 0402                               | ERJ-2RKF2701X                         | Panasonic                                 |
| 1          | R44                                               | 1.4K                           | RES SMD 1.4K OHM 1% 1/10W 0402                               | ERJ-2RKF1401X                         | Panasonic Electronic Components           |
| 1          | R45                                               | 1K                             | RES 1K OHM 1/10W 1% 0402 SMD                                 | ERJ-2RKF1001X                         | Panasonic                                 |
| 2          | R52,R54                                           | 0                              | RES SMD 0 OHM JUMPER 1/10W 0603                              | RC0603JR-070RL                        | Yageo                                     |
| 1          | R57                                               | 33.2                           | RES SMD 33.2 OHM 1% 1/10W 0402                               | ERJ-2RKF33R2X                         | Panasonic                                 |
| 1 1        | R60 R61                                           | 12.1K 1M                       | RES SMD 12.1K OHM 1% 1/10W 0402 RES SMD 1M OHM 1% 1/10W 0402 | ERJ-2RKF1212X ERJ-2RKF1004X           | Panasonic Electronic Components Panasonic |
| 1          | R63                                               | 47K                            | RES SMD 47K OHM 1% 1/10W 0402                                | ERJ-2RKF4702X                         | Panasonic Electronic Components           |
| 1          | SW1                                               | SPDT 3A                        | SWITCH TOGGLE SPDT 3A 120V                                   | ET01MD1AGE                            | C&K Components                            |
| 5          | SW2,SW3,SW5,SW6,SW7                               | B3S-1000P                      | SWITCH TACTILE SPST-NO 0.05A 24V                             | B3S-1000P                             | Omron Electronics                         |
| 1          | SW4                                               | B3S-1002 BY OMZ                | SWITCH TACTILE SPST-NO 0.05A 24V                             | B3S-1002 BY OMZ                       | Omron Electronics                         |
| 4          | TP1,TP2,TP3,TP4                                   | BLK                            | TEST POINT PC MULTI PURPOSE BLK                              | 5011                                  | Keystone Electronics                      |
| 1          | TP5                                               | BLUE                           | TEST POINT PC MULTI PURPOSE BLUE                             | 5127                                  | Keystone Electronics                      |
| 1          | TP6                                               | RED                            | TEST POINT PC MULTI PURPOSE RED                              | 5010                                  | Keystone Electronics                      |
| 1          | TP7                                               | WHT                            | TEST POINT PC MULTI PURPOSE WHT                              | 5012                                  | Keystone Electronics                      |
| 1          | U1                                                | MAX78000EXG+                   | MAX78000EXG+ 81P BGA                                         | MAX78000EXG+                          | Maxim Integrated                          |
| 4          | U2,U5,U16,U18                                     | NL27WZ07DFT2G                  | IC BUFFER NON-INVERT 5.5V SC88                               | NL27WZ07DFT2G                         | ON Semiconductor                          |
| 1          | U3                                                | FT230XS-R                      | IC USB SERIAL BASIC UART 16SSOP                              | FT230XS-R                             | FTDI                                      |
| 4          | U4,U21,U26,U29                                    | MAX13202EALT+T                 | ESD PROTECT 2CH 6-UDFN                                       | MAX13202EALT+                         | Maxim Integrated                          |
| 3          | U6,U8,U11                                         | MAX8869EUE33                   | REG LDO 3.3V/ADJ 16TSSOP-EP                                  | MAX8869EUE33+                         | Maxim Integrated                          |
| 1          | U7                                                | MAX8869EUE18+                  | IC REG LDO 1.8V/ADJ 1A 16TSSOP-EP                            | MAX8869EUE18+                         | Maxim Integrated                          |
| 1          | U9                                                | MAX38902AATA+                  | IC REG LDO LINEAR ADJ .5A 8TDFN                              | MAX38902AATA+                         | Maxim Integrated                          |
| 1          | U10                                               | MAX8902BATA+T                  | IC REG LDO ADJ 0.5A 8TDFN                                    | MAX8902BATA+T                         | Maxim Integrated                          |
| 1          | U13                                               | MAX34417ENE+                   | IC 4CH SMBUS MONITOR 16TWLP                                  | MAX34417ENE+                          | Maxim Integrated                          |
| 1          | U15                                               | SPH0645LM4H-B                  | CRAWFORD MIC DGT I2S BOTTOM PORT                             | SPH0645LM4H-B                         | Knowles                                   |
| 1          | U17                                               | MAX6816EUS+T                   | IC INTFACE SPECIALIZED SOT143-4                              | MAX6816EUS+TCT-ND                     | Maxim Integrated                          |
| 1 1        | U19                                               | MAX1818EUT33+T                 | IC REG LIN POS ADJ 500MA SOT23-6                             | MAX1818EUT33+T                        | Maxim Integrated                          |
|            | U20                                               | MAX32625ITK+                   | MAX32625ITK+ 68P TQFN                                        | MAX32625ITK+                          | Maxim Integrated                          |
| 1          | U22                                               | LS013B7DH03                    | LCD TFT 1.28" 128X128 FPC                                    | LS013B7DH03                           | Sharp Microelectronics                    |
| 1          | U23                                               | BMI160                         | IMU ACCEL/GYRO I2C/SPI 14LGA                                 | BMI160                                | Bosch Sensortec                           |
| 1          | U24                                               | TSC2046IPWR                    | IC TOUCH SCREEN CTRLR LV 16TSSOP                             | TSC2046IPWR                           | TI                                        |
| 1          | U25                                               | IS25LP128-JBLE                 | IC FLASH                                                     | IS25LP128-JBLE                        | ISSI, Integrated Silicon Solution Inc     |
| 1          | U28                                               | FT4222HQ-D-R                   | IC BRIDGE USB TO I2C/SPI 32VQFN                              | FT4222HQ-D-R                          | FTDI                                      |
| 1          | U30                                               | MAX38642AENT+                  | IC REG BUCK ADJ .7A 6WLP                                     | MAX38642AENT+                         | Maxim Integrated                          |
| 1          | U31                                               | MAX4948ETG+ 81P                | IC SWITCH HEX SPDT 24TQFN MAX78000EXG+ 81P BGA SOCKET        | MAX4948ETG+                           | Maxim Integrated                          |
| 1          | XU1                                               | MAX78000EXG+                   |                                                              | 81BHC80A01                            | Plastronics                               |
| 1          | Y1                                                | 32.768kHz                      | CRYSTAL 32.768KHZ 6.0PF SMD                                  | ABS07-32.768KHZ-6-T                   | Abracon Corp                              |
| 1 1        | Y2 Y3                                             | 32.768KHz SG-210STF 12.2880ML3 | CRYSTAL 32.7680KHZ 6PF SMD XTAL OSC XO 12.2880MHZ CMOS SMD   | ECS-.327-6-12-TR SG-210STF 12.2880ML3 | ECS Inc. EPSON                            |
| 1          | Y4                                                | 12MHz                          | CRYSTAL 12MHZ 18PF SMD                                       | ABM3-12.000MHZ-D2Y-T                  | Abracon                                   |
|            |                                                   |                                |                                                              |                                       | Corp                                      |

Evaluates: MAX78000

## MAX780 Evaluation Kit

## MAX78000 EV Kit Schematic

Evaluates: MAX78000

<!-- image -->

## MAX78000 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX78000

## MAX78000 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX78000

## MAX78000 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX78000

## MAX78000 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX78000

## MAX78000 EV Kit Schematic (continued)

Evaluates: MAX78000

<!-- image -->

## MAX780 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                      | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/20            | Initial release                                                                                                                                  | -               |
|                 1 | 9/20            | Updated General Description , EV Kit Contents , EV Kit Board , Quick Start , Detailed Description of Hardware (or Software) , BOM, and Schematic | All             |
|                 2 | 5/22            | Replaced board photo                                                                                                                             | 2               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX78000