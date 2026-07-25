<!-- lastmod 2022-08-04 -->
## MAX78000FTHR Application Platform

## General Description

The MAX78000FTHR is a rapid development platform to help engineers quickly implement ultra low-power, artificial intelligence (AI) solutions using the MAX78000 Arm ® Cortex ® -M4F processor with an integrated Convolutional Neural Network accelerator. The board also includes the MAX20303  PMIC  for  battery  and  power  management. The form factor is 0.9in x 2.6in dual-row header footprint that  is  compatible  with  Adafruit  Feather  Wing  peripheral  expansion  boards.  The  board  includes  a  variety  of peripherals, such as a CMOS VGA image sensor, digital microphone, low-power stereo audio CODEC, 1MB QSPI SRAM,  micro  SD  card  connector,  RGB  indicator  LED, and pushbutton. The MAX78000FTHR provides a poweroptimized flexible platform for quick proof-of-concepts and early software development to enhance time to market.

Go to https://www.maximintegrated.com/en/products/ MAX78000FTHR to get started developing with this board.

Ordering Information appears at end of data sheet.

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

Evaluates: MAX78000

## Features

- MAX78000 Microcontroller
- Dual Core: Arm Cortex-M4 Processor with FPU, 100MHz, RISC-V Coprocessor, 60MHz
-  512KB Flash Memory
-  128KB SRAM
-  16KB Cache
- Convolutional Neural Network Accelerator
- 12-Bit Parallel Camera Interface
-  MAX20303 Wearable PMIC with Fuel Gauge
-  Charge from USB
-  On-Board DAPLink Debug and Programming Interface for Arm Cortex-M4 processor with FPU
- Breadboard Compatible Headers
-  Micro USB Connector
- Micro SD Card Connector
- Integrated Peripherals
- RGB Indicator LED
- User Pushbutton
-  CMOS VGA Image Sensor
-  Low-Power Stereo Audio CODEC
- Digital Microphone
-  SWD Debugger
- Virtual UART Console
- 10-Pin Cortex Debug Header for RISC-V Coprocessor

<!-- image -->

## MAX78000FTHR Application Platform

## Quick Start

Apply  power  to  the  MAX78000FTHR  using  the  USB cable.  The  pre-programmed  'Audio  Keyword  Spotting' demo will begin to execute.

The  RGB  LED  (D2)  will  turn  on  green,  indicating  that the  demo  is  running.  The  on-board  microphone  starts listening for the keyword GO. When the keyword GO is detected, RGB LED (D2) will turn on yellow. In this mode, when one of  nine  keywords  is  detected,  the  RGB  LED (D1) starts to blink blue one to nine times based on the number  detected  by  the  convolutional  neural  network. The  STOP  command  exits  number  keyword  detection, and the RGB LED (D2) turns on green again, and RGB LED (D1) turns off.

## PMIC and Battery Charger

The MAX20303 wearable PMIC powers the MAX78000FTHR board and is also capable of charging a Li-Ion battery (not included). The MAX20303 has an internal MOSFET that connects the battery to system output when no voltage source is available on the charge input (USB). When an external source is detected at the charge input (USB), this switch opens and the system output is powered from the input source through the input current limiter. The system output to battery switch also prevents the system output voltage from falling below battery voltage when the system load exceeds the input current limit. The smart power selector unit inside the PMIC seamlessly distributes power from the charge input (USB) to the battery  and  system output. With both the USB and battery connected, the smart power switch's basic functions are:

- When the system load requirements are less than the input current limit, the battery is charged with residual power from the input.
- When the system load requirements exceed the input current limit, the battery supplies supplemental current to the load.
- When the battery is connected, and there is no external power input (USB), the system is powered from the battery.
- When the MAX20303 thermal limits are reached, the charger does not shut down, but attempts to limit a temperature increase by reducing the input current from charge input. In this condition, the system load has priority over the charger current, so the input current is first reduced by lowering the charge current. If

## Evaluates: MAX78000

the junction temperature continues to rise and reaches the maximum operating limit, no input current is drawn from the charge input and the battery powers the entire system load.

The USB charge current is set to 51mA. This allows charging from both powered and unpowered USB hubs with no port  communication  required.  Refer  to  the  MAX20303 data sheet and the data sheet for your battery to ensure compatibility.

