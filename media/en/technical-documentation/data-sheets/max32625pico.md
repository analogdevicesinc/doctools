<!-- lastmod 2023-04-07 -->
## MAX32625PICO Application Platform

## General Description

The  MAX32625PICO  board  is  a  rapid  development platform  designed  to  help  engineers  quickly  implement  designs  with  the  MAX32625  ARM®  Cortex®-M4 microcontroller  with  FPU.  The  board  also  includes  the MAX14750  PMIC  to  provide  all  the  needed  voltages. The form factor is a small: 0.6in x 1.0in dual-row header footprint  that  is  compatible  with  breadboards  and  can also be soldered down SMT to another board. The board includes a 10-pin ARM Cortex debug connector so that it can be used as a DAPLink adapter. Additionally, on board are an RGB indicator LED and pushbutton. This provides a  power-optimized  flexible  platform  for  quick  proofs-ofconcept and early software development to enhance time to market.

The MAX32625PICO board ships with a DAPLink image loaded that provides the USB Mass Storage Device (MSD) drag-and-drop programming, USB Communications Device  Class  (CDC)  virtual  serial  port,  and  Human Interface  Device  (HID)  CMSIS-DAP  interface  used  by the mbed site. This allows the board to be connected to another  target  platform  to  enable  the  full  mbed  experience.  The  microcontroller  is  also  programmed  with  a bootloader allowing the DAPLink image to be updated or replaced with your own application code.

Get started developing on this board by going to this link: http://developer.mbed.org/platforms/MAX32625PICO .

Ordering Information appears at end of data sheet.

ARM and Cortex are registered trademarks of ARM Limited (or its subsidiaries) in the EU and/or elsewhere. All rights reserved.

319-100010; Rev 0; 4/17

Evaluates: MAX32625, MAX14750

## Benefits and Features

- Ultra-Compact Development Platform
- 0.6in x 1.0in, 20-Pin DIP Footprint
- Cortex Debug Connector (Host)
- 20 Digital I/O, 4 Analog Inputs
- 3.3V and 1.8V Supplies
- MAX326325 Microcontroller Features
- ARM Cortex-M4 Microcontroller with FPU, 96MHz
-  512KB Flash Memory
-  160KB SRAM
- 8KB Instruction Cache
- Full-Speed USB 2.0
- Three SPI Masters, One Slave
- Two I 2 C Masters, One Slave
-  Three UARTs
- 1-Wire Master
-  40 GPIOs
- Four Input 10-Bit ADC
- MAX14750 PMIC
- Micro I Q  3.3V Buck-Boost Regulator
- Micro I Q  1.8V Buck Regulators
- Micro I Q  1.2V Linear Regulators
- High-Side Load Switch
- Expansion Connections
- Breadboard-Compatible Headers
- SMT-Compatible Footprint
- 10-Pin Cortex Debug Header
-  Micro USB Connector
- Integrated Peripherals
- RGB Indicator LED
- User Pushbutton
- MAXDAP Programming Adapter
- DAPLink Over Cortex Debug Cable
-  Drag-and-Drop Programming
-  CMSIS-DAP SWD Debugger
- USB Virtual UART

<!-- image -->

Evaluates: MAX32625, MAX14750

Figure 1. MAX32625 Pinout

<!-- image -->

│

## MAX32625PICO Application Platform

## Detailed Description

The  MAX32625PICO  board  is  a  compact  rapid  development platform.  It  is  a  dense  design  that  packs  many features into a tight, but accessible package. It includes everything  needed  to  run  the  MAX32625  from  a  single USB  cable  and  provides  easy  access  to  many  of  the peripherals on board. In addition to a breadboard-friendly DIP expansion headers, it also includes a fine pitch 10-pin, dual-row header so that it can be cabled directly to another target with the standard 10-pin SWD header to act as a programming/debug adapter. The backside of the board has no components. The pads for the DIP pins extend to the edge of the board so that the MAX32625PICO can be soldered as a surface mount module on another board. The  resources  available  on  the  MAX32625PICO  board allow for the addition of a USB interface to even the most space-constrained projects.

## Power Architecture

The  power  architecture  of  the  MAX32625PICO  board is  designed  to  be  simple  and  flexible.  The  on-board MAX14750  PMIC  provides  all  the  rails  needed  from  a single +5V supply, which can be provided from the USB connector or the +5V pin in the DIP header. The +5V pin on the DIP header can be used as an input to power the board,  or  as  an  output  from  the  USB  VBUS  supply.  A diode is placed in line with the supply from USB VBUS so that the +5V pin cannot back feed the USB cable, and a resettable polyswitch fuse is placed in line with the +5V pin to limit the power into or out of the board.

