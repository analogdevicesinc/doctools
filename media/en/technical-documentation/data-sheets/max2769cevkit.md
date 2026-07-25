<!-- lastmod 2022-08-02 -->
## MAX2769C Evaluation Kit

## General Description

The MAX2769C evaluation kit (EV kit) simplifies evaluation of  the  MAX2769C  universal  GPS  receiver.  It  enables testing  of  the  device  performance  and  requires  no  additional support  circuitry.  Standard  50Ω  SMA  connectors  are included on the EV kit for the inputs and outputs to allow for  quick  and  easy  evaluation  on  the  test  bench.  The evaluation kit is fully assembled and tested at the factory.

This document provides a component list, a list of equipment required  to  evaluate  the  device,  a  straightforward  test procedure to verify functionality, a description of the EV kit circuit, the circuit schematic, and artwork for each layer of the printed circuit board (PCB).

## Features

- Easy Evaluation of the MAX2769C IC
- +2.7V to +3.3V Single-Supply Operation
- 50Ω SMA Connector on the RF Ports and for the Baseband Outputs
- All Critical Peripheral Components Included
- Parallel Port for 3-Wire Interfacing
- PC Control Software Available Upon Request

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX2769CEVKIT# | EV Kit |

#Denotes RoHS-compliant

## Quick Start

The MAX2769C EV kit includes two on-board MAX8510 linear  regulators  for  powering  up  the  MAX2769C  device to  a  regulated  supply  voltage  of  +2.85V.  When  using the  linear  regulators,  connect  pins  1-2  of  jumpers  W16 and W17. The MAX2769C can also be powered directly through  an  external  power  supply  through  pin  2  of  the jumpers (see Figure 1 for details).

## Required Test Equipment

This  section  lists  the  recommended  test  equipment  to verify operation of the MAX2769C. It is intended as a guide only and some substitutions are possible.

- One RF signal generator capable of delivering at least +5dBm  of  output  power  at  the  operating  frequency (e.g., HP E4433B or equivalent)
- An RF spectrum analyzer that covers the MAX2769C operating frequency range (e.g., FSEB20, or equivalent)
- A power supply capable of up to 1A at +2.7V to +6V
- One  ammeter  for  measuring  the  supply  current (optional)
- 50Ω SMA cables
- A network analyzer (e.g., HP 8753D or equivalent) to measure small-signal return loss (optional)
- A  dual  power  supply  capable  of  delivering  up  to  1A at ±5V
- A user-supplied IBM-compatible PC
- Oscilliscope or logic analyzer to measure digital outputs (optional)

<!-- image -->

Evaluates: MAX2769C

## MAX2769C Evaluation Kit

## Connections and Setup

This  section  provides  a  step-by-step  guide  to  operating the EV kit and testing the device functions. Caution: Do not  turn  on  the  DC  power  or  RF  signal  generators until all connections are completed.

- 1) Connect  the  PC  to  the  INTF3000  interface  board using  the  USB  cable.  On  the  INTF3000,  remove jumper JU1, and connect a DC supply set to +3V to the VPULL connector. Connect the 25-pin connector of the INTF3000 (J4) directly to the 25-pin connector of the EV kit (JDR1).
- 2) Connect a DC supply set to +3V (through an ammeter if desired) to jumpers W19 and W20 on the EV kit. Do not turn on the supply. When using the on-board linear regulators to power the MAX2769C, connect pins 1-2 of jumpers W16 and W17.
- 3) Connect a DC supply set to +5V to jumper W12 on the EV kit. Connect a DC supply set to -5V to jumper W11 on the EV kit. Do not turn on the supply.
- 4) Make sure that jumpers W1-W9 and W18 are shorted for proper supply connection.
- 5) Leave  jumpers  W13,  W14,  W15,  and  W28  open and  connect  jumper  W23  to  ground  (pins  1-2)  if  the MAX2769C is evaluated using a 3-wire bus.
- 6) Set  the  signal  generator  to  1575.42MHz,  -110dBm. Do not turn on the generator's output. Connect the RF signal generator to the LNA1 input.
- 7) Connect LNA\_OUT SMA connector (J8) to the MIX\_IN SMA connector (J12) on the EV kit.
- 8) Connect the output of the MAX4444 buffer (connector J3) on the EV kit to a spectrum analyzer.
- 9) Turn  on  the  DC  supply.  The  supply  current  should read approximately 20mA .
- 10) Visit HERE to download the latest version of the EV kit  software, MAX2769C\_Setup\_1.0.0.exe .  Run  the installation file.

