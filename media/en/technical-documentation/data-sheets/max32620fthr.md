<!-- lastmod 2022-08-03 -->
## MAX32620FTHR

## Rapid Development Platform

## General Description

The  MAX32620FTHR  board  is  a  rapid  development platform  designed  to  help  engineers  quickly  implement battery-optimized  solutions  with  the  MAX32620  Arm ® Cortex ® -M4  microcontroller  with  FPU.  The  board  also includes  the  MAX77650  ultra-low  power  PMIC  and MAX17055 fuel gauge to provide efficient power conversion and battery management with minimal board space. The form factor is a small 0.9in x 2.0in dual-row header footprint that is compatible with breadboards and off-theshelf peripheral expansion boards. In addition to the dualrow headers, there are also two 12-pin Pmod™-compatible socket  connectors  for  more  expansion  options. Also  on board  are  common  user-interface  peripherals  including two  RGB  indicator  LEDs  and  two  pushbuttons.  These provide  a  power-optimized  flexible  platform  for  quick proofs-of-concept  and  early  software  development  to enhance time to market.

<!-- image -->

## Visit https://developer.mbed.org/platforms/

MAX32620FTHR/ to start developing with this board.

Ordering Information appears at end of data sheet.

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

Pmod is a trademark of Diligent Inc.

Evaluates: MAX32620,

MAX77650, MAX1705

## Benefits and Features

- Convenient Development Platform
- 0.9in x 2.0in DIP Form Factor
-  Breadboard Compatible
-  Feather Wing Compatible
- Pmod-Compatible Sockets
-  Supports SPI, UART, I 2 C, and GPIO
-  Accessible from Both Sides of Board
- Integrated Battery Management
-  Single-Cell Li+ Charger
-  Fuel Gauge
- User Interface Peripherals
- Two RGB LEDs
-  Two Pushbuttons
- MAX32620 Microcontroller Features
- 96MHz Arm Cortex-M4 Microcontroller with FPU
-  2048KB Flash
-  256KB SRAM
-  Full-Speed USB
- SPI, I 2 C, UART, and 1-Wire
- 4-Channel 10-Bit ADC
- 49 Dual Voltage GPIO
-  3.9mm x 4.1mm, 81-Bump WLP
- MAX77650 Ultra-Low Power PMIC Features
- Smart Power Selector Charger
-  Supports Li+/Li-Poly Batteries
-  7.5mA to 300mA Charge Current
- Single Inductor Multiple Output (SIMO) Buck-Boost Regulator
-  3 Outputs from a Single Inductor
-  150mA LDO Regulator
- I 2 C Configurable
-  2.75mm x 2.15mm, 30-Bump WLP
- MAX17055 Fuel Gauge Features
-  ModelGauge m5 EZ
-  Eliminates Battery Characterization
-  Eliminates Coulomb Counter Drift
- 7µA Operating Current
-  1.4mm x 1.5mm, 9-Bump WLP

<!-- image -->

## MAX32620FTHR Rapid Development Platform

Evaluates: MAX32620,

MAX77650, MAX17055

Figure 1. DIP Pinout

<!-- image -->

## Detailed Description

The  MAX32620FTHR  board  is  designed  to  provide  a compact,  power-optimized,  rapid  development  platform. It  provides  all  the  basic  system  management  functions for the MAX32620 Arm Cortex-M4 microcontroller, as well as  a  few  simple  user-interface  elements  and  a  variety of  expansion  options  for  customization.  The  dual  inline pinout  and  form-factor  for  this  board  are  based  on  the Adafruit feather series of boards. It is intended to be compatible  with  many  of  their  peripheral  wings,  but  it  is  not guaranteed to work with all featherwings.

## Firmware Development

The simplest way to develop firmware for the MAX32620FTHR  board  is  through  the  mbed  development  site. At  the  mbed  site,  import  examples  into  their online  IDE,  edit,  compile,  and  load  them  into  the  board without  installing  any  software.  The  board  is  preloaded with a USB bootloader that enables drag-and-drop firmware  updates  by  pressing  the  BOOT  button  when  exiting reset. Go to https://developer.mbed.org/platforms/ MAX32630FTHR/ to  start  programming. Additional tools are also available at the Maxim product page www.maximintegrated.com/max32620fthr .

│

## MAX32620FTHR Rapid Development Platform

## Power Architecture

The  MAX32620FTHR  is  optimized  for  battery-powered operation, but a battery is not required. The MAX77650 PMIC  includes  a  Smart  Power  Selector™  that  allows the system to run directly from the charging source that comes  from  the  Micro-USB  connector.  The  MAX77650 also includes a configurable Li+/Li-Poly charger optimized for small batteries. The charge current is programmable from 7.5mA to 300mA.