The  MAX14750  provides  3.3V,  1.8V,  and  1.2V  for  the MAX32625. 3.3V and 1.8V are available at DIP header pins  for  powering  external  devices.  The  3.3V  supply  is provided  by  a  buck-boost  regulator  so  the  MAX32625 PICO board can operate with as little as 2.0V at the input of the PMIC.

The  MAX32625  has  dual  I/O  supply  rails  and  all  the general-purpose digital  I/O  ports  can  be  set  individually to use either rail. The primary VDDIO rail is supplied from the 1.8V supply, and the VDDIOH rail is connected to several analog switches so that the application can configure it to use the 3.3V supply, or DIP pin 1, or from the SWD header pin 1. This allows the board to adapt its I/O voltage to a supply provided externally.

## Evaluates: MAX32625, MAX14750

## Loading and Debugging Applications

The  MAX32625  is  programmed  at  the  factory  with  a bootloader and DAPLink application firmware loaded so that it can be used out of the box as programming/debug adapter for other boards. The included bootloader can be enabled by holding the lone button while powering on the board.

In  addition  to  the  preinstalled  bootloader,  the  SWD signals  are  available  at  surface  pads  on  the  back  side of  the  board,  allowing  the  board  to  be  programmed  or debugged with the TC2050 series of cable adapters from Tag-Connect  (such  as  the  TC2050-IDC-NL-050-ALL). The surface pads are hidden if the board is permanently mounted to another board. The suggested footprints provided for using the MAX3265PICO as a module include two options for exposing the SWD signals when mounted:

- Connect to the SWD signals with the edge pads provided.
- Add the specified cutout to the board to expose the tag-connect TC2050 footprint.

## Implementing DAPLink

The  MAX32625  contains  all  the  resources  needed  to implement the DAPLink interface. All the signals needed are available at both the SWD header and the DIP pins. A dedicated port is provided for the SWD, UART, and reset signals at each connector. The board provides the ability to feed the target I/O supply to the VDDIOH supply input that enables support for any I/O voltage from 1.8V up to 3.6V. The VDDIOH connection is enabled and multiplexed through  a  MAX14689  DPDT  analog  switch  so  that  the firmware can control when it is connected and which con -nector is selected. Additionally, the 1-Wire master is also multiplexed through the MAX14689 so that a 1-wire serial EPROM can be used to identify the target through either connector. The connectivity allows implementing the standard Cortex Debug Connector defined by ARM, as well as the additional features of the MAXDAP interface. The MAXDAP interface adds a UART and board identification capabilities to the same 10-pin Cortex SWD header while maintaining  backward  compatibility.  The  UART  signals are located in place of the TDI/TDO signals and the board ID is done through the GNDDetect pin. A list of the SWD connections is provided in Table 1.

## MAX32625PICO Application Platform

## Table 1. DAPLink Signals

| SWD HEADER   | SWD HEADER   | DIP PINS   | DIP PINS   | DESCRIPTION            |
|--------------|--------------|------------|------------|------------------------|
| NO.          | PORT         | NO.        | PORT       | DESCRIPTION            |
| 1            | VDDIOH       | 1          | VDDIOH     | Target VCC             |
| 2            | P3_3         | 17         | P0_3       | Target SWDIO           |
| 3            | GND          | 10         | GND        | Ground                 |
| 4            | P3_2         | 18         | P0_2       | Target SWDCLK          |
| 5            | GND          | 10         | GND        | Ground                 |
| 6            | P3_0         | 20         | P0_0       | Target Tx              |
| 7            | NC           | NA         |            | Key                    |
| 8            | P3_1         | 19         | P0_1       | Target Rx              |
| 9            | P4_0         | 2          | P4_0       | Board ID/Ground Detect |
| 10           | P3_7         | 16         | P0_4       | Target RESET           |

## Table 2. VDDIOH/1-Wire Configuration

|   P3_6 |   P2_2 | P2_3   | DIP(1,2)   | SWD(1,9)   | VDDIOH   | DESCRIPTION           |
|--------|--------|--------|------------|------------|----------|-----------------------|
|      0 |      0 | X      | AIN(0,2)   | AIN(1,3)   | Off      | No VDDIOH             |
|      0 |      1 | 0      | IOH,1W     | AIN(1,3)   | External | VDDIOH from DIP pin 1 |
|      0 |      1 | 1      | AIN(0,2)   | IOH,1W     | External | VDDIOH from SWD pin 1 |
|      1 |      0 | X      | AIN(0,2)   | AIN(1,3)   | +3.3V    | Onboard +3.3V         |
|      1 |      1 | 0      | +3.3V,1W   | AIN(1,3)   | +3.3V    | +3.3V out DIP pin 1   |
|      1 |      1 | 1      | AIN(0,2)   | +3.3V,1W   | +3.3V    | +3.3V out SWD pin 1   |