## Programming and Debugging

The  MAX32625  microcontroller  on  the  board  is  preprogrammed with DAPLink firmware. It allows debugging and programming of the MAX78000 Arm core over USB.

A standard 10-pin JTAG header J1 allows debugging and programming the RISC-V core of the MAX78000.

## Pushbuttons

There  are  five  pushbuttons  on  the  MAX78000FTHR board:

- SW1  User-programmable  function  button  connected  to the MAX78000 Port 0.2 through a debouncer IC.
- SW2  User-programmable  function  button  connected  to the MAX78000 Port 1.7 through a debouncer IC.
- SW3  PMIC Power Button When the board is in a powered-on state, pressing this button for 12 seconds performs a hard power-down. When the board is in a powered-off state, pressing this button powers on the board. This button can also be read by the MAX78000 firmware, PMIC\_PFN2 signal connected to the Port 3.1 is a buffered input of the button status. When the button is pressed, this signal goes to a logic-low state.
- SW4  Resets the MAX78000 through RSTN input of the MAX78000.
- SW5  DAPLink adapter button. Keep this button pressed while applying power to the board to put the MAX32625 DAPLink adapter on board to MAINTENANCE mode for DAPLink firmware updates.

## LEDs

There  are  three  RGB  LEDs  on  the  MAX78000FTHR board.

## MAX78000FTHR Application Platform

- D1 Connected to the MAX78000 GPIO ports. This LED can be controlled by user firmware.
- D2 Connected to MAX20303 PMIC LEDx outputs. These LEDs can be controlled through I 2 C commands. They also can be configured as charge status indicators by issuing I 2 C commands.
- D3 DAPLink adapter MAX32625 status LED. Controlled by the DAPLink adapter and cannot be used as a user LED.

Port 2.0 : Red color

Port 2.1 : Green color

Port 2.2 : Blue color

Figure 1. MAX78000FTHR Pinout Diagram

<!-- image -->

Evaluates: MAX78000

│

## MAX78000FTHR Application Platform

Evaluates: MAX78000

Figure 2. MAX78000FTHR Top Side Components

<!-- image -->

## MAX78000FTHR Application Platform

Evaluates: MAX78000

Figure 3. MAX78000FTHR Bottom Side Components

<!-- image -->

## MAX78000FTHR Application Platform

## Expansion Headers

## Table 1. J8 Pinout

|   PIN | NAME   | DESCRIPTION                                                                                   |
|-------|--------|-----------------------------------------------------------------------------------------------|
|     1 | RST    | Master Reset Signal                                                                           |
|     2 | 3V3    | 3.3V Output. Typically used to provide 3.3V to peripherals connected to the expansion headers |
|     3 | 1V8    | 1.8V Output. Typically used to provide 1.8V to peripherals connected to the expansion headers |
|     4 | GND    | Ground                                                                                        |
|     5 | P2_3   | GPIO or Analog Input (AIN3 channel)                                                           |
|     6 | P2_4   | GPIO or Analog Input (AIN4 channel)                                                           |
|     7 | P1_1   | GPIO or UART2 Tx signal                                                                       |
|     8 | P1_0   | GPIO or UART2 Rx signal                                                                       |
|     9 | MPC1   | GPIO controlled by PMIC through I 2 C interface. Open drain or push-pull programmable         |
|    10 | MPC2   | GPIO controlled by PMIC through I 2 C interface. Open drain or push-pull programmable         |
|    11 | P0_7   | GPIO or QSPI0 clock signal. Shared with SD card and on-board QSPI SRAM                        |
|    12 | P0_5   | GPIO or QSPI0 MOSI signal. Shared with SD card and on-board QSPI SRAM                         |
|    13 | P0_6   | GPIO or QSPI0 MISO signal. Shared with SD card and on-board QSPI SRAM                         |
|    14 | P2_6   | GPIO or LPUART Rx signal                                                                      |
|    15 | P2_7   | GPIO or LPUART Tx signal                                                                      |
|    16 | GND    | Ground                                                                                        |

## Table 2. J4 Pinout