The  MAX77650  provides  all  the  voltages  needed  to operate  the  MAX32620 efficiently  with  a  single  inductor multiple  output  (SIMO)  buck-boost  regulator.  The  SIMO regulator provides 1.2V, 1.8V, and 3.15V by default, and these voltages can be adjusted over the I 2 C interface.

In  addition  to  the  battery  charger  and  SIMO buck-boost regulator,  the  MAX77650 PMIC also includes a 3-channel  current  sink  driver,  and  power  button  monitor.  The power button is available for user input after the part has powered  on.  The  MAX32620FTHR  board  includes  a

Table 1. DIP Header J4 Pins

|   PIN | PORT   | DESCRIPTION                                                       |
|-------|--------|-------------------------------------------------------------------|
|     1 | GND    | Ground                                                            |
|     2 | P3_1   | UART2 Tx                                                          |
|     3 | P3_0   | UART2 Rx                                                          |
|     4 | P5_2   | SPIM2 MISO                                                        |
|     5 | P5_1   | SPIM2 MOSI                                                        |
|     6 | P5_0   | SPIM2 SCK                                                         |
|     7 | P6_0   | I2CM2 SCL, pulled to 1.8V, connected to the MAX77650 and MAX17055 |
|     8 | P5_7   | I2CM2 SDA                                                         |
|     9 | AIN_3  | ADC analog input (0V-1.8V)                                        |
|    10 | AIN_2  | ADC analog input (0V-1.8V)                                        |
|    11 | AIN_1  | ADC analog input (0V-5V)                                          |
|    12 | AIN_0  | ADC analog input (0V-5V)                                          |
|    13 | GND    | Ground                                                            |
|    14 | 1V8    | 1.8V supply voltage (output)                                      |
|    15 | 3V3    | 3V supply voltage (output)                                        |
|    16 | RSTN   | Master reset signal                                               |

Evaluates: MAX32620, MAX77650, MAX17055

pushbutton  connected  to  the  button  input  and  an  RGB LED connected to the current sinks  for  additional  userinterface options.

The MAX32620FTHR board also includes the MAX17055 fuel  gauge  that  utilizes  Maxim's  ModelGauge™  m5  EZ to  accurately  track  the  state  of  the  battery  without characterization.

## Expansion Connectors

The  MAX32620FTHR  makes  connecting  peripherals  as easy as possible by extending common peripheral interfaces. The form factor is based on the Adafruit feather series that  has  a  variety  of  peripheral  wings  available  and  is also breadboard compatible. The board also includes two Pmod-compatible  pass-through  socket  connectors.  The pass-through  sockets  allow  connections  from  either  side of  the  board  to  add  flexibility  for  mechanical  access  and allows the top and bottom row to be swapped to accommodate different types of Pmod interfaces. Pinout diagrams and tables of pin descriptions are provided for reference.

Table 2. DIP Header J5 Pins

|   PIN | PORT   | DESCRIPTION                                                            |
|-------|--------|------------------------------------------------------------------------|
|     1 | SYS    | System power output                                                    |
|     2 | EN     | Active-low power button                                                |
|     3 | VBUS   | This is connected directly to the power pin of the Micro-USB connector |
|     4 | P4_0   | 1-Wire ® master signal                                                 |
|     5 | P5_6   | SPIM2 SRN                                                              |
|     6 | P5_5   | SPIM2 SDIO3                                                            |
|     7 | P5_4   | SPIM2 SDIO2                                                            |
|     8 | P5_3   | SPIM2 SSEL                                                             |
|     9 | P3_3   | UART2 RTS                                                              |
|    10 | P3_2   | UART2 CTS                                                              |
|    11 | P3_5   | I2CM1 SCL                                                              |
|    12 | P3_4   | I2CM1 SDA                                                              |

Smart Power Selector and ModelGauge are trademarks and 1-Wire is a registered trademark of Maxim Integrated Products, Inc.

│

## MAX32620FTHR Rapid Development Platform

## Table 3. SPI Slave P4 Surface Pads

|   PIN | PORT   | DESCRIPTION                              |
|-------|--------|------------------------------------------|
|     1 | P4_7   | SPIS SSEL                                |
|     2 | P4_5   | SPIS MOSI                                |
|     3 | P4_6   | SPIS MISO                                |
|     4 | P4_4   | SPIS SCK                                 |
|     5 | GND    | Ground                                   |
|     6 | AIN_0  | ADC analog input (for voltage detection) |

## Table 4. Pmod Socket P0 Pins

