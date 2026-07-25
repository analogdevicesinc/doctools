<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX14830 evaluation kit (EV kit) provides a proven design to evaluate the MAX14830 quad-channel universal  asynchronous  receiver-transmitter  (UART)  IC.  Each UART contains 128 words of receive and transmit first-in/ first-out (FIFO) buffer that can be controlled through the SPI or I 2 C interface. Each of the four UARTs are selected through SPI or I 2 C in-band addressing.

Each  of  the  four  UARTs  can  interface  with  an  IO-Link M master  transceiver  or  an  RS-485/RS-232  multiprotocol transceiver.  The  EV  kit  contains  on-board  IO-Link  master transceivers,  RS-485/RS-232  multiprotocol  transceivers, and double-pole/double-throw (DPDT) switches are used to select between the IO link and RS-485/RS-232 transceivers.

The EV kit operates from a +3.3V and a +24V DC supply and requires  100mA of  current  from  each  supply.  This EV  kit  requires  a  user-supplied  SPI/I 2 C  controller  and software.

The EV kit comes with a MAX14830ETM+ installed.

| DESIGNATION                       |   QTY | DESCRIPTION                                                            |
|-----------------------------------|-------|------------------------------------------------------------------------|
| AARDVARK                          |     1 | 10-pin (2 x 5) header                                                  |
| C1                                |     1 | 10 F F Q 20%, 50V X7R ceramic capacitor (2220) TDK C5750X7R1H106M      |
| C2                                |     1 | 10 F F Q 10%, 6.3V X7R ceramic capacitor (0805) Murata GRM21BR70J106K  |
| C3-C6, C8-C11, C20, C22, C24, C26 |    12 | 1 F F Q 10%, 10V X7R ceramic capacitors (0603) Murata GRM188R71A105K   |
| C12-C15                           |     4 | 1 F F Q 10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H105K   |
| C16-C19, C21, C23, C25, C27-C42   |    23 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K |
| C43, C45, C47, C49                |     4 | 270pF Q 5%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H271J       |
| C44, C46, C48, C50                |     4 | 1nF Q 5%, 50V X7R ceramic capacitors (0603) KEMET C0603C102J5RACTU     |

## MAX14830 Evaluation Kit

## Evaluates: MAX14830

## Features

- S +3.3V and +24V Power-Supply Operation
- S On-Board IO-Link Master Transceivers (MAX14824)
- S On-Board RS-485/RS-232 Multiprotocol Transceivers (MAX3160E)
- S PCB Header for User-Supplied SPI- and I 2 C-Compatible Signals
- S PCB Headers for UART Signals (J1)
- S Evaluates the MAX14830 in a 48-Pin TQFN (7mm x 7mm) Package
- S RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION                            |   QTY | DESCRIPTION                                           |
|----------------------------------------|-------|-------------------------------------------------------|
| D1-D12                                 |    12 | Green LEDs (0603)                                     |
| D13, D14, D17, D18, D21, D22, D25, D26 |     8 | 40V, 2A Schottky diodes Diodes, Inc. DFLS240          |
| D15, D19, D23, D27, D29                |     5 | 33V, 4A TVS diodes (SOT23) Semtech SDC36C.TCT         |
| GPIO                                   |     1 | 5-pin header                                          |
| IOLINK0- IOLINK3                       |     4 | 4-pin headers                                         |
| J1                                     |     1 | 2 x 24 right-angle socket strip                       |
| JU1-JU10                               |    10 | 2-pin headers                                         |
| JU11-JU17                              |     7 | 3-pin headers                                         |
| JU18, JU19                             |     2 | 4-way, 5-pin headers                                  |
| JU20                                   |     0 | Not installed, 2-pin header                           |
| R1-R4                                  |     4 | 1k I Q 5% resistors (0603)                            |
| R5-R10                                 |     6 | 2k I Q 5% resistors (0603)                            |
| R11-R26                                |    16 | 10k I Q 5% resistors (0603)                           |
| R27                                    |     1 | 0.5 I Q 5% resistor (2010) IRC LRC-LR2010LF-01-R500-J |
| RS0-RS3                                |     4 | 6-pin headers                                         |
| SPI/ I2C                               |     1 | 12-pin header                                         |

