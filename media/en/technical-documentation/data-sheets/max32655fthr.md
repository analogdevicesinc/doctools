<!-- lastmod 2022-08-03 -->
## MAX32655FTHR Application Platform

## General Description

The MAX32655FTHR is a rapid development platform to help  engineers  quickly  implement  ultra  low-power  wireless solutions using MAX32655 Arm© Cortex®-M4F and Bluetooth® 5.2 Low Energy (LE). The board also includes the  MAX20303  PMIC  for  battery  and  power  management. The form factor  is  a  small  0.9in  x  2.6in  dual-row header footprint that is compatible with Adafruit Feather Wing peripheral expansion boards. The board includes a variety of peripherals, such as a digital microphone, lowpower stereo audio CODEC, 128MB QSPI Flash, micro SD card connector, RGB indicator LED, and pushbutton. The MAX32655FTHR provides a power-optimized flexible platform  for  quick  proof-of-concepts  and  early  software development to enhance time to market.

Go to https://www.maximintegrated.com/en/products/ MAX32655FTHR to  get  started  developing  with  this board.

Ordering Information appears at end of data sheet.

Arm and Cortex are registered trademarks of ARM Limited (or its subsidiaries) in the US and/or elsewhere.

Evaluates: MAX32655

## Features

- MAX32655 Microcontroller
-  Arm Cortex-M4F, 100MHz
- 32-Bit RISC-V Coprocessor to Offload TimingCritical Bluetooth Processing
-  512KB Flash Memory
-  128KB SRAM
-  16KB Cache
- Bluetooth 5.2 LE Radio
-  MAX20303 Wearable PMIC with Fuel Gauge
-  Charge from USB
-  On-Board DAPLink Debug and Programming Interface for Arm Cortex-M4F
- Breadboard Compatible Headers
-  Micro USB Connector
- Micro SD Card Connector
- Integrated Peripherals
- RGB Indicator LED
- User Pushbutton
-  Low-Power Stereo Audio CODEC
- Digital Microphone
-  SWD Debugger
- Virtual UART Console

<!-- image -->

## MAX32655FTHR Application Platform

## Quick Start

Apply  power  to  the  MAX32655FTHR  using  the  USB cable.  The  pre-programmed  'BLE  Connection'  demo begins to execute.

The  RGB LED starts  to  blink  blue  every  second.  Once a  BLE  connection  is  established,  the  RGB  LED  stops blinking and remains blue. A simple BLE connection can be established to the device using the LightBlue® mobile application.  After  the  connection  is  complete,  the  connected device has control over LED states.

## PMIC and Battery Charger

The MAX20303 wearable PMIC powers the MAX32655FTHR board and is also capable of charging a Li-Ion battery (not included). The MAX20303 has an internal MOSFET that connects the battery to system output when no voltage source is available on the charge input (USB). When an external source is detected at the charge input (USB), this switch opens and the system output is powered from the input source through the input current limiter. The system output to battery switch also prevents the system output voltage from falling below battery voltage when the system load exceeds the input current limit. The  smart  power  selector  unit  inside  the  PMIC  seamlessly  distributes  power  from  the  charge  input  (USB)  to the  battery  and  system  output.  With  both  the  USB  and battery connected, the smart power switch's basic functions are as follows:

- When the system load requirements are less than the input current limit, the battery is charged with residual power from the input.
- When the system load requirements exceed the input current limit, the battery supplies supplemental current to the load.
- When the battery is connected, and there is no external power input (USB), the system is powered from the battery.
- When the MAX20303 thermal limits are reached, the charger does not shut down, but attempts to limit a temperature increase by reducing the input current from charge input. In this condition, the system load has priority over the charger current, so the input

## Evaluates: MAX32655

current is first reduced by lowering the charge cur -rent. If the junction temperature continues to rise and reaches the maximum operating limit, no input current is drawn from the charge input and the battery powers the entire system load.

The USB charge current is set to 51mA. This allows charging from both powered and unpowered USB hubs with no port  communication  required.  Refer  to  the  MAX20303 data sheet and the data sheet for your battery to ensure compatibility.

## Programming and Debugging