|   PIN | PORT   | DESCRIPTION                            |
|-------|--------|----------------------------------------|
|     1 | P0_2   | UART0 CTS                              |
|     2 | P0_7   | SPIM0 SSEL                             |
|     3 | P0_1   | UART0 Tx                               |
|     4 | P0_5   | SPIM0 MOSI                             |
|     5 | P0_0   | UART0 Rx                               |
|     6 | P0_6   | SPIM0 MISO                             |
|     7 | P0_3   | UART0 RTS                              |
|     8 | P0_4   | SPIM0 SCK                              |
|     9 | GND    | Ground                                 |
|    10 | GND    | Ground                                 |
|    11 | PVIO   | Peripheral I/O voltage (3V by default) |
|    12 | PVIO   | Peripheral I/O voltage (3V by default) |

Evaluates: MAX32620,

MAX77650, MAX17055

## Table 5. Pmod Socket P1 Pins

|   PIN | PORT   | DESCRIPTION                            |
|-------|--------|----------------------------------------|
|     1 | P1_3   | SPIM1 SSEL                             |
|     2 | P1_4   | SPIM1 SDIO2                            |
|     3 | P1_1   | SPIM1 MOSI                             |
|     4 | P1_5   | SPIM1 SDIO3                            |
|     5 | P1_2   | SPIM1 MISO                             |
|     6 | P1_7   | I2CM0 SCL                              |
|     7 | P1_0   | SPIM1 SCK                              |
|     8 | P1_6   | I2CM0 SDA                              |
|     9 | GND    | Ground                                 |
|    10 | GND    | Ground                                 |
|    11 | PVIO   | Peripheral I/O voltage (3V by default) |
|    12 | PVIO   | Peripheral I/O voltage (3V by default) |

## Table 6. On-Board Resources

| PORT   | SIGNAL   | DESCRIPTION                                                                            |
|--------|----------|----------------------------------------------------------------------------------------|
| P2_0   | DBG_RX   | Debug console Rx                                                                       |
| P2_1   | DBG_TX   | Debug console Tx                                                                       |
| P2_2   | PHLD     | MAX77650 power hold                                                                    |
| P2_3   | IRQ      | MAX77650 IRQ , active-low, open-drain                                                  |
| P2_4   | LED1     | Red LED (D1)                                                                           |
| P2_5   | LED2     | Green LED (D1)                                                                         |
| P2_6   | LED3     | Blue LED (D1)                                                                          |
| P2_7   | BOOT     | User pushbutton, active-low, activates bootloader when pressed while reset is released |
| P3_6   | ALRT     | MAX17055 alert, active-low, open-drain                                                 |
| P5_7   | SDA      | 1.8V I 2 C SDAfor MAX77650 and MAX17055                                                |
| P6_0   | SCL      | 1.8V I 2 C SCL for MAX77650 and MAX17055                                               |

│

## MAX32620FTHR Rapid Development Platform

Evaluates: MAX32620,

MAX77650, MAX17055

Figure 2. Peripherals

<!-- image -->

│

Evaluates: MAX32620,

MAX77650, MAX17055

## Peripheral Module Connectors

<!-- image -->

FRONT

Top Access

PORT 1

<!-- image -->

<!-- image -->

PORTO

Figure 3. Pmod Port Pinouts

UARTi

SPI

BACK Bottom Access PORT O

<!-- image -->

Dual

Row

SPI

PVIOGND

SCKMISOMOSISSEL

P0\_4P0\_6P0\_5P0\_7

P0\_3P0\_0P0\_1P0\_2

RTS

PVIOGND

SPI

UART!

RX

TX

CTS

<!-- image -->

PORT 1

│

## MAX32620FTHR Rapid Development Platform

## MAX32620FTHR EV Kit Bill of Materials