## Evaluates: MAX2769C

- 11) Run the control software on an IBM-compatible PC. Load  the  default  state  by  clicking  Settings,  then defaults, also set the SHDN and IDEL pins to 1, under 'Entry' page, Hardware Control section. Upon device power-up, the default state should set the MAX2769C device  in  automatic-gain-control  mode  (AGCMODE = 00, PGAIEN = 1, and PGAQEN = 0). The default configuration will set the center frequency to 3.9MHz and  a  bandwidth  of  2.5MHz.  Using  the  control software, configure the following:
- a)  In the 'Entry' page of the graphical user interface (GUI), set the reference frequency to 16.368MHz.
- b)  Set the R divider to 16.
- c)  Enable  the  I  and  Q  channels  by  setting  the IQ enable = 1.
- d)  Set  the  'output  level'  to  1X  =  analog  outputs through the 'Entry' page or configuration register 2.
- 12) Activate the RF generator and observe the IF signal at 4.092MHz at an I\_OUT\_ANA SMA connector J3.
- 13) Set the 'output level' to 00 = CMOS logic through the 'Entry'  page  and  observe  the ADC  digital  output  at J9A-J9D header pins.

## Layout Issues

A good PCB is an essential part of an RF circuit design. The  EV  kit  PCB  can  serve  as  a  guide  for  laying  out a  board  using  the  devices.  Keep  traces  carrying  RF signals  as  short  as  possible  to  minimize  radiation  and insertion  loss.  Use  impedance  control  on  all  RF  signal traces.  The  exposed  paddle  must  be  soldered  evenly to  the  board's  ground  plane  for  proper  operation.  Use abundant throughputs beneath the exposed paddle and between RF traces to minimize undesired RF coupling.

To  minimize  coupling  between  different  sections  of  the IC,  each  V CC   pin  must  have  a  bypass  capacitor  with low  impedance  to  the  closest  ground  at  the  frequency of  interest.  Do  not  share  ground  vias  among  multiple connections to the PCB ground plane. Refer to the Layout Issues section of the MAX2769C IC data sheet for more information.

## MAX2769C Evaluation Kit

## Component Suppliers

| SUPPLIER              | WEBSITE        |
|-----------------------|----------------|
| AVX Corp.             | www.avx.com    |
| Murata Mfg. Co., Ltd. | www.murata.com |
| Rakon Ltd.            | www.rakon.com  |
| Texas Instruments     | www.ti.com     |

Note:

Indicate that you are using the MAX2769C when contacting these component suppliers.

## MAX2769C Evaluation Kit Bill of Materials

| DESIGNATION                                                                      |   QTY | DESCRIPTION                                                  |
|----------------------------------------------------------------------------------|-------|--------------------------------------------------------------|
| C1-C4, C7, C16-C19, C21, C22, C23, C41-C45, C48, C49, C50, C53, C54, C55         |    23 | 0.1µF ±10% capacitors (0402) Murata GRM155R61A104K           |
| C5, C8-C12, C14, C31, C40, C56, C67                                              |    11 | 100pF ±5% capacitors (0402) Murata GRM1555C1H101J            |
| C6, C61, C62                                                                     |     3 | 10µF ±10% tantalum capacitors (B case) AVX TAJB106K016       |
| C15, C25, C27, C29, C30, C57, C58, C65                                           |     8 | 0.01µF ±10% capacitors (0402) Murata GRM155R71C103K          |
| C24                                                                              |     1 | 27pF ±5% capacitor (0402) Murata GRM1555C1H270J              |
| C26, C36                                                                         |     2 | 6800pF ±10% capacitors (0402) Murata GRM155R71H682K          |
| C28                                                                              |     1 | 470pF ±10% capacitor (0402) Murata GRM155R71H471K            |
| C32-C35, C37, C38, C39, C58, C66, C68, C69                                       |     0 | Not installed, capacitors                                    |
| C46, C47, C51, C52                                                               |     4 | 10pF ±5% capacitors (0402) Murata GRM1555C1H10R0J            |
| C59, C60, C63, C64, C70                                                          |     5 | 1.0µF ±10% capacitors (0402) Murata GRM155R60J105K           |
| J1, J2, J3, J6, J7, J8, J10, J11, J12                                            |     9 | SMAend-launch jack receptacles, 0.062in Johnson 142-0701-801 |
| J9                                                                               |     1 | 2 x 5 dual inline header, 100-mil center Sullins PEC36DAAN   |
| JDR1                                                                             |     1 | DB25 right-angle male connector AMP 5747238-4                |
| L2, L3                                                                           |     0 | Not installed, inductors                                     |
| R1, R26-R29, R35-R43, R56                                                        |     0 | Not installed, resistors                                     |
| R2, R10, R17, R21, R22, R23, R31-R34, R44-R55, R57, R59, R60, R66, R67, R68, R71 |    29 | 0Ω ±5% resistors (0402)                                      |
| R4, R24, R25                                                                     |     3 | 20kΩ ±5% resistors (0402)                                    |
| R5-R9, R30, R61-R65, R69, R70                                                    |    13 | 10kΩ ±1% resistors (0402)                                    |
| R11, R14, R15                                                                    |     3 | 47.5Ω ±1% resistors (0402)                                   |
| R12, R13, R18, R19                                                               |     4 | 75Ω ±1% resistors (0402)                                     |
| R16                                                                              |     1 | 22.1Ω ±1% resistor (0402)                                    |
| R20                                                                              |     1 | 100kΩ ±1% resistor (0402)                                    |