The  MAX32625 microcontroller  on  the  board  is  flashed with DAPLink firmware at the factory. It allows debugging and flashing the MAX32655 Arm Core over USB.

## Pushbuttons

There are six pushbuttons on the MAX32655FTHR board:

- SW1 PMIC Power Button

When  the  board  is  powered  on  state,  pressing this button for 12 seconds performs a hard powerdown.

When the board is in a powered-off state, pressing this button powers on the board.

This button can also be read by MAX32655 firmware, PMIC\_PFN2 signal connected to Port 0.13 is a buffered input of the button status. When the button is pressed, this signal goes to a logic-low state.

- SW2 User-programmable function button connected to MAX32655 Port 0.2 through a debouncer IC.
- SW3 User-programmable function button connected to MAX32655 Port 0.3 through a debouncer IC.
- SW4 Wake-up button connected to MAX32655 Port 3.1.
- SW5 Resets the MAX32655 through RSTN input of the MAX32655.
- SW6 DAPLink adapter button. Keep this button pressed  while  applying  power  to  the  board  to put  the  MAX32625  DAPLink  adapter  on  board to  MAINTENANCE  mode  for  DAPLink  firmware updates.

## MAX32655FTHR

## Application Platform

## LEDs

There  are  three  RGB  LEDs  on  the  MAX32655FTHR board:

- D1 Connected  to  the  MAX32655FTHR  GPIO  ports. This LED can be controlled by user firmware.
- Port 0.18: Red color
- Port 0.19: Green color
- Port 0.26: Blue color
- D2 Connected  to  MAX20303  PMIC  LEDx  outputs. These LEDs can be controlled through I 2 C commands.  They  also  can  be  configured  as  charge status indicators by issuing I 2 C commands.
- D3 DAPLink adapter MAX32625 status LED. Controlled by the DAPLink adapter and cannot be used as a user LED.

Figure 1. MAX32655FTHR Pinout Diagram

<!-- image -->

## Evaluates: MAX32655

│

## MAX32655FTHR Application Platform

Evaluates: MAX32655

Figure 2. MAX32655FTHR Top Side Components

<!-- image -->

## MAX32655FTHR Application Platform

Evaluates: MAX32655

Figure 3. MAX32655FTHR Bottom Side Components

<!-- image -->

## MAX32655FTHR

## Application Platform

## Expansion Headers

## Table 1. J9 Pinout

|   PIN | NAME   | DESCRIPTION                                                                                    |
|-------|--------|------------------------------------------------------------------------------------------------|
|     1 | RST    | Master Reset Signal                                                                            |
|     2 | 3V3    | 3.3V Output. Typically used to provide 3.3V to peripherals connected to the expansion headers. |
|     3 | 1V8    | 1.8V Output. Typically used to provide 1.8V to peripherals connected to the expansion headers. |
|     4 | GND    | Ground                                                                                         |
|     5 | P2_0   | GPIO or Analog Input (AIN0 channel)                                                            |
|     6 | P2_1   | GPIO or Analog Input (AIN1 channel)                                                            |
|     7 | P2_2   | GPIO or Analog Input (AIN2 channel)                                                            |
|     8 | P2_3   | GPIO or Analog Input (AIN3 channel)                                                            |
|     9 | P2_4   | GPIO or Analog Input (AIN4 channel)                                                            |
|    10 | P2_5   | GPIO or Analog Input (AIN5 channel)                                                            |
|    11 | P0_23  | GPIO or QSPI1 clock signal.                                                                    |
|    12 | P0_21  | GPIO or QSPI1 MOSI signal.                                                                     |
|    13 | P0_22  | GPIO or QSPI1 MISO signal.                                                                     |
|    14 | P2_6   | GPIO or LPUART RX signal                                                                       |
|    15 | P2_7   | GPIO or LPUART TX signal                                                                       |
|    16 | GND    | Ground                                                                                         |

## Table 2. J7 Pinout