|   PIN | NAME   | DESCRIPTION                                                                                                                                                                                                                                                                              |
|-------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | SYS    | SYS Switched Connection to the Battery. This is the primary system power supply and automatically switches between the battery voltage and the USB supply when available.                                                                                                                |
|     2 | PWR    | Turns off the PMIC if shorted to Ground for 13 seconds. Hard power-down button.                                                                                                                                                                                                          |
|     3 | VBUS   | USB VBUS Signal. This can be used as a 5V supply when connected to USB. This pin can also be used as an input to power the board, but this should only be done when not using the USB connector since there is no circuitry to prevent current from flowing back into the USB connector. |
|     4 | P1_6   | GPIO                                                                                                                                                                                                                                                                                     |
|     5 | MPC3   | GPIO controlled by PMIC through the I 2 C interface. Open drain or push-pull programmable.                                                                                                                                                                                               |
|     6 | P0_9   | GPIO or QSPI0 SDIO3 signal. Shared with SD card and on-board QSPI SRAM.                                                                                                                                                                                                                  |
|     7 | P0_8   | GPIO or QSPI0 SDIO2 signal. Shared with SD Card and on-board QSPI SRAM.                                                                                                                                                                                                                  |
|     8 | P0_11  | GPIO or QSPI0 slave select signal.                                                                                                                                                                                                                                                       |
|     9 | P0_19  | GPIO                                                                                                                                                                                                                                                                                     |
|    10 | P3_1   | GPIO or Wake-up signal. This pin is 3.3V only.                                                                                                                                                                                                                                           |
|    11 | P0_16  | GPIO or I2C1 SCL signal. An on-board level shifter allows selecting 1.8V or 3.3V operation through R15 or R20 resistors. Do not populate both.                                                                                                                                           |
|    12 | P0_17  | GPIO or I2C1 SDAsignal. An on-board level shifter allows selecting 1.8V or 3.3V operation through R15 or R20 resistors. Do not populate both.                                                                                                                                            |

│

Evaluates: MAX78000

## MAX78000FTHR Application Platform

## MAX78000FTHR Bill of Materials