|   QTY | REF DES             | MFG       | PART NUMBER             | DESCRIPTION                                                                                            |
|-------|---------------------|-----------|-------------------------|--------------------------------------------------------------------------------------------------------|
|     1 | U2                  | Maxim     | MAX32620IWG+            | Arm Cortex M4F, 2MB Flash, 256KB SRAM                                                                  |
|     3 | SW1, SW2, SW3       | Omron     | B3U-1000P               | Tactile Switch, SPST-NO, 3x2.5mm                                                                       |
|     2 | C1, C18             | Yageo     | CC0402KRX7R8BB104       | CAP CER 0.1µF 25V X7R 0402                                                                             |
|     1 | R3                  | Yageo     | RC0402FR-071K1L         | RES SMD 1.1KΩ 1% 1/16W 0402                                                                            |
|     1 | R4                  | Yageo     | RC0402FR-071K4L         | RES SMD 1.4KΩ 1% 1/16W 0402                                                                            |
|     1 | L1                  | Murata    | DFE201612P-1R5M = P2    | FIXED IND 1.5UH 2.7A 95 MOHM SMD 0806                                                                  |
|     1 | R6                  | Yageo     | RC0402FR-0710RL         | RES SMD 10Ω 1% 1/16W 0402                                                                              |
|     1 | R7                  | Yageo     | RC0402FR-07100KL        | RES SMD 100KΩ 1% 1/16W 0402                                                                            |
|     3 | R1, R11, R12        | Yageo     | RC0402FR-0710KL         | RES SMD 10KΩ 1% 1/16W 0402                                                                             |
|     5 | C2, C4, C6, C7, C13 | Yageo     | CC0402MRX5R5BB106       | CAP CER 10µF 6.3V X5R 0402                                                                             |
|     4 | C3, C9, C15, C17    | TDK       | C1005X5R1V225K050BC     | CAP CER 2.2µF 35V X5R 0402                                                                             |
|     4 | C5, C10, C11, C12   | Samsung   | CL05A226MQ5QUNC         | CAP CER 22µF 6.3V X5R 0402                                                                             |
|     3 | R2, R9, R10         | Yageo     | RC0402FR-073K09L        | RES SMD 3.09KΩ 1% 1/16W 0402                                                                           |
|     1 | Y1                  | ECS Inc   | ECS-.327-6-12-TR        | CRYSTAL 32.7680KHZ 6PF SMD, 2x1.2mm                                                                    |
|     1 | C16                 | Yageo     | CC0402KRX7R9BB332       | CAP CER 3300PF 50V X7R 0402                                                                            |
|     1 | J3                  | Samtec    | FTSH-105-01-F-DV-K-P-TR | CONN HEADER 2x5 .05' SMD KEY                                                                           |
|     1 | U3                  | Maxim     | DS28EL22Q+U             | IC EEPROM 2KBIT 1WIRE 6TDFN                                                                            |
|     1 | J2                  | JST       | S2B-PH-SM4-TB(LF)(SN)   | CONN HEADER PH SIDE 2POS 2MM SMD                                                                       |
|     1 | U4                  | Maxim     | MAX3207EAUT+T           | ESD Diode with TVS                                                                                     |
|     1 | U1                  | Maxim     | MAX77650BEWV+T          | Ultra-Low Power PMIC with 3-Output SIMO and Charger                                                    |
|     1 | R5                  | Murata    | NCP15XH103F03RC         | NTC THERMISTOR 10KΩ 1% 0402                                                                            |
|     2 | P0, P1              | Samtec    | HLE-106-02-F-DV-BE-K-TR | Conn Socket Strip SKT 12 POS 2.54mm Solder ST SMD T/R                                                  |
|     1 | Q2                  | Nexperia  | PMZ600UNEYL             | N-Channel 20V 600mA (Ta) 360mW (Ta), 2.7W (Tc) Surface Mount DFN1006-3                                 |
|     2 | D1, D2              | Lumex     | SML-LX0404SIUPGUSB      | Red, Green, Blue (RGB) LED Indication - Discrete 1.95V Red, 2.85V Green, 2.73V Blue 0404 (1010 Metric) |
|     1 | J1                  | FCI       | 10118193-0001LF         | CONN USB MICRO B RECPT SMT R/A                                                                         |
|     1 | R14                 | Panasonic | ERJ-2BWFR050X           | RES SMD 0.05Ω 1% 1/4W 0402                                                                             |
|     1 | U5                  | Maxim     | MAX17055EWL+            | IC FUEL GAUGE MODELGAUGE 9-WLP                                                                         |
|     1 | R8                  | Yageo     | RC0402JR-07470RL        | RES SMD 470Ω 5% 1/16W 0402                                                                             |

│

Evaluates: MAX32620,

MAX77650, MAX17055

## MAX32620FTHR EV Kit Schematics

<!-- image -->

│

Evaluates: MAX32620,

MAX77650, MAX17055

## MAX32620FTHR EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX32620,

MAX77650, MAX17055

## Ordering Information

| PART          | TYPE                 |
|---------------|----------------------|
| MAX32620FTHR# | Development Platform |

#Denotes RoHS compliance.

Evaluates: MAX32620,

MAX77650, MAX17055

## MAX32620FTHR Rapid Development Platform

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/17           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are LPSlLeG. Ma[LP InWegraWeG reVerYeV WKe rLgKW Wo FKange WKe FLrFuLWr\ anG VSeFLfiFaWLonV ZLWKouW noWLFe aW an\ WL

│

Evaluates: MAX32620,

MAX77650, MAX17055