IO-Link is a registered trademark of Profibus User Organization (PNO).

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| SW1           |     1 | Momentary pushbutton switch                                             |
| U1            |     1 | Quad SPI/I 2 C UART with 128-word FIFOs (48 TQFN-EP) Maxim MAX14830ETM+ |
| U2, U3        |     2 | Quad DPDT switches (36 TQFN-EP) Maxim MAX4761ETX+                       |
| U4-U7         |     4 | IO-Link master transceivers (24 TQFN-EP) Maxim MAX14824GTG+             |

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that shunts  are  installed  in their default positions, as shown in Table 1.
- 2) Connect the output of the SPI interface controller to the SPI/ I2C 12-pin header, as follows:
- Connect	CSN	to	pin	5	of	SPI/ I2C
- Connect	MISO	to	pin	6	of	SPI/ I2C
- Connect	SCLK	to	pin	7	of	SPI/ I2C
- Connect	MOSI	to	pin	10	of	SPI/ I2C

## MAX14830 Evaluation Kit

## Evaluates: MAX14830

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| U8-U11        |     4 | Multiprotocol transceivers (20 SSOP) Maxim MAX3160EEAP+         |
| U12           |     1 | SPDT analog switch (6 SOT23) Maxim MAX4624EUT+ (Top Mark: AADL) |
| Y1            |     1 | 3.6864MHz crystal                                               |
| -             |    19 | Shunts                                                          |
| -             |     1 | PCB: MAX14830 EVALUATION KIT                                    |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| IRC, Inc.                              | 361-992-7900 | www.irctt.com               |
| KEMET Corp.                            | 864-963-6300 | www.kemet.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Semtech Corporation                    | 805-495-2111 | www.semtech.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX14830 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX14830	EV	kit
- User-supplied	SPI	interface	controller
- +3.3V,	100mA	DC	power	supply
- +24V,	100mA	DC	power	supply
- 3) Turn on the +3.3V power supply and set the supply to +3.3V, then disable the power supply.
- 4) Connect  the  positive  terminal  of  the  +3.3V  power supply to the +3.3V PCB pad on the EV kit. Connect the  negative  terminal  of  the  power  supply  to  the GND PCB pad.
- 5) Turn on the +24V power supply and set the supply to +24V, then disable the power supply.
- 6) Connect  the  positive  terminal  of  the  +24V  power supply to the +24V PCB pad on the EV kit. Connect the  negative  terminal  of  the  power  supply  to  the GND PCB pad.
- 7) Enable both power supplies.
- 8) Send SPI signals to the EV kit through the SPI/ I2C 12-pin header.
- 9) Detect  the  output  at  the  IOLINK1-IOLINK4  4-pin headers.
- 10)  The EV kit is now ready for additional testing.

Table 1. Default Shunt Positions (JU1-JU19)

| JUMPER    | SHUNT POSITION   | PIN CONNECTION                                                                                      | EV KIT FUNCTION                                                                                     |
|-----------|------------------|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| JU1       | Not installed    | U1, pin 1 (SPI/ I2C ) connected to +3.3V through resistor R11.                                      | SPI mode.                                                                                           |
| JU2       | Not installed    | U2, pin 4 and U3, pin 4 (INA) connected to GND through resistor R12.                                | IO link selected.                                                                                   |
| JU3-JU10  | Not installed    | D5-D12 (anodes) not connected.                                                                      | D5-D12 not used.                                                                                    |
| JU11      | 1-2              | U12, pin 1 (IN) connected to +3.3V.                                                                 | SPI/ I2C header, pin 5 (CSN) connected to JU19, pin 3 ( CS ).                                       |
| JU12      | 1-2              | SPI/ I2C header, pin 6 (MISO) connected to U1, pin 3.                                               | U1 connected to SPI interface controller (MISO).                                                    |
| JU13      | 1-2              | SPI/ I2C header, pin 7 (SCLK) connected to U1, pin 4.                                               | U1 connected to SPI interface controller (SCLK).                                                    |
| JU14-JU17 | 1-2              | Install shunts in the 1-2 default position (JU14-JU17 are 'don't care' when operating in SPI mode). | Install shunts in the 1-2 default position (JU14-JU17 are 'don't care' when operating in SPI mode). |
| JU18      | 1-3              | SPI/ I2C header, pin 10 (MOSI) connected to U1, pin 6.                                              | U1 connected to SPI interface controller (MOSI).                                                    |
| JU19      | 1-3              | U12, pin 6 ( CS ) connected to U1, pin 5.                                                           | U1 connected to SPI interface controller (CSN).                                                     |

