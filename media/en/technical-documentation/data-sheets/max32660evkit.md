<!-- lastmod 2022-08-03 -->
## MAX32660 Evaluation Kit

## General Description

The MAX32660 evaluation kit provides a compact development platform that provides access to all the features of the MAX32660 in a tiny, easy to use board. The form factor is a small 0.6in by 0.9in dual-row header footprint that is compatible with breadboards. The board includes a 10-pin Arm® Cortex® debug connector so that it can be used with a DAPLink adapter. Additionally, a red LED indicator and a pushbutton are on board. This board provides a powerful processing subsystem in a very small space that can be easily integrated into a variety of applications.

## Kit Contents

- MAX32660 EV kit board
- MAX32625PICO programming/debug adapter
- SWD ribbon cable
- USB A to Micro B cable
- Pinout card

Ordering Information appears at end of data sheet.

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

Evaluates: MAX32660

## Features

- MAX32660 Microcontroller
-  Arm Cortex-M4F, 96MHz
-  256KB Flash Memory
-  96KB SRAM
- 16KB Instruction Cache
-  Two SPIs
- Two I 2 Cs
-  Two UARTs
-  14 GPIOs
- DIP Breakout Board
- 100mil Pitch Dual Inline Pin Headers
- Breadboard Compatible
- DAPLink Header
- 10-Pin Arm Cortex Debug Pinout
-  Console UART Connection
- Integrated Peripherals
- Red Indicator LED
- User Pushbutton
- MAX32625PICO Debug Adapter
-  CMSIS-DAP SWD Debugger
- Virtual UART Console

## MAX32660 EV Kit Photo

<!-- image -->

<!-- image -->

## Evaluates: MAX32660

Figure 1. Pinout Diagram

<!-- image -->

## Quick Start

To begin using the MAX32660 EV kit, follow these steps:

- 1) Connect the MAX32660 breakout board DAPLink connector (J3) to the MAX32625PICO board MAXDAP connector using the included fine pitch ribbon cable.
- 2) Connect VDDIO on the MAX32660 breakout board (J2 pin 9) to either 1.8V or 3.3V from the MAX32625PICO board.
- 3) Connect the MAX32625PICO board to the computer using the included micro USB cable.
- 4) Follow the instructions in the MAX32660 EV kit software user's guide.

Figure 2. MAX32625PICO DIP Pinout

<!-- image -->

│

## Detailed Description of Hardware (or Software)

The MAX32660 EV kit board is a compact breakout board designed to make developing with the MAX32660 quick and easy. In addition to making all the GPIOs accessible at 100mil pitch headers, it also includes key components such as decoupling capacitors and a crystal for the RTC. A  pushbutton,  LED,  and  programming  header  are  also included.  The  two  100mil  pitch  headers  are  oriented  in parallel so that this board can be inserted into a standard solderless breadboard.

## Power Supply

The MAX32660 only needs a single supply between 1.7V and 3.6V to operate. The primary power input for this EV kit is the VDDIO pin at header J2 pin 9. Power can also be  applied  through  the  debug  header  (J3  pin  1).  The MAX32660 includes an internal LDO for the core supply. This LDO can be disabled so that a more efficient external regulator can be used. The EV kit provides access to VCORE at header J2 pin 8. VDDIO and VCORE are each decoupled with 10µF capacitors.

## Programing and Debugging

The MAX32660 EV kit provides a debug header (J3) for access to the SWD and reset signals. This header is a 10-pin  50mil  pitch  header  compatible  with  the  standard Arm  Cortex  debug  interfaces.  The  I/O  supply  (VDDIO) that is connected to the header is the primary supply pin

## Table 1. J1 Header Pinout