|   PIN | NAME   | DESCRIPTION                                                                                                                                                                                                                                                                              |
|-------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | SYS    | SYS Switched Connection to the Battery. This is the primary system power supply and automatically switches between the battery voltage and the USB supply when available.                                                                                                                |
|     2 | PWR    | Turns of the PMIC if shorted to Ground for 13 seconds. Hard power-down button.                                                                                                                                                                                                           |
|     3 | VBUS   | USB VBUS Signal. This can be used as a 5V supply when connected to USB. This pin can also be used as an input to power the board, but this should only be done when not using the USB connector since there is no circuitry to prevent current from flowing back into the USB connector. |
|     4 | P1_6   | GPIO                                                                                                                                                                                                                                                                                     |
|     5 | P1_7   | GPIO                                                                                                                                                                                                                                                                                     |
|     6 | P0_25  | GPIO or QSPI1 SDIO3 signal.                                                                                                                                                                                                                                                              |
|     7 | P0_24  | GPIO or QSPI1 SDIO2 signal.                                                                                                                                                                                                                                                              |
|     8 | P0_20  | GPIO or QSPI1 slave select signal.                                                                                                                                                                                                                                                       |
|     9 | P1_8   | GPIO                                                                                                                                                                                                                                                                                     |
|    10 | P1_9   | GPIO                                                                                                                                                                                                                                                                                     |
|    11 | P0_30  | GPIO or I2C2 SCL signal.                                                                                                                                                                                                                                                                 |
|    12 | P0_31  | GPIO or I2C2 SDAsignal.                                                                                                                                                                                                                                                                  |

## Ordering Information

| PART          | TYPE                 |
|---------------|----------------------|
| MAX32655FTHR# | Application Platform |

# Denotes RoHS compliance.

Evaluates: MAX32655

│

## MAX32655FTHR Application Platform

## MAX32655FTHR EV Kit Bill of Materials

