<!-- lastmod 2022-08-02 -->
## MAX14850 Evaluation Kit

## General Description

The MAX14850 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the functionality of  the  MAX14850  6-channel  digital  isolator  in  a  16-pin narrow  body  SO  surface-mount  package.  The  EV  kit features an on-board isolated power supply, an RS-485 transceiver,  and  an  RS-232  transceiver.  The  EV  kit  is powered from a single 5V supply.

## Features

- Operates from a Single 5V Supply
- On-Board Isolated RS-485 and RS-232 Transceivers for Easy Testing
- 600VRMS Isolation for 60s
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

Evaluates: MAX14850

## Quick Start

## Required Equipment

- MAX14850 EV kit
- 5V DC power supply or USB cable with a micro-B connector
- Signal/function generator
- Oscilloscope

## Startup Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Connect  the  DC  power  supply  between  the  EV  kit's +5V and GNDA test points.
- 2)  Turn  on  the  DC  power  supply  and  set  it  to  5V,  then enable the power-supply output.

Note: It  is  also  possible  to  power  the  EV  kit  with  a standard USB port. To do so, connect the micro-B end of a USB cable into P1 on the board. Connect the A end of the USB cable into the USB port.

- 3)  Verify that the PWR (LED1) and RS-485 (LED3) LEDs are on.
- 4)  Connect a function/signal  generator  to  the  INA2  test point  (TP3)  and  set  the  output  to  a  1MHz  0  to  5V square wave. Verify that A and B outputs (TP16 and TP15, respectively) switch as the signal toggles.

<!-- image -->

## MAX14850 Evaluation Kit

## Detailed Description of Hardware

The  MAX14850  EV  kit  is  a  fully  assembled  and  tested circuit  board  for  evaluating  the  MAX14850  6-channel digital isolator (U1) in a 16-pin narrow body SO package. The EV kit has been designed to allow for evaluating the MAX14850  alone  or  in  a  standard  RS-485  or  RS-232 configuration. The EV kit is powered from a single 5V.

## External Power Supply

Power on the EV kit is derived from a single 5V source. Connect  an  external  supply  to  the  5V  and  GNDA  test points or connect a micro-B USB cable to the on-board P1 connector to generate the 5V.

An on-board MAX256 H-bridge driver circuit (U3) and a MAX8881  LDO  (U2)  generate  an  isolated  3.3V  supply to power the secondary (B) side of the board. The 3.3V supply powers the MAX4948 switch (U5) and the RS-485 and RS-232 interface (U7) ICs.

## Mode Selection

The  EV  kit  has  been  designed  to  allow  for  evaluating the U1 IC alone or in a standard interface configuration (i.e., RS-485, RS-232, SPI, or I 2 C). Jumper JU1 enables/ disables the U5 switch. Disable the U5 switch to evaluate the U1 IC alone or in an SPI or I 2 C configuration. Enable Evaluates: MAX14850

U5  to  evaluate  the  U1  IC  in  an  RS-485  or  RS-232 configuration. See Table 1 for jumper settings.

## Evaluating the MAX14850 in a Standalone Configuration

Disable the U5 IC to evaluate the U1 IC alone. VCCA and VCCB remain unchanged (+5V and +3.3V, respectively) in this configuration, and the U5 IC remains powered. Do not apply a voltage higher than +3.3V relative to GNDB on any OUTB\_, INB\_, or I/OB\_ pin when evaluating the U1 IC in standalone mode.

## Evaluating the MAX14850 in an Isolated RS-485 Configuration

The EV kit uses a pushbutton switch to select between an RS-232 and an RS-485 interface. The U1 IC is connected to  the  on-board  U7  RS-485  transceiver  when  LED3  is on. Table 2 shows the U1 IC I/O connections for RS-485 mode.

The  U1  IC  level  shifts  the  data  and  control  signals and  transmits  them  across  the  isolation  barrier.  The signals are then routed through the U5 switch to the U7 transceiver.

Transistors Q1 and Q2 are included to ensure high data rates through the U5 switch.

## Table 1. EV Kit Connections for RS-485 and RS-232 Modes

|     | JUMPER SHUNT POSITION   | DESCRIPTION    | DESCRIPTION                 |
|-----|-------------------------|----------------|-----------------------------|
|     | JUMPER SHUNT POSITION   | MAX4948 SWITCH | EVALUATION MODE             |
| JU1 | 1-2                     | Disabled       | MAX14850 alone              |
| JU1 | 2-3*                    | Enabled        | RS-485 and RS-232 interface |

## Table 2. EV Kit A-Side Connections for RS-485 Interface Configuration

| MAX14850 PIN   | TEST POINT CONNECTION   | CONNECTION TO THE RS-485 TRANSCEIVER   |
|----------------|-------------------------|----------------------------------------|
| OUTA1          | TP8                     | RO                                     |
| OUTA2          | TP9                     | GND                                    |
| INA1           | TP3                     | DI                                     |
| INA2           | TP5                     | Unconnected                            |
| I/OA1          | TP11                    | RE                                     |
| I/OA2          | TP13                    | DE                                     |