|   ITEM | REF_DES                                                                                      | DNI/DNP   |   QTY | MFG PART #                                                       | MANUFACTURER                         | VALUE              | DESCRIPTION                                                                                                           |
|--------|----------------------------------------------------------------------------------------------|-----------|-------|------------------------------------------------------------------|--------------------------------------|--------------------|-----------------------------------------------------------------------------------------------------------------------|
|      1 | C1, C3, C6, C7, C9, C10, C12-C14, C24, C28, C40, C51, C53, C54, C56, C60, C69, C70, C73, C74 | -         |    21 | GRM033R61C104K; C0603X5R1C104K030BC                              | MURATA;TDK                           | 0.1UF              | CAP; SMT (0201); 0.1UF; 10%; 16V; X5R; CERAMIC                                                                        |
|      2 | C2, C17, C18, C32, C35, C38, C39, C41-C50, C52, C55, C58                                     | -         |    20 | C0402C105K8PAC; CC0402KRX5R6BB105                                | KEMET;YAGEO                          | 1UF                | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                                          |
|      3 | C4, C8                                                                                       | -         |     2 | GMK107BJ105KA; C1608X5R1V105K080AB                               | TAIYO YUDEN;TDK                      | 1.0UF              | CAP; SMT (0603); 1.0UF; 10%; 35V; X5R; CERAMIC                                                                        |
|      4 | C5                                                                                           | -         |     1 | C1608X8R1E104K080AA                                              | TDK                                  | 0.1UF              | CAP; SMT (0603); 0.1UF; 10%; 25V; X8R; CERAMIC                                                                        |
|      5 | C11                                                                                          | -         |     1 | GRM21BR61A476ME15                                                | MURATA                               | 47UF               | CAP; SMT (0805); 47UF; 20%; 10V; X5R; CERAMIC                                                                         |
|      6 | C15, C19, C20                                                                                | -         |     3 | CL10A226MO7JZNC                                                  | SAMSUNG ELECTRONICS                  | 22UF               | CAP; SMT (0603); 22UF; 20%; 16V; X5R; CERAMIC                                                                         |
|      7 | C16                                                                                          | -         |     1 | GRM155R71H332KA01                                                | MURATA                               | 3300PF             | CAP; SMT (0402); 3300PF; 10%; 50V; X7R; CERAMIC                                                                       |
|      8 | C21                                                                                          | -         |     1 | GRM033R61A225KE47                                                | MURATA                               | 2.2UF              | CAP; SMT (0201); 2.2UF; 10%; 10V; X5R; CERAMIC                                                                        |
|      9 | C22, C23, C27, C30, C31, C33, C36                                                            | -         |     7 | GRM033R61A105ME15                                                | MURATA                               | 1UF                | CAP; SMT (0201); 1UF; 20%; 10V; X5R; CERAMIC                                                                          |
|     10 | C25, C26, C59, C61, C62, C64, C65, C71, C72, C75, C76                                        | -         |    11 | C1608X5R1A226M080AC; GRM188R61A226ME15                           | TDK;MURATA                           | 22UF               | CAP; SMT (0603); 22UF; 20%; 10V; X5R; CERAMIC                                                                         |
|     11 | C29                                                                                          | -         |     1 | ECJ-ZEB1E221K                                                    | PANASONIC                            | 220PF              | CAP; SMT (0201); 220PF; 10%; 25V; X7R; CERAMIC                                                                        |
|     12 | C34, C37                                                                                     | -         |     2 | GRM31CR60J227ME11                                                | MURATA                               | 220UF              | CAP; SMT (1206); 220UF; 20%; 6.3V; X5R; CERAMIC                                                                       |
|     13 | C57, C79, C87                                                                                | -         |     3 | C0603X5R1A104K030BC                                              | TDK                                  | 0.1UF              | CAP; SMT (0201); 0.1UF; 10%; 10V; X5R; CERAMIC                                                                        |
|     14 | C66, C68                                                                                     | -         |     2 | C1608X5R1E225K; TMK107ABJ225KA; TMK107BJ225KA; GRM188R61E225KA12 | TDK;TAIYO YUDEN; TAIYO YUDEN; MURATA | 2.2UF              | CAP; SMT (0603); 2.2UF; 10%; 25V; X5R; CERAMIC                                                                        |
|     15 | C67                                                                                          | -         |     1 | C1608X5R1E475K080AC; GRM188R61E475KE11                           | TDK;MURATA                           | 4.7UF              | CAP; SMT (0603); 4.7UF; 10%; 25V; X5R; CERAMIC                                                                        |
|     16 | CN1                                                                                          | -         |     1 | 47346-0001                                                       | MOLEX                                | 47346-0001         | CONNECTOR; FEMALE; SMT; 47346 SERIES; RIGHT ANGLE; 5PINS                                                              |
|     17 | D1-D3                                                                                        | -         |     3 | SML-LX0404SIUPGUSB                                               | LUMEX OPTOCOMPONENTS INC             | SML-LX0404SIUPGUSB | DIODE; LED; SML; FULL COLOR; WATER CLEAR LENS; RED-GREEN-BLUE; SMT;VF=2.95V; IF=0.1A                                  |
|     18 | J1                                                                                           | -         |     1 | FTSH-105-01-L-DV-K                                               | SAMTEC                               | FTSH-105-01-L-DV-K | CONNECTOR; MALE; SMT; 0.05 (1.27MM) SMT MICRO HEADER; STRAIGHT; 10PINS                                                |
|     19 | J5, J7                                                                                       | -         |     2 | SJ-3523-SMT                                                      | CUI INC.                             | SJ-3523-SMT        | CONNECTOR; FEMALE; SMT; SJ-352X-SMT SERIES; BLACK; 3.5MM AUDIO JACK; RIGHT ANGLE; 3PINS                               |
|     20 | J6                                                                                           | -         |     1 | 475710001                                                        | MOLEX                                | 475710001          | CONNECTOR; FEMALE; SMT; MICRO-SD CARD HEADER WITH DETECT SWITCH; RIGHT ANGLE; 8PINS                                   |
|     21 | J9                                                                                           | -         |     1 | S2B-PH-K-S(LF)(SN)                                               | JST MANUFACTURING                    | S2B-PH-K-S(LF)(SN) | CONNECTOR; MALE; THROUGH HOLE; 2.0MM PITCH; DISCONNECTABLE CRIMP STYLE CONNECTOR; SIDE ENTRY TYPE; RIGHT ANGLE; 2PINS |
|     22 | L1                                                                                           | -         |     1 | MLP2012H2R2MT0S1                                                 | TDK                                  | 2.2UH              | INDUCTOR; SMT (0805); FERRITE; 2.2UH; 20%; 1A                                                                         |
|     23 | L3                                                                                           | -         |     1 | BLM21PG221SN1                                                    | MURATA                               | 220                | INDUCTOR; SMT (0805); FERRITE-BEAD; 220; TOL=+/-25%; 0.2A                                                             |