|   PIN | NAME   | ALTERNATE FUNCTION 1   | ALTERNATE FUNCTION 2   | ALTERNATE FUNCTION 3   |
|-------|--------|------------------------|------------------------|------------------------|
|     1 | P0.12  | SPI1A_SCK              | UART1A_CTS             | -                      |
|     2 | P0.13  | SPI1A_SS0              | UART1A_RTS             | -                      |
|     3 | P0.4   | SPI0A_MISO             | UART0A_TX              | -                      |
|     4 | P0.3   | I2C1A_SDA              | SPI1B_SS0              | TIMER_TMR0             |
|     5 | P0.2   | I2C1A_SCL              | SPI1B_SCK              | 32KCAL                 |
|     6 | P0.1   | SWDCLK                 | SPI1B_MOSI             | UART1B_RX              |
|     7 | P0.0   | SWDIO                  | SPI1B_MISO             | UART1B_TX              |
|     8 | RSTN   | -                      | -                      | -                      |
|     9 | GND    | -                      | -                      | -                      |

│

Evaluates: MAX32660

for the MAX32660 and the board can be powered through the debug header (J3). A UART is also connected to this header. See the Console UART section for more details.

## Console UART

UART1A Tx and Rx signals at port P0.10 and P0.11 are connected to the programming and debug header J3 pins 6 and 8 through 1kΩ resistors. This provides a convenient way to communicate with a PC though the virtual serial port  available  in  Maxim's  CMSIS-DAP  debug  adapter. The  series  resistors  allow  for  these  signals  to  be  overdriven by other circuits without modifying the board.

## Pushbutton

A pushbutton is connected to GPIO P0.12 for general user input.  It  is  connected  through  a  series  resistor  to  protect against contention if this I/O is being used for other purposes.

## Indicator LED

A red LED is connected to GPIO P0.13 for general user indication. It is connected with a MOSFET buffer so that it does not provide a significant load when used for other purposes.

## Clocking

The IC operates from a system clock that can be selected from one of three on-chip oscillators from 8kHz to 96MHz. The  external  32.768kHz  crystal,  Y1,  provides  the  RTC with an accurate time base and is also used to calibrate the internal clock.

## MAX32660 Evaluation Kit

## Table 2. J2 Header Pinout

|   PIN | NAME   | ALTERNATE FUNCTION 1   | ALTERNATE FUNCTION 2   | ALTERNATE FUNCTION 3   |
|-------|--------|------------------------|------------------------|------------------------|
|     1 | P0.10  | SPI1A_MISO             | UART1A_TX              | -                      |
|     2 | P0.11  | SPI1A_MOSI             | UART1A_RX              | -                      |
|     3 | P0.5   | SPI0A_MOSI             | UART0A_RX              | -                      |
|     4 | P0.6   | SPI0A_SCK              | UART0A_CTS             | UART1C_TX              |
|     5 | P0.7   | SPI0A_SS0              | UART0A_RTS             | UART1C_RX              |
|     6 | P0.8   | I2C0A_SCL              | SWDIO                  | -                      |
|     7 | P0.9   | I2C0A_SDA              | SWDCLK                 | -                      |
|     8 | VCORE  | -                      | -                      | -                      |
|     9 | VDDIO  | -                      | -                      | -                      |

## Table 3. J3 SWD Header Pinout

|   PIN | NAME    | DESCRIPTION                                         |
|-------|---------|-----------------------------------------------------|
|     1 | VDDIO   | Debug I/O Voltage                                   |
|     2 | SWDIO   | Serial-Wire Debug I/O (P0.0)                        |
|     3 | GND     | Ground                                              |
|     4 | SWDCLK  | Serial-Wire Debug Clock (P0.1)                      |
|     5 | GND     | Ground                                              |
|     6 | UART_TX | Connect to UART Tx for debug serial console (P0.10) |
|     7 | NC      | Key                                                 |
|     8 | UART_RX | Connect to UART Rx for debug serial console (P0.11) |
|     9 | DETECT  | -                                                   |
|    10 | RSTN    | Debug Reset Signal                                  |