## Table 3. DIP Header Pinout

|   PIN | NAME   | DESCRIPTION                                                  |
|-------|--------|--------------------------------------------------------------|
|     1 | AIN_0  | Analog Input 0. Can also be enabled as VDDIOH input/output.  |
|     2 | AIN_2  | Analog Input 2. Can also be enabled as 1-Wire master (P4_0). |
|     3 | P1_6   | Port 1 Bit 6, I 2 C Master 0 SDA                             |
|     4 | P1_7   | Port 1 Bit 7, I 2 C Master 0 SCL                             |
|     5 | P4_4   | Port 4 Bit 4, SPI Slave SCK                                  |
|     6 | P4_5   | Port 4 Bit 5, SPI Slave MOSI                                 |
|     7 | P4_6   | Port 4 Bit 6, SPI Slave MISO                                 |
|     8 | P4_7   | Port 4 Bit 7, SPI Slave SSEL                                 |
|     9 | 5V     | +5V Input/Output (up to 350mA)                               |
|    10 | GND    | Ground                                                       |
|    11 | 1.8V   | +1.8V Output (up to 150mA)                                   |
|    12 | 3.3V   | +3.3V Output (up to 75mA)                                    |
|    13 | P0_7   | Port 0 Bit 7, SPI Master 0 SCK                               |

│

Evaluates: MAX32625, MAX14750

## MAX32625PICO Application Platform

## Table 3. DIP Header Pinout (continued)

|   PIN | NAME   | DESCRIPTION                     |
|-------|--------|---------------------------------|
|    14 | P0_6   | Port 0 Bit 6, SPI Master 0 SSEL |
|    15 | P0_5   | Port 0 Bit 5, SPI Master 0 MISO |
|    16 | P0_4   | Port 0 Bit 4, SPI Master 0 MOSI |
|    17 | P0_3   | Port 0 Bit 3, UART 0 RTS        |
|    18 | P0_2   | Port 0 Bit 2, UART 0 CTS        |
|    19 | P0_1   | Port 0 Bit 1, UART 0 Tx         |
|    20 | P0_0   | Port 0 Bit 0, UART 0 Rx         |

## Table 4. Edge Surface Mount Contacts

|   PIN | NAME   | DESCRIPTION                                         |
|-------|--------|-----------------------------------------------------|
|    21 | RST    | System Reset (This pad is grounded on early units.) |
|    22 | SWC    | SWD Clock                                           |
|    23 | GND    | Ground                                              |
|    24 | SWD    | SWD Data I/O                                        |
|    25 | 1.8V   | +1.8V Output                                        |
|    26 | DM     | USB D- (This pad is not present on early units.)    |
|    27 | DP     | USB D+ (This pad is not present on early units.)    |

## Table 5. SWD Header Pinout

|   PIN | NAME   | DESCRIPTION                                                  |
|-------|--------|--------------------------------------------------------------|
|     1 | VIO    | Analog Input 1. Can also be enabled as VDDIOH input/output.  |
|     2 | DIO    | Port 3 Bit 3. For SWDIO.                                     |
|     3 | GND    | Ground                                                       |
|     4 | CLK    | Port 3 Bit 2. For SWDCLK.                                    |
|     5 | GND    | Ground                                                       |
|     6 | TGT_TX | Port 3 Bit 0, UART 2 Rx for Debug Console                    |
|     7 | N.C.   | Key                                                          |
|     8 | TGT_RX | Port 3 Bit 1, UART 2 Tx for Debug Console T                  |
|     9 | DETECT | Analog Input 3. Can also be enabled as 1-Wire master (P4_0). |
|    10 | RST    | Port 3 Bit 7. For SRST#.                                     |

│

Evaluates: MAX32625, MAX14750

## MAX32625PICO Application Platform

## Table 6. On-Board Resources

| PORT   | NAME         | DESCRIPTION                                                                                                                                           |
|--------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| P2_0   | DBG_RX       | Debug Console Rx                                                                                                                                      |
| P2_1   | DBG_TX       | Debug Console Tx                                                                                                                                      |
| P2_2   | IOH_1W_EN    | Enables IOH/1-Wire Mux                                                                                                                                |
| P2_3   | SWD_DIP_ SEL | Selects IOH/1-Wire between the SWD header (0) or DIP header (1)                                                                                       |
| P2_4   | LED1         | Red LED                                                                                                                                               |
| P2_5   | LED2         | Green LED                                                                                                                                             |
| P2_6   | LED3         | Blue LED                                                                                                                                              |
| P2_7   | BUTTON       | Button Input. Requires internal pullup to be enabled.                                                                                                 |
| P3_6   | 3V3_IOH_EN   | Enables Power Switch Connecting +3.3V Supply to VDDIOH. Enables +3.3V I/O option and turns IOH into a +3.3V output if mux is enabled (IOH_1W_EN = 1). |
| P4_0   | OWM_IO       | 1-Wire Master I/O                                                                                                                                     |
| P4_1   | OWM_PUPEN    | 1-Wire Master Pullup Enable                                                                                                                           |