Figure 1. System Setup Example

<!-- image -->

## MAX14830 Evaluation Kit

## Evaluates: MAX14830

## Detailed Description of Hardware

The  MAX14830  EV  kit  provides  a  proven  design  to evaluate the MAX14830 IC. The IC is an advanced quadchannel UART with each UART containing 128 words of receive and transmit FIFO buffer that can be controlled through SPI or I 2 C. Each of the four UARTs is selected through SPI or I 2 C in-band addressing.

Each  of  the  four  UARTs  can  interface  with  an  IO-Link master  transceiver  or  an  RS-485/RS-232  multiprotocol transceiver.  The  EV  kit  contains  four  on-board  IO-Link master  transceivers,  four  RS-485/RS-232  multiprotocol transceivers,  and  8-channel  DPDT  switches  to  select between the IO link and RS-485/RS-232 transceivers.

## Jumper Selection

## SPI/I 2 C Operating Mode (SPI/ I2C )

Jumper JU1 selects the IC's operating mode. The operating mode is selectable between SPI and I 2 C. See Table 2 for JU1 shunt positions.

## Table 2. JU1 Jumper Selection (SPI/ I2C )

| SHUNT POSITION   | U1-1 (SPI/ I2C ) CONNECTED TO   | OPERATING MODE   |
|------------------|---------------------------------|------------------|
| Not installed*   | +3.3V (through resistor R11)    | SPI              |
| Installed        | GND                             | I 2 C            |

## Table 3. JU2 Jumper Selection (INA)

| SHUNT POSITION   | U2-4 AND U3-4 (INA) CONNECTED TO   | OUTPUT INTERFACE   |
|------------------|------------------------------------|--------------------|
| Not installed*   | GND (through resistor R12)         | IO link            |
| Installed        | +3.3V                              | RS-485/RS-232      |

## Table 5. JU11 Jumper Selection (CSN)

| SHUNT POSITION   | U12-1 (IN) CONNECTED TO           | SPI/ I2C HEADER, PIN 5 (CSN) CONNECTED TO   | CSN SERVING           |
|------------------|-----------------------------------|---------------------------------------------|-----------------------|
| 1-2*             | +3.3V                             | U1, pin 5 ( CS /A0) (through jumper JU19)   | UART                  |
| 2-3              | GND                               | U4-U7, pin 6 ( CS )                         | IO links              |
| Not installed    | SPI/ I2C header, pin 11 (CSN_SEL) | CSN connection selected by CSN_SEL          | Determined by CSN_SEL |

## MAX14830 Evaluation Kit Evaluates: MAX14830

## IO Link and RS-485/RS-232 Output Interface Selection (INA)

Jumper JU2 selects the IC's output interface. The output interface is selectable between the IO link and RS-485/ RS-232 transceivers. See Table 3 for JU2 shunt positions.

## IO-Link Signal Indicators ((C/Q)/(DI))

Jumpers  JU3-JU10  connect  or  disconnect  the  IO-Link signal  (C/Q)/(DI)  from  their  respective  LED  indicators. Install shunts to connect or remove shunts to disconnect the  IO-Link  signal  from  their  respective  LED  indicators. Table  4  lists  the  correspondence  between  jumpers JU3-JU10  to  their  respective  IO-Link  signal  and  LED indicators.