│

Evaluates: MAX78000

## MAX78000FTHR Application Platform

## MAX78000FTHR Bill of Materials (continued)

|   ITEM | REF_DES                                  | DNI/DNP   |   QTY | MFG PART #                                    | MANUFACTURER                          | VALUE         | DESCRIPTION                                                                                                                                                                   |
|--------|------------------------------------------|-----------|-------|-----------------------------------------------|---------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     24 | L4                                       | -         |     1 | HZ1206C202R-10                                | LAIRD TECHNOLOGIES                    | 2000          | INDUCTOR; SMT (1206); FERRITE-BEAD; 2000; TOL=+/-25%; 0.3A                                                                                                                    |
|     25 | L5, L7                                   | -         |     2 | DFE201612E-2R2M                               | MURATA                                | 2.2UH         | INDUCTOR; SMT (0806); WIREWOUND CHIP; 2.2UH; TOL=+/-20%; 1.8A                                                                                                                 |
|     26 | L8, L9                                   | -         |     2 | 74437324022                                   | WURTH ELECTRONICS INC                 | 2.2UH         | INDUCTOR; SMT; SHIELDED; 2.2UH; 20%; 3.25A                                                                                                                                    |
|     27 | MK1                                      | -         |     1 | SPH0645LM4H-B                                 | KNOWLES ACOUSTICS                     | SPH0645LM4H-B | IC; MICROPHONE; I2S; OUTPUT DIGITAL MICROPHONE; SMT                                                                                                                           |
|     28 | Q1                                       | -         |     1 | SSM3J327R,LF                                  | TOSHIBA                               | SSM3J327R,LF  | TRAN; PCH; FIELD-EFFECT TRANSISTOR SILICON P-CHANNEL MOS TYPE (U-MOS VI); SOT-23F; PD-(1W); I-(-3.9A); V-(-20V)                                                               |
|     29 | R1                                       | -         |     1 | ERJ-2RKF1004                                  | PANASONIC                             | 1M            | RES; SMT (0402); 1M; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                              |
|     30 | R2, R7, R11, R13, R16, R19, R21, R23-R26 | -         |    11 | CRCW020110K0FK                                | VISHAY DALE                           | 10K           | RES; SMT (0201); 10K; 1%; +/-100PPM/DEGC; 0.0500W                                                                                                                             |
|     31 | R3, R12, R17, R18                        | -         |     4 | ERJ-1GEF2201C                                 | PANASONIC                             | 2.2K          | RES; SMT (0201); 2.2K; 1%; +/-100PPM/DEGC; 0.0500W                                                                                                                            |
|     32 | R4, R8                                   | -         |     2 | CRCW04022K70FK                                | VISHAY DALE                           | 2.7K          | RES; SMT (0402); 2.7K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                            |
|     33 | R5, R9                                   | -         |     2 | CRCW04021K40FK; RC0402FR-071K4L               | VISHAY DALE; YAGEO PHICOMP            | 1.4K          | RES; SMT (0402); 1.4K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                            |
|     34 | R6, R10                                  | -         |     2 | CRCW04021K00FK; RC0402FR-071KL; MCR01MZPF1001 | VISHAY DALE; YAGEO PHICOMP; ROHM SEMI | 1K            | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                              |
|     35 | R15                                      | -         |     1 | RK73Z1JT                                      | KOA SPEER ELECTRONICS INC             | 0             | RES; SMT (0603); 0; JUMPER; JUMPER; JUMPER                                                                                                                                    |
|     36 | R29                                      | -         |     1 | CRCW0201100KFK                                | VISHAY DALE                           | 100K          | RES; SMT (0201); 100K; 1%; +/-100PPM/DEGC; 0.0500W                                                                                                                            |
|     37 | R30, R32, R34, R36                       | -         |     4 | ERJ-2RKF1002                                  | PANASONIC                             | 10K           | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                             |
|     38 | R35                                      | -         |     1 | ERJ-2RKF3902X; CRCW040239K0FK                 | PANASONIC; VISHAY DALE                | 39K           | RES; SMT (0402); 39K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                             |
|     39 | R37                                      | -         |     1 | ERJ-2RKF3833                                  | PANASONIC                             | 383K          | RES; SMT (0402); 383K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                            |
|     40 | R38                                      | -         |     1 | CRCW060356K2FK; ERJ-3EKF5622                  | VISHAY; PANASONIC                     | 56.2K         | RES; SMT (0603); 56.2K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                           |
|     41 | RT1                                      | -         |     1 | NCP03XH103J05                                 | MURATA                                | 10K           | THERMISTOR; SMT (0201); 10K OHM; TOL=+/-5%                                                                                                                                    |
|     42 | SW1-SW5                                  | -         |     5 | EVP-AA102K                                    | PANASONIC                             | EVP-AA102K    | SWITCH; SPST; SMT; 15V; 0.02A; EVPAA SERIES WITH GROUND TERMINAL; LIGHT TOUCH SWITCH; RCONTACT=0.1 OHM; RINSULATION=100MOHM                                                   |
|     43 | U1                                       | -         |     1 | OVM7692-RYAA                                  | OMNIVISION                            | OVM7692-RYAA  | IC; SNSR; COLOR CMOS VGA (640X480) CAMERACUBECHIP WITH OMNIPIXEL3-HS TECHNOLOGY; SMT ;                                                                                        |
|     44 | U2                                       | -         |     1 | MAX32625IWY+                                  | MAXIM                                 | MAX32625IWY+  | IC; UCON; ULTRA-LOW POWER; HIGH-PERFORMANCE CORTEX-M4F MICROCONTROLLER FOR WEARABLES; FLASH=512KB; SRAM=160KB; WLP63                                                          |
|     45 | U3                                       | -         |     1 | MAX13202EALT+                                 | MAXIM                                 | MAX13202EALT+ | IC; PROT; 2-CHANNEL; +/-30KV ESD PROTECTOR; UDFN6                                                                                                                             |
|     46 | U4                                       | -         |     1 | MAX78000EXG+                                  | MAXIM                                 | MAX78000EXG+  | EVKIT PART - IC; MAX78000; AI85; ULTRA-LOW POWER ARM CORTEX-M4F WITH CONVOLUTIONAL NEURAL NETWORK ACCELERATOR; PACKAGE OUTLINE DRAWING: 21-0735; LAND PATTERN: 90-0460; WLP81 |
|     47 | U5                                       | -         |     1 | MAX9867EWV+                                   | MAXIM                                 | MAX9867EWV+   | IC; CODEC; ULTRA-LOW POWER STEREO AUDIO CODEC; WLP30                                                                                                                          |