│

## MAX14850 Evaluation Kit

A  120Ω  resistor  (R18)  differentially  terminates  the  A and B data lines of the U7 IC. Resistors R16 and R19 are  not  installed,  but  are  available  for  testing  custom termination.

Figure 1 is a simplified schematic showing the connections for evaluating the U1 IC in an isolated RS-485 circuit.  The  U1  IC's  high-speed  unidirectional  channels are  used  for  data  channels  DI  and  RO.  Bidirectional channels  are  demonstrated  on  the  enable  lines  (DE and  RE),  where  lower  speed  is  acceptable.  Note  that deasserting RE three-states the RO  output  of  the transceiver only; it does not three-state the I/O\_1 channel of the U1 IC.

Evaluates: MAX14850

Assert both DE and RE to  loop the DI input signal back to  the  isolated  RO  output,  allowing  the  DI  source  and RO  monitor  to  share  a  common  ground  (GNDA)  while the  RS-485  transceiver  is  unconnected.  Note  that  the signal  delays  between  DI  and  RO  are  equivalent  to  an RS-485 link  using  a  U1  IC  isolated  transceiver  at  each end. The total delay includes two U1 IC delays plus the delay from both the RS-485 transmitter and the RS-485 receiver. Test the isolator with changing ground potentials by  connecting  the  GND  of  a  signal  generator  to  GNDA and the output of the generator to GNDB.

Figure 1. Simplified Connection Diagram for Evaluating the MAX14850 in an Isolated RS-485 Configuration

<!-- image -->

│

## MAX14850 Evaluation Kit

## Evaluating the MAX14850 in an Isolated RS-232 Configuration

The  U1  IC  is  connected  to  the  on-board  MAX13235E transceiver (U8) when LED2 is on. Table 3 shows the U1 IC's I/O connections for RS-232 mode.

The U8 IC is a low-voltage interface, RS-232 transceiver capable of data rates up to 3Mbps.The U1 IC level shifts the  data  and  control  signals  and  transmits  them  across the isolation barrier. The signals are then routed through the U5 switch to the U8 transceiver.

Evaluates: MAX14850

Figure 2 is a simplified schematic showing the connections for evaluating the U1 IC in an isolated RS-232 circuit.

Connect  the  RX  and  TX  signals  on  the  peripheral  unit together  to  loop  the  signal  back  to  the  isolated  input, allowing the input source and output monitor to share a common ground (GNDA) while the RS-232 transceiver is floating.

Test  the  isolator  with  changing  ground  potentials  by connecting the GND of a signal generator to GNDA and the output of the generator to GNDB.

Figure 2. Simplified Connection Diagram for Evaluating the MAX14850 in an Isolated RS-232 Configuration

<!-- image -->

## Table 3. EV Kit A-Side Connections for RS-232 Interface Configuration

| MAX14850 PIN   | TEST POINT CONNECTION   | CONNECTION TO THE RS-232 TRANSCEIVER   |
|----------------|-------------------------|----------------------------------------|
| OUTA1          | TP8                     | Unconnected                            |
| OUTA2          | TP9                     | R1OUT                                  |
| INA1           | TP3                     | Unconnected                            |
| INA2           | TP5                     | T1IN                                   |
| I/OA1          | TP11                    | R2OUT                                  |
| I/OA2          | TP13                    | T2IN                                   |

│

## Evaluating the MAX14850 in an Isolated I 2 C Configuration

The  U1  IC  can  be  used  to  transmit  signals  on  isolated I 2 C  serial  buses.  Set  the  EV  kit  in  stand-alone  mode (see Table 1) and connect signals as shown in Table 4 to evaluate isolated I 2 C operation.

Evaluates: MAX14850

Figure 3 is a simplified schematic showing the connections for evaluating the U1 IC in an isolated I 2 C interface. The U1 IC level shifts the data and clock signals and transmits them across the isolation barrier.

Figure 3. Simplified Connection Diagram for Evaluating the MAX14850 in an Isolated I 2 C Configuration

<!-- image -->

## Table 4. EV Kit Connections for Isolated I 2 C Evaluation

| MAX14850 PIN   | TEST POINT CONNECTION   | DESCRIPTION   |
|----------------|-------------------------|---------------|
| OUTA1          | TP8                     | Unconnected   |
| OUTA2          | TP9                     | Unconnected   |
| INA1           | TP3                     | Unconnected   |
| INA2           | TP5                     | Unconnected   |
| I/OA1          | TP11                    | SDA           |
| I/OA2          | TP13                    | SCLK          |

│

## Evaluating the MAX14850 in an Isolated SPI/ MICROWIRE ® Configuration

The  U1  IC  can  be  used  to  transmit  signals  on  isolated SPI/MICROWIRE serial buses. Set the EV kit in standalone  mode  (see  Table  1)  and  connect  the  signals  as shown in Table 5 to evaluate isolated SPI/MICROWIRE operation.

Evaluates: MAX14850