| ITEM     | REF_DES                           | QTY MFG PART #                                                         | MANUFACTURER                                  | VALUE       | DESCRIPTION                                                                                                        |
|----------|-----------------------------------|------------------------------------------------------------------------|-----------------------------------------------|-------------|--------------------------------------------------------------------------------------------------------------------|
| 1        | ANT1                              | 1 2450AT18D0100                                                        | JOHANSON TECHNOLOGY                           | 2.45GHZ     | ANTENNA                                                                                                            |
| 2        | C1, C4, C5, C20, C28, C30         | 6 GRM033R61C104K                                                       | MURATA                                        | 0.1UF       | SMT (0201) 2.2UF 10% 10V X5R CERAMIC CAP SMT (0201) 0.1UF 10% 16V X5R CERAMIC                                      |
| 3 4      | C6 C7, C8, C11-C17                | 1 GRM033R61A225KE47 9 GRM033R61A105ME15                                | MURATA MURATA                                 | 2.2UF 1UF   | CAP CAP SMT (0201) 1UF 20% 10V X5R CERAMIC                                                                         |
| 5        | C9, C10, C18, C35-C40             | 9 C0402C105K8PAC                                                       | KEMET                                         | 1UF         | CAP SMT (0402) 1UF 10% 10V X5R CERAMIC                                                                             |
| 6        | C19, C21-C24, C29, C31            | 7 C1608X5R1A226M080AC                                                  | MURATA                                        | 22UF        | CAP SMT (0603) 22UF 20% 10V X5R CERAMIC                                                                            |
| 7        | C25, C27                          | 2 C1608X5R1E225K                                                       | TDK                                           | 2.2UF       | CAP SMT (0603) 2.2UF 10% 25V X5R CERAMIC                                                                           |
| 8        | C26                               | 1 C1608X5R1E475K080AC                                                  | TDK                                           | 4.7UF       | CAP SMT (0603) 4.7UF 10% 25V X5R CERAMIC                                                                           |
| 9 10     | C32, C34                          | 2 GMK107BJ105KA                                                        | TAIYO YUDEN                                   | 1.0UF       | CAP SMT (0603) 1.0UF 10% 35V X5R CERAMIC,                                                                          |
|          | C33                               | 1 C1608X8R1E104K080AA                                                  | TDK                                           | 0.1UF       | CAP SMT (0603) 0.1UF 10% 25V X8R CERAMIC                                                                           |
| 11 12    | C41, C42 C43, C44, C55, C61       | 2 C0603X5R1A104K030BC 4 C1005X7R1C104K050BC                            | TDK TDK                                       | 0.1UF 0.1UF | CAP SMT (0201) 0.1UF 10% 10V X5R CERAMIC CAP SMT (0402) 0.1UF 10% 16V X7R CERAMIC                                  |
| 13       | C45, C46 C57,                     | 2 GJM1555C1H160GB01                                                    | MURATA                                        | 16PF        | CAP SMT (0402) 16PF 2% 50V C0G CERAMIC                                                                             |
| 14       | C49, C51, C53, C54, C60, C62, C63 | 9 CL05A105KO5NNN                                                       | SAMSUNG                                       | 1UF         | CAP SMT (0402) 1UF 10% 16V X5R CERAMIC                                                                             |
| 15       | C50                               | 1 GRM15XR71C332KA86 MURATA CL21A476MQYNNN                              |                                               | 3300PF      | CAP SMT (0402) 3300PF 10% 16V X7R CERAMIC CERAMIC                                                                  |
| 16 17    | C52 C56, C59, C64, C65            | 1 4 C1608X5R0J226M080AC                                                | SAMSUNG TDK                                   | 47UF 22UF   | CAP SMT (0805) 47UF 20% 6.3V X5R CAP SMT (0603) 22UF 20% 6.3V X5R CERAMIC                                          |
| 18       | D1-D3                             | 3 IN-B101FCH                                                           | INOLUX                                        |             | LED RGB SMD                                                                                                        |
| 19       | J1                                | 1 SJ-3523-SMT                                                          | CUI INC.                                      |             | 3.5MM AUDIO JACK                                                                                                   |
| 20       | J2                                | SJ-43514-SMT S2B-PH-K-S(LF)(SN)                                        | CUI INC. JST                                  |             | 3.5 MMAUDIO JACK DISCONNECTABLE CRIMP                                                                              |
| 21       | J3                                | 1 1 1                                                                  | MANUFACTURING                                 |             | STYLE CONNECTOR                                                                                                    |
| 22 23    | J4 J6                             | 47346-0001 475710001                                                   | MOLEX MOLEX                                   |             | MICRO USB B RECPT BTTM MOUNT ASSY MICRO-SD CARD HEADER WITH DETECT SWITCH                                          |
| 24       | L1, L2                            | 1 2 DFE201612E-2R2M                                                    | MURATA                                        | 2.2UH       | INDUCTOR SMT (0806) WIREWOUND CHIP 2.2UH TOL=+/-20% 1.8A,                                                          |
| 25       | L4                                | 1 74437324022                                                          | WURTH ELECTRONICS INC                         | 2.2UH       | INDUCTOR SMT SHIELDED 2.2UH 20% 3.25A,                                                                             |
| 26       | L5                                | 1 BLM21PG221SN1 1 HZ1206C202R-10                                       |                                               |             | 220 SMT (0805) FERRITE-BEAD 220 TOL=+/-25% 0.2A, 2000 SMT (1206) FERRITE-BEAD 2000 TOL=+/-25% 0.3A,                |
| 27       | L6                                |                                                                        | MURATA LAIRD TECHNOLOGIES                     |             |                                                                                                                    |
| 28       | MK1 L7                            | 1 MLP2012H2R2MT0S1                                                     | TDK                                           | 2.2UH       | MICROPHONE INDUCTOR SMT (0805) FERRITE 2.2UH 20% 1A,                                                               |
| 29       |                                   | 1 SPH0644HM4H-1                                                        | KNOWLES ACOUSTICS                             |             | FIELD-EFFECT TRANSISTOR SILICON P-CHANNEL MOS TYPE                                                                 |
| 30       | Q1                                | 1 SSM3J327R,LF                                                         | TOSHIBA                                       | 100K        | (U-MOS VI) RES SMT (0201) 100K 1% +/-100PPM/DEGC 0.0500W                                                           |
| 31 32    | R1 R2                             | 1 CRCW0201100KFK 1 RK73Z1JT                                            | VISHAY DALE KOA SPEER ELECTRONICS INC         |             | 0 SMT (0603) 0 JUMPER                                                                                              |
| 33       | R4, R10, R12, R14, R16            | 5 ERJ-2RKF1002                                                         | PANASONIC                                     | 10K 33.2    | RES SMT (0402) 10K 1% +/-100PPM/DEGC 0.1000W RES SMT (0402) 33.2 1% +/-100PPM/DEGC 0.0630W                         |
| 34 35    | R5, R6, R8, R9 R7, R19, R22       | 4 CRCW040233R2FK 3 CRCW04022K20FK                                      | VISHAY DALE PHICOMP                           | 2.2K        | RES SMT (0402) 2.2K 1% +/-100PPM/DEGC 0.0630W                                                                      |
|          | R11, R13                          | 2 CRCW04023K30FK                                                       | YAGEO DALE                                    | 3.3K        | RES SMT (0402) 3.3K 1% +/-100PPM/DEGC 0.0630W                                                                      |
| 36 37    | R15                               | 1 ERJ-2RKF3902X                                                        | VISHAY PANASONIC                              | 39K         | RES SMT (0402) 39K 1% +/-100PPM/DEGC 0.0630W                                                                       |
| 38       | R17 R18                           | 1 CRCW060356K2FK                                                       | VISHAY DALE                                   | 56.2K       | RES SMT (0603) 56.2K 1% +/-100PPM/DEGC 0.1000W                                                                     |
| 39       |                                   | 1 ERJ-2RKF1004                                                         | PANASONIC                                     | 1M          | RES SMT (0402) 1M 1% +/-100PPM/DEGC 0.1000W                                                                        |
| 40       | R20, R23                          | 2 ERJ-2GEJ102                                                          | PANASONIC                                     | 1K          | RES SMT (0402) 1K 5% +/-200PPM/DEGC 0.1000W RES SMT (0402) 1% 510 +/-100PPM/DEGC 0.1000W                           |
| 41       | R21, R24 R25-R27, R30-R34         | 2 ERJ-2RKF5100                                                         | PANASONIC                                     |             |                                                                                                                    |
| 42       | R36                               | 8 CRCW020110K0FK                                                       | VISHAY DALE                                   | 10K         | 510 RES SMT (0201) 10K 1% +/-100PPM/DEGC 0.0500W                                                                   |
| 43       | R38                               | 1 ERJ-2GE0R00                                                          | PANASONIC INTERNATIONAL MANUFACTURING SERVICE | 1K          | 0 RES SMT (0402) 0 JUMPER 0.1000W RES SMT (0402) 1K 1% +/-                                                         |
| 44       |                                   | 1 RCC-0402PW1001F                                                      | MURATA                                        |             | THERMISTOR SMT (0201) 10K OHM                                                                                      |
| 45       | RT1 SW1-SW6                       | 1 NCP03XH103J05 6 EVP-AA102K                                           |                                               |             | TOL=+/-5% LIGHT TOUCH SWITCH                                                                                       |
| 46 47    | U1                                | NC7WZ17P6X                                                             | PANASONIC FAIRCHILD SEMICONDUCTOR             | 10K         | TINY LOGIC UHS DUAL BUFFER WITH SCHMITT TRIGGER INPUT                                                              |
| 48 49    | U2                                | 1 1 MAX9867ETJ+                                                        | MAXIM                                         |             | ULTRA-LOW POWER STEREO AUDIO CODEC 128-BIT SERIAL FLASH MEMORYWITH DUAL/QUAD SPI and QPI                           |
| 50       | U3 U4                             | 1 W25Q128JVSIM MAX32655GXG+                                            | WINBOND ELECTRONICS MAXIM                     |             | and DTR LOW-POWER ARM CORTEX-M4F MICROCONTROLLER WITH BLUETOOTH 5 FOR WEARABLES WEARABLE POWER MANAGEMENT SOLUTION |
| 51       | U6                                | MAX20303BEWN+                                                          | MAXIM                                         |             | Buck Switching Regulator IC Positive Adjustable 0.7V 1 Output                                                      |
|          | U7                                | 1 1                                                                    |                                               |             | 700mA 6-WDFN 2-CHANNEL +/-30KV ESD PROTECTOR                                                                       |
| 52 53    | U8                                | 1 MAX38643AELT+ 1 MAX13202EALT+                                        | MAXIM MAXIM                                   |             | HIGH-PERFORMANCE CORTEX-M4F MICROCONTROLLER FOR WEARABLES                                                          |
| 54       | U9                                | 1 MAX32625IWY+                                                         | MAXIM                                         |             | +/-15KV ESD-PROTECTED DUAL CMOS SWITCH DEBOUNCERS                                                                  |
| 55       | U10                               | 1 MAX6817EUT+                                                          | MAXIM                                         |             | Supervisory Circuits A +/- 15kV ESD-Protected, Single/Dual/Octal,                                                  |
| 56       | U11                               | MAX6816EUS+                                                            | MAXIM                                         |             | CMOS Switch Debouncers SINGLE BUFFER/DRIVER WITH OPEN DRAIN OUTPUT                                                 |
| 57       | U5                                | 1 SN74LVC1G07DCK                                                       | TEXAS INSTRUMENTS                             | 12.2880MHZ  |                                                                                                                    |
| 58       | Y1                                | 1 1 SG-210STF 12.2880ML                                                | EPSON EPSON                                   | 32MHZ       | CRYSTAL SMT 2.5MMX2MM 15PF 12.2880MHZ +/-50PPM CRYSTAL SMT 2.5MMX2MM 32MHZ +/-10PPM                                |
| 59 60 61 | Y2 Y3, Y4 PCB                     | 1 FA-20H 32.0000MF12Y-W3 2 ABS07-32.768KHZ-6-T 1 MAX32655_FTHR_APPS_P1 | ABRACON MAXIM                                 | 32.768KHZ   | SMT 6PF 32.768KHZ +/-20PPM                                                                                         |
|          | C47, C48                          |                                                                        |                                               |             | PCB CAP SMT (0402) 6PF +/-0.01PF 50V C0G                                                                           |
| 62       |                                   | 2 GRM1555C1H6R0BA01 1 TC2050-IDC-NL                                    | MURATA                                        | 6PF         | CERAMIC 10-PIN NO-LEGS CABLE WITH RIBBON CONNECTOR                                                                 |
| 63 64    | J5                                | 1 FTSH-105-01-L-DV-K                                                   | TAG-CONNECT SAMTEC                            |             | 0.05 (1.27MM) SMT MICRO HEADER                                                                                     |
|          | J8 R3                             | 1 RK73Z1JT                                                             | KOA SPEER ELECTRONICS INC                     |             | 0 RES SMT (0603) 0 JUMPER                                                                                          |
| 65       | R29                               | 2 CRCW04023K30FK                                                       | VISHAY DALE                                   | 3.3K        | SMT (0402) 3.3K 1%                                                                                                 |
| 66       | R37                               | 2 ERJ-2GE0R00                                                          | PANASONIC                                     |             | +/-100PPM/DEGC 0.0630W 0 RES SMT (0402) 0 JUMPER 0.1000W                                                           |
| 67 68    | R28, R35, J7                      | 1 PBC12SAAN                                                            | SULLINS ELECTRONICS CORP.                     |             | CONNECTOR MALE THROUGH HOLE BREAKAWAY STRAIGHT 12PINS                                                              |
| 69       | J9                                | 1 PBC16SAAN                                                            | SULLINS ELECTRONICS CORP.                     |             | CONNECTOR MALE THROUGH HOLE BREAKAWAY STRAIGHT 16PINS                                                              |

│

Evaluates: MAX32655

## MAX32655FTHR Application Platform Diagram

<!-- image -->

│

Evaluates: MAX32655

## MAX32655FTHR Application Platform Schematic

<!-- image -->

│

Evaluates: MAX32655

## MAX32655FTHR Application Platform Schematic (continued)

<!-- image -->

Evaluates: MAX32655

## MAX32655FTHR Application Platform Schematic (continued)

<!-- image -->

│

Evaluates: MAX32655

## MAX32655FTHR Application Platform Schematic (continued)

<!-- image -->

│

Evaluates: MAX32655

## MAX32655FTHR Application Platform Schematic (continued)

<!-- image -->

│

Evaluates: MAX32655

## MAX32655FTHR Application Platform

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX32655