Evaluates: MAX78000

## MAX78000FTHR Application Platform

## MAX78000FTHR Bill of Materials (continued)

| ITEM   | REF_DES   | DNI/DNP   |   QTY | MFG PART #           | MANUFACTURER              | VALUE              | DESCRIPTION                                                                                 |
|--------|-----------|-----------|-------|----------------------|---------------------------|--------------------|---------------------------------------------------------------------------------------------|
| 48     | U6        | -         |     1 | MAX14595ETA+         | MAXIM                     | MAX14595ETA+       | IC; TRANS; LOW-POWER DUAL-CHANNEL LOGIC-LEVEL TRANSLATOR; TDFN8 2X2                         |
| 49     | U7        | -         |     1 | MAX20303BEWN+        | MAXIM                     | MAX20303BEWN+      | IC; PWRM; WEARABLE POWER MANAGEMENT SOLUTION; WLP56                                         |
| 50     | U8        | -         |     1 | MAX38642AELT+        | MAXIM                     | MAX38642AELT+      | IC; CONV; TINY 1.8V-5.5V INPUT; 300NANO-AMP IQ; 700MILLI-AMP NANOPOWER BUCK CONVERTER; DFN6 |
| 51     | U9        | -         |     1 | N01S830HAT22I        | ON SEMICONDUCTOR          | N01S830HAT22I      | IC; MMRY; 1 MBULTRA-LOW POWER SERIAL SRAM; TSSOP8                                           |
| 52     | U10       | -         |     1 | MAX38643AELT+        | MAXIM                     | MAX38643AELT+      | IC; CONV; TINY 1.8V-5.5V INPUT; 300NANO-AMP IQ; 700MILLI-AMP NANOPOWER BUCK CONVERTER; DFN6 |
| 53     | U11       | -         |     1 | MAX6817EUT+          | MAXIM                     | MAX6817EUT+        | IC; CMOS; +/-15KV ESD-PROTECTED DUAL CMOS SWITCH DEBOUNCERS; SOT23-6                        |
| 54     | U12       | -         |     1 | SN74LVC1G07DCK       | TEXAS INSTRUMENTS         | SN74LVC1G07DCK     | IC; DRV; SINGLE BUFFER/DRIVER WITH OPEN DRAIN OUTPUT; SC70-5                                |
| 55     | Y1        | -         |     1 | SG-210STF 12.2880ML  | EPSON                     | 12.2880MHZ         | CRYSTAL; SMT 2.5MMX2MM; 15PF; 12.2880MHZ; +/-50PPM                                          |
| 56     | Y2, Y3    | -         |     2 | ABS07-32.768KHZ-6-T  | ABRACON                   | 32.768KHZ          | CRYSTAL; SMT; 6PF; 32.768KHZ; +/-20PPM; -0.036PPM/T2                                        |
| 57     | PCB       | -         |     1 | MAX78000_FTHR_APPS_A | MAXIM                     | PCB                | PCB:MAX78000_FTHR_APPS_A                                                                    |
| 58     | J4        | DNI       |     1 | PBC12SAAN            | SULLINS ELECTRONICS CORP. | PBC12SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 12PINS; -65 DEGC TO +125 DEGC           |
| 59     | J8        | DNI       |     1 | PBC16SAAN            | SULLINS ELECTRONICS CORP. | PBC16SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65 DEGC TO +125 DEGC           |
| 60     | J2        | DNP       |     0 | FTSH-105-01-L-DV-K   | SAMTEC                    | FTSH-105-01-L-DV-K | CONNECTOR; MALE; SMT; 0.05 (1.27MM) SMT MICRO HEADER; STRAIGHT; 10PINS                      |
| 61     | J3        | DNP       |     0 | TC2050-IDC-NL        | TAG-CONNECT               | TC2050-IDC-NL      | CONNECTOR; MALE; BOARDMOUNT; 10-PIN NO-LEGS CABLE WITH RIBBON CONNECTOR; STRAIGHT; 10PINS   |
| 62     | R20       | DNP       |     0 | RK73Z1JT             | KOA SPEER ELECTRONICS INC | 0                  | RES; SMT (0603); 0; JUMPER; JUMPER; JUMPER                                                  |
| TOTAL  |           |           |   150 |                      |                           |                    |                                                                                             |

## Ordering Information

| PART          | TYPE                 |
|---------------|----------------------|
| MAX78000FTHR# | Application Platform |

#Denotes RoHS compliance.

Evaluates: MAX78000

## MAX78000FTHR Application Platform Diagram

<!-- image -->

│

Evaluates: MAX78000

## MAX78000FTHR Application Platform Schematics

<!-- image -->

│

Evaluates: MAX78000

Evaluates: MAX78000

## MAX78000FTHR Application Platform Schematics (continued)

<!-- image -->

Evaluates: MAX78000

## MAX78000FTHR Application Platform Schematics (continued)

<!-- image -->

│

Evaluates: MAX78000

## MAX78000FTHR Application Platform Schematics (continued)

<!-- image -->

│

Evaluates: MAX78000

## MAX78000FTHR Application Platform Schematics (continued)

<!-- image -->

│

## MAX78000FTHR Application Platform

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 11/20           | Release for market intro | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are impOied. Ma[im Integrated reserves the right to change the circuitry and speci¿cations without notice at any time.

│

Evaluates: MAX78000