## UART and IO-Link Chip-Select Signal (CSN)

Jumper JU11 selects the destination for the CSN (chipselect  signal  on  the  SPI/ I2C header,  pin  5).  The  CSN chip-select  signal  can  be  set  to  serve  either  the  UART (MAX14830) or the four IO links (MAX14824) using JU11. See Table 5 for JU11 shunt positions.

## Table 4. JU3-JU10 Jumper Legend (LEDs)

| JUMPER*   | SIGNAL/POWER   | LED   |
|-----------|----------------|-------|
| JU3       | IOLINK0 C/Q    | D5    |
| JU4       | IOLINK0 DI     | D6    |
| JU5       | IOLINK1 C/Q    | D7    |
| JU6       | IOLINK1 DI     | D8    |
| JU7       | IOLINK2 C/Q    | D9    |
| JU8       | IOLINK2 DI     | D10   |
| JU9       | IOLINK3 C/Q    | D11   |
| JU10      | IOLINK3 DI     | D12   |

## MISO/SDA

Jumper JU12 configures the MISO/SDA pin (U1, pin 3) and  routes  the  signal  to  the  respective  headers.  See Table 6 for JU12 shunt positions.

## SCLK/SCL

Jumper JU13 configures the SCLK/SCL pin (U1, pin 4) and  routes  the  signal  to  the  respective  headers.  See Table 7 for JU13 shunt positions.

Table 6. JU12 Jumper Selection (MISO/SDA)

| SHUNT POSITION   | MISO/SDA PIN CONNECTED TO     | OPERATING MODE   |
|------------------|-------------------------------|------------------|
| 1-2*             | SPI/ I2C header, pin 6 (MISO) | SPI              |
| 2-3              | SPI/ I2C header, pin 9 (SDA)  | I 2 C            |
| Not installed    | Not connected                 | Not selected     |

## MAX14830 Evaluation Kit Evaluates: MAX14830

## MOSI/A1

Jumpers  JU14  and  JU18  configure  the  MOSI/A1  pin (U1, pin 6). See Table 8 for JU14 and JU18 shunt positions.

## CS /A0

Jumpers  JU15  and  JU19  configure the CS /A0 pin (U1, pin 5). See Table 9 for JU15 and JU19 shunt positions.

Table 7. JU13 Jumper Selection (SCLK/SCL)

| SHUNT POSITION   | SCLK/SCL PIN CONNECTED TO     | OPERATING MODE   |
|------------------|-------------------------------|------------------|
| 1-2*             | SPI/ I2C header, pin 7 (SCLK) | SPI              |
| 2-3              | SPI/ I2C heade, pin 8 (SCL)   | I 2 C            |
| Not installed    | Not connected                 | Not selected     |

Table 8. JU14 and JU18 Jumper Selection (MOSI/A1)

| SHUNT POSITION   | SHUNT POSITION   | MOSI/A1 PIN CONNECTED TO       | OPERATING MODE   |
|------------------|------------------|--------------------------------|------------------|
| JU18             | JU14             |                                |                  |
| 1-3              | Not used         | SPI/ I2C header, pin 10 (MOSI) | SPI              |
| 1-2              | Not used         | +3.3V                          | I 2 C*           |
| 1-5              | Not used         | GND                            | I 2 C*           |
| 1-4              | 1-2              | SPI/ I2C header, pin 9 (SDA)   | I 2 C*           |
| 1-4              | 2-3              | SPI/ I2C header, pin 8 (SCL)   | I 2 C*           |
| 1-4              | Not installed    | Not connected                  | Not selected     |
| Not installed    | Not used         | Not connected                  | Not selected     |

*Refer to the MAX14830 IC data sheet for the corresponding I 2 C slave address.

## Table 9. JU15 and JU19 Jumper Selection ( CS /A0)