## Surface Mount Footprints

The following footprints are suggestions for surface mounting the board as a module onto another board. These footprints offer two ways to provide access to debug/test signals on the MAX32625 if access is desired. Without access to the SWD signals, it might not be possible to recover a corrupted bootloader. The first footprint includes edge pads for soldering to the debug/test signals and the second footprint shows where to put cutouts for access.

│

Evaluates: MAX32625, MAX14750

Evaluates: MAX32625, MAX14750

Figure 2. MAX32625PICO Surface Mount Footprint, Edge Pads

<!-- image -->

*These pads are not present on early units.

Evaluates: MAX32625, MAX14750

Figure 3. MAX32625PICO Surface Mount Footprint, Cutouts

<!-- image -->

## MAX32625PICO EV Schematic

Figure 4. MAX32625PICO Schematic

<!-- image -->

Evaluates: MAX32625, MAX14750

│

## MAX32625PICO Application Platform

## MAX32625PICO EV Bill of Materials

|   QTY | SCHEMATIC REFERENCE           | DESCRIPTION                                      | MANUFACTURER      | MPN                      |
|-------|-------------------------------|--------------------------------------------------|-------------------|--------------------------|
|     2 | C1, C9                        | Capacitors, 0402, X5R, 10V, 10µF                 | Samsung           | CL05A106MP5NUNC          |
|     2 | C2, C6                        | Capacitors, 0402, X5R, 6.3V, 22µF                | Samsung           | CL05A226MQ5QUNC          |
|     7 | C3, C4, C5, C7, C10, C11, C12 | Capacitors, 0402, X5R, 6.3V, 1µF                 | TDK               | C1005X5R0J105K050BB      |
|     1 | C8                            | Capacitor, 0402, X5R, 10V, 0.1µF                 | TDK               | C1005X5R1A104K050BA      |
|     1 | D2                            | RGB LED, common anode                            | Lumex             | SML-LX0404SIUPGUSB       |
|     1 | D3                            | Schottky diode                                   | Panasonic         | DB2G32600L1              |
|     1 | F1                            | Resettable fuse PTC                              | Bourns            | MF-FSMF035X-2            |
|     1 | J1                            | CONN USB MICRO B RECPT SMT R/A                   | FCI               | 10118193-0001LF          |
|     1 | J3                            | Cortex debug connector                           | Samtec            | FTSH-105-01-F-DV-K- P-TR |
|     1 | L1                            | Inductor, 2016, 4.7µH                            | TDK               | VLS201612CX-4R7M         |
|     1 | L2                            | Inductor, 2016, 2.2µH                            | TDK               | VLS201612CX-2R2M         |
|     1 | Q1                            | 32.768kHz crystal                                | ECS International | ECS-.327-6-12-TR         |
|     1 | Q2                            | MOSFET, P-CH, DFN1006, 0.5Ω                      | Diodes Inc.       | DMP21D0UFB4-7B           |
|     2 | R2, R3                        | Resistors, thick film, 0402, 0.1W, 1%, 3.09kΩ    | Panasonic         | ERJ-2RKF3091X            |
|     1 | R4                            | Resistor, thick film, 0402, 0.1W, 1%, 1.1kΩ      | Panasonic         | ERJ-2RKF1101X            |
|     1 | R5                            | Resistor, thick film, 0402, 0.1W, 1%, 1.4kΩ      | Panasonic         | ERJ-2RKF1401X            |
|     1 | R6                            | Resistor, thick film, 0402, 0.1W, 1%, 10Ω        | Panasonic         | ERJ-2RKF10R0X            |
|     1 | R7                            | Resistor, thick film, 0402, 0.1W, 1%, 100kΩ      | Panasonic         | ERJ-2RKF1003X            |
|     1 | SW1                           | SWITCH TACTILE SPST-NO 0.05A 12V                 | OMRON             | B3U-1000P                |
|     1 | U1                            | PMIC, MAX14750B                                  |                   |                          |
|     1 | U4                            | Analog switch, DPDT, MAX14689                    | Maxim Integrated  | MAX14689EWL+T            |
|     1 | U5                            | ARM Cortex-M4 microcontroller with FPU, MAX32625 | Maxim Integrated  | MAX32625IWY+             |

## Ordering Information

| PART          | TYPE             |
|---------------|------------------|
| MAX32625PICO# | Adapter Platform |

# Denotes RoHS compliant.

Evaluates: MAX32625, MAX14750

│

## MAX32625PICO Application Platform

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX32625, MAX14750