## Table 4. RST

| PORT   | NAME    | DESCRIPTION                                              |
|--------|---------|----------------------------------------------------------|
| P0_13  | LED     | Red LED                                                  |
| P0_12  | BUTTON  | Button Input. Requires internal pullup to be enabled.    |
| P0_10  | UART Tx | Console UART Transmit Signal. Connected to debug header. |
| P0_11  | UART Rx | Console UART Receive Signal. Connected to debug header.  |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX32660EVKIT# | EV Kit |

#Denotes RoHS compliance.

Evaluates: MAX32660

│

## MAX32660 EV Kit Bill of Materials

|   ITEM | REF_DES     |   QTY | MFG PART #                     | MANUFACTURER               | VALUE               | DESCRIPTION                                                                      |
|--------|-------------|-------|--------------------------------|----------------------------|---------------------|----------------------------------------------------------------------------------|
|      1 | C1, C2      |     2 | CL05A106MP5NUNC                | SAMSUNG ELECTRONICS        | 10UF                | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 10V; TG=-55 DEGC TO +85 DEGC; TC=X5R  |
|      2 | DS1         |     1 | LTST-C190CKT                   | LITE-ON ELECTRONICS; INC.  | LTST-C190CKT        | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC  |
|      3 | J1, J2      |     2 | PBC09SAAN                      | SULLINS ELECTRONICS CORP   | PBC09SAAN           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 9PINS; -65 DEGC TO +125 DEGC |
|      4 | J3          |     1 | FTSH-105-01-L-DV-K             | SAMTEC                     | FTSH-105-01-L- DV-K | CONNECTOR; MALE; SMT; 0.05 (1.27MM) SMT MICRO HEADER; STRAIGHT; 10PINS           |
|      5 | Q1          |     1 | PMZB600UNE                     | NXP                        | PMZB600UNE          | TRAN; 20V; N-CHANNELTRENCH MOSFET; NCH; SMT; PD-(0.36W); I-(0.6A); V-(20V)       |
|      6 | R1, R7, R8  |     3 | CRCW04021K00FK; RC0402FR-071KL | VISHAY DALE; YAGEO PHICOMP | 1K                  | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                              |
|      7 | R2, R3      |     2 | CRCW0402499RFK                 | VISHAY DALE                | 499                 | RESISTOR; 0402; 499 OHM; 1%; 100PPM; 0.0625W; THICK FILM                         |
|      8 | R4, R9, R10 |     3 | CRCW040210K0FK; RC0402FR-0710K | VISHAY DALE; YAGEO PHICOMP | 10K                 | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                             |
|      9 | S1          |     1 | B3U-1000P                      | OMRON                      | B3U-1000P           | SWITCH; SPST; SMT; STRAIGHT; 12V; 0.05A; ULTRA-SMALL TACTILE SWITCH              |
|     10 | U1          |     1 | DS28E05R+                      | MAXIM                      | DS28E05R+           | IC; EPROM; 1-WIRE EEPROM; SOT-23                                                 |
|     11 | U2          |     1 | MAX32660                       | MAXIM                      | MAX32660            | IC; LOW POWERARM CORTEX-M4 WITH FPU-BASED SOC FOR WEARABLE SENSORS;              |
|     12 | Y1          |     1 | ECS-.327-6-12                  | ECS INC                    | 32.768KHZ           | CRYSTAL; SMT 2.0 MM X 1.2 MM; 6PF; 32.768KHZ; +/-20PPM; -0.03PPM/ DEGC2          |
|     13 | PCB         |     1 | MAX32660                       | MAXIM                      | PCB                 | PCB:MAX32660                                                                     |

│

Evaluates: MAX32660

## MAX32660 EV Kit Schematic

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. 0a[iP ,ntegrated reserves the right to change the circuitr\ and specifications Zithout notice at an\ tiPe.

<!-- image -->

│

Evaluates: MAX32660