| SHUNT POSITION   | SHUNT POSITION   | CS /A0 PIN CONNECTED TO                                                 | OPERATING MODE   |
|------------------|------------------|-------------------------------------------------------------------------|------------------|
| JU19             | JU15             |                                                                         |                  |
| 1-3              | Not used         | SPI/ I2C header, pin 5 (CSN) (with shunt installed on pins 1-2 of JU11) | SPI              |
| 1-2              | Not used         | +3.3V                                                                   | I 2 C*           |
| 1-5              | Not used         | GND                                                                     | I 2 C*           |
| 1-4              | 1-2              | SPI/ I2C header, pin 9 (SDA)                                            | I 2 C*           |
| 1-4              | 2-3              | SPI/ I2C header, pin 8 (SCL)                                            | I 2 C*           |
| 1-4              | Not installed    | Not connected                                                           | Not selected     |
| Not installed    | Not used         | Not connected                                                           | Not selected     |

*Refer to the MAX14830 IC data sheet for the corresponding I 2 C slave address.

## RS-485/ RS-232 Selection

Jumper JU16 selects between the RS-485 and RS-232 output  protocols  for  the  EV  kit.  See  Table  10  for  JU16 shunt positions.

## Table 10. JU16 Jumper Selection (RS-485/ RS -232 )

| SHUNT POSITION   | RS-485/ RS - 232 PINS CONNECTED TO   | OUTPUT PROTOCOL   |
|------------------|--------------------------------------|-------------------|
| 1-2*             | +3.3V                                | RS-485            |
| 2-3              | GND                                  | RS-232            |
| Not installed    | Not connected                        | Not selected      |

## MAX14830 Evaluation Kit Evaluates: MAX14830

## Half Duplex and Full Duplex (HDPLX)

Jumper JU17 selects either a half-duplex or full-duplex output  protocol  for  the  EV  kit.  See  Table  11  for  JU17 shunt positions.

## Table 11. JU17 Jumper Selection (HDPLX)

| SHUNT POSITION   | HDPLX PINS CONNECTED TO   | OUTPUT PROTOCOL   |
|------------------|---------------------------|-------------------|
| 1-2*             | +3.3V                     | Half duplex       |
| 2-3              | GND                       | Full duplex       |
| Not installed    | Not connected             | Not selected      |

## MAX14830 Evaluation Kit

## Evaluates: MAX14830

Figure 2a. MAX14830 EV Kit Schematic (Sheet 1 of 4)

<!-- image -->

## MAX14830 Evaluation Kit

## Evaluates: MAX14830

Figure 2b. MAX14830 EV Kit Schematic (Sheet 2 of 4)

<!-- image -->

## MAX14830 Evaluation Kit

## Evaluates: MAX14830

Figure 2c. MAX14830 EV Kit Schematic (Sheet 3 of 4)

<!-- image -->

## MAX14830 Evaluation Kit

## Evaluates: MAX14830

Figure 2d. MAX14830 EV Kit Schematic (Sheet 4 of 4)

<!-- image -->

## MAX14830 Evalution Kit

## Evalutes: MAX14830

Figure 3. MAX14830 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 4. MAX14830 EV Kit PCB Layout-Component Side

<!-- image -->

## MAX14830 Evalution Kit

## Evalutes: MAX14830

Figure 5. MAX14830 EV Kit PCB Layout-GND Layer 2

<!-- image -->

Figure 6. MAX14830 EV Kit PCB Layout-PWR Layer 3

<!-- image -->

## MAX14830 Evalution Kit

## Evalutes: MAX14830

Figure 7. MAX14830 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14830EVKIT# | EV Kit |

# Denotes RoHS compliant.

## Evaluates: MAX14830

## MAX14830 Evaluation Kit

## Evaluates: MAX14830

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                          | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------|-----------------|
|                 0 | 11/11           | Initial release                      | -               |
|                 1 | 7/12            | Updated Component List and Figure 2c | 1, 2, 9         |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.