Figure 4 is a simplified schematic showing the connections for evaluating the U1 IC in an isolated SPI/MICROWIRE interface. The U1 IC level shifts the data and clock signals and transmits them across the isolation barrier.

Figure 4. Simplified Connection Diagram for Evaluating the MAX14850 in an Isolated SPI Configuration

<!-- image -->

## Table 5. EV Kit Connections for Isolated SPI/MICROWIRE Evaluation

| MAX14850 PIN   | TEST POINT CONNECTION   | DESCRIPTION   |
|----------------|-------------------------|---------------|
| INA1           | TP3                     | SCLK          |
| INA2           | TP5                     | MOSI          |
| OUTA1          | TP8                     | MISO          |
| OUTA2          | TP9                     | Unconnected   |
| I/OA1          | TP11                    | CS            |
| I/OA2          | TP13                    | Unconnected   |

MICROWIRE is a registered trademark of National Semiconductor Corp.

│

## Component Suppliers

| SUPPLIER                | WEBSITE                  |
|-------------------------|--------------------------|
| Fairchild Semiconductor | www.fairchildsemi.com    |
| Murata Electronics      | www.murata.com           |
| Omron                   | www.omron.com/ecb/       |
| ON Semiconductor        | www.onsemi.com           |
| Pulse                   | www.pulseelectronics.com |

Note:

Indicate that you are using the MAX14850 when contacting these component suppliers..

## Component List, PCB Layout, and Schematics

- MAX14850 EV BOM
- MAX14850 EV PCB Layout
- MAX14850 EV Schematics

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14850EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX14850

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/15           | Initial release | -               |

For information on other Maxim Integrated products, visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are imSlied  0a[im ,nteJrated reserYes the riJht to FhanJe the FirFXitry and sSeFi¿Fations ZithoXt notiFe at any time

│

Evaluates: MAX14850

*EP = Exposed pad.

| DESIGNATION      |   QTY | DESCRIPTION                                                             |
|------------------|-------|-------------------------------------------------------------------------|
| C1, C4           |     2 | 4.7µF ±10%, 10V X7R ceramic capacitors (0805) Murata GRM21BR71A475K     |
| C2               |     1 | 0.47µF ±10%, 16V X7R ceramic capacitor (0603) Murata GCM188R71C474KA55D |
| C3               |     1 | 1µF ±10%, 25V X7R ceramic capacitor (0805) Murata GRM219R71E105K        |
| C5-C10           |     6 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GCM188R71H104K     |
| C11-C16          |     6 | 0.22µF ±10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E224K    |
| D1-D4            |     4 | 40V, 1A Schottky rectifiers (SOD-123) ON Semi MBR140SFT1G               |
| LED1-LED3        |     3 | Green LEDs (1206)                                                       |
| JU1              |     1 | 3-pin header                                                            |
| P1               |     1 | USB micro-B connector                                                   |
| Q1, Q2           |     2 | 50V, 100mA PNP transistors (SOT23) Fairchild MMBT5087                   |
| R1               |     1 | 560 Ω ±5% resistor (0603)                                               |
| R2               |     1 | 47k Ω ±5% resistor (0603)                                               |
| R3, R4, R16, R19 |     0 | Not installed, resistors (0603)                                         |
| R5-R8            |     4 | 2k Ω ±5% resistors (0603)                                               |
| R9, R10          |     2 | 330 Ω ±5% resistors (0603)                                              |
| R11, R14         |     2 | 1k Ω ±5% resistors (0603)                                               |
| R12, R15         |     2 | 100k Ω ±5% resistors (0603)                                             |
| R13, R17         |     2 | 100 Ω ±5% resistors (0603)                                              |
| R18              |     1 | 120 Ω ±5% resistor (0603)                                               |
| SW1              |     1 | Pushbutton switch                                                       |
| T1               |     1 | 1:1:1, 1500kV basic isolation transformer Pulse P0926                   |
| TP1              |     1 | Red test point                                                          |
| TP2, TP21-TP23   |     4 | Black test points                                                       |
| TP3-TP14         |    12 | White test points                                                       |
| TP15-TP20        |     6 | Yellow test points                                                      |
| U1               |     1 | 6-channel digital isolator (16 SO) Maxim MAX14850ASE+                   |
| U2               |     1 | 3.3V LDO (6 SOT23) Maxim MAX8881EUT33+                                  |
| U3               |     1 | Transformer driver (8 SO-EP*) Maxim MAX256ASA+                          |
| U4               |     1 | Dual SPDT switch (10 µMAX®) Maxim MAX4684EUB+                           |
| U5               |     1 | Hex SPDT (24 TQFN-EP*) Maxim MAX4948ETG+                                |
| U6               |     1 | Switch debouncer (6 SOT23) Maxim MAX16054AZT+                           |
| U7               |     1 | RS-485 transceiver (8 SO) Maxim MAX14841EASA+                           |
| U8               |     1 | RS-232 transceiver (20 TQFN-EP*) Maxim MAX13235EETP+                    |
| -                |     1 | PCB: MAX14850 EVALUATION KIT                                            |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->