│

Evaluates: MAX2769C

## MAX2769C Evaluation Kit Bill of Materials (continued)

| DESIGNATION                |   QTY | DESCRIPTION                                                                                  |
|----------------------------|-------|----------------------------------------------------------------------------------------------|
| T1, T2, T3                 |     0 | Not installed                                                                                |
| TP1-TP5, TP10, TP11, TP15  |     8 | PC mini-red test points Keystone 5000                                                        |
| U1, U2                     |     2 | MAX8510EXK29+ ultra-low-noise, high PSRR, low-dropout, 120mA linear regulators               |
| U8                         |     1 | 16.368MHz TCXO Rakon IT3205BE                                                                |
| U10, U11, U28              |     0 | Not installed                                                                                |
| U12, U18                   |     2 | MAX4444ESE+ ultra-high-speed, low-distortion, differential- to-single-ended line receivers   |
| U14                        |     1 | MAX4447ESE+ 6500V/µs wideband, high-output-current, single-ended-to-differential line driver |
| U21                        |     1 | MAX2769CETI+ low-power, single-conversion, low-IF GPS receiver                               |
| U23                        |     1 | SN74LV07ADR hex buffer/driver with open-drain output Texas Instruments SN74LV 07ADR          |
| W1-W12, W18, W19, W20, W28 |    16 | 1 x 2 inline headers, 100-mil center Sullins PEC36SAAN                                       |
| W13-W17, W23               |     6 | 1 x 3-inline headers, 100-mil center Sullins PEC36SAAN                                       |
| Y2                         |     0 | Not installed                                                                                |
| -                          |    17 | Shorting jumpers, gold finish contact (W1-W9, W13-W18, W23, W28) Sullins SSC02SYAN           |

│

Evaluates: MAX2769C

Evaluates: MAX2769C

Figure 1. MAX2769C EV Kit Schematic

<!-- image -->

Evaluates: MAX2769C

Figure 2. MAX2769C EV Kit PCB Layout-Top Layer Metal

<!-- image -->

Evaluates: MAX2769C

Figure 3. MAX2769C EV Kit PCB Layout-Top Silkscreen

<!-- image -->

│

Evaluates: MAX2769C

Figure 4. MAX2769C EV Kit PCB Layout-Bottom Layer Metal

<!-- image -->

│

Evaluates: MAX2769C

Figure 5. MAX2769C EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

## MAX2769C Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                       | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------|-----------------|
|                 0 | 9/07            | Initial release                                                   | -               |
|                 1 | 7/14            | Updated step 1 in the Connections and Setup section               | 2               |
|                 2 | 3/16            | Added MAX2769B                                                    | 1-9             |
|                 3 | 8/16            | Added MAX2769C part number and updated Center Frequency to 3.9MHz | 1-9             |
|                 4 | 1/17            | Removed all parts except MAX2769C                                 | 1-9             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX2769C