<!-- lastmod 2022-08-02 -->
## MAX21B Evaluation Kit

## General Description

The MAX2121B evaluation kit (EV kit) simplifies the testing and evaluation of the IC direct-conversion tuner. The evaluation kit is fully assembled and tested at the factory. Standard  50 I SMA  and  BNC  connectors  are  included on  the  EV  kit  for  the  inputs  and  outputs  to  allow  quick and easy evaluation on the test bench. This document provides  a list of  equipment  required  to  evaluate the  device,  a  straightforward  test  procedure  to  verify functionality, a description of the EV kit circuit, the circuit schematic, a component list for the kit, and artwork for each layer of the PCB.

## Component List

| DESIGNATION                           |   QTY | DESCRIPTION                                                                  |
|---------------------------------------|-------|------------------------------------------------------------------------------|
| ADDR                                  |     0 | Not installed, 3-pin (1 x 3) inline header, 0.01in centers Sullins PEC36SAAN |
| CP_OUT, J13, REF_O/P, VGC             |     4 | PC mini red test points Keystone 5000                                        |
| C1-C6, C9                             |     7 | 1000pF Q 10% ceramic capacitors (0603) Murata GRM188R71H102K                 |
| C7, C13, C20, C21, C25, C26, C27, C75 |     8 | 0.1 F F Q 10% ceramic capacitors (0603) Murata GRM188R71C104K                |
| C8, C12, C30                          |     0 | Not installed, capacitors                                                    |
| C10, C11                              |     2 | 0.047 F F Q 10% ceramic capacitors (0603) Murata GRM188R71C473K              |
| C14                                   |     1 | 100pF Q 5% ceramic capacitor (0603) Murata GRM1885C1H101J                    |
| C15                                   |     1 | 0.033 F F Q 10% ceramic capacitor (0603) Murata GRM188R71E333K               |
| C16                                   |     1 | 2200pF Q 5% ceramic capacitor (0603) Murata GRM188R71H222J                   |

## Features

- Easy Evaluation of the MAX2121B
- 50 Ω RF Input SMA Connector
- 50 Ω Baseband Output BNC Connector
- Single 3.3V ±5% Supply
- I 2 C 2-Wire Serial Interface
- All Critical Peripheral Components Included
- Proven PCB Layout
- Fully Assembled and Tested
- PC Control Software (Available at www.maximintegrated.com/evkitsoftware )

Ordering Information appears at end of data sheet.

| DESIGNATION                                                           |   QTY | DESCRIPTION                                                                   |
|-----------------------------------------------------------------------|-------|-------------------------------------------------------------------------------|
| C18                                                                   |     1 | 10 F F Q 10% tantalum capacitor (C Case) AVX TAJC016K016                      |
| C23, C24, C71, C72, C73                                               |     5 | 330pF Q 5% ceramic capacitors (0603) Murata GRM1885C1H331J                    |
| C28, C31                                                              |     2 | 5pF Q 0.25pF ceramic capacitors (0603) Murata GRM1885C1H5R0C                  |
| C32                                                                   |     1 | 33pF Q 5% capacitor (0603) Murata GRM1885C1H330J                              |
| IN, IP, QN, QP                                                        |     4 | SMA PC top-mount connectors Emerson 142-0701-201                              |
| J6                                                                    |     1 | DB25 right-angle male connector AMP 5747238-4                                 |
| J17                                                                   |     1 | PC mini black test point Keystone 5001                                        |
| JP1, JP2, VCC_BB, VCC_DIG, VCC_LO, VCC_RF1, VCC_RF2, VCC_SYN, VCC_VCO |     0 | Not installed, 2-pin (1 x 2) inline headers, 0.01in centers Sullins PEC36SAAN |

<!-- image -->

Evaluates: MAX21B

## MAX21B Evaluation Kit

## Component List (continued)

| DESIGNATION            |   QTY | DESCRIPTION                                               |
|------------------------|-------|-----------------------------------------------------------|
| R1, R12, R13, R17      |     4 | 49.9 I Q 1% resistors (0603); use lead-free parts only    |
| R2                     |     0 | Not installed, resistor                                   |
| R3, R7, R15, R16       |     4 | 0 I Q 5% resistors-short (0603); use lead-free parts only |
| R4                     |     1 | 1k I Q 5% resistor (0603); use lead-free parts only       |
| R5                     |     1 | 820 I Q 5% resistor (0603); use lead-free parts only      |
| R6                     |     1 | 390 I Q 5% resistor (0603); use lead-free parts only      |
| R8                     |     1 | 86.6 I Q 1% resistor (0603); use lead-free parts only     |
| R9, R10, R11, R41, R42 |     5 | 100 I Q 1% resistors (0603); use lead-free parts only     |
| R14, R43               |     2 | 5.1k I Q 5% resistors (0603); use lead-free parts only    |
| R18                    |     1 | 43.2 I Q 1% resistor (0603); use lead-free parts only     |
| R46, R47               |     2 | 2.7k I Q 5% resistors (0603); use lead-free parts only    |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AMP/Tyco Electronics                   | 800-522-6752 | www.tycoelectronics.com     |
| AVX Corporation                        | 843-946-0238 | www.avx.com                 |
| Citizen America Corp.                  | 310-781-1460 | www.citizencrystal.com      |
| Digi-Key Corp.                         | 800-344-4539 | www.digikey.com             |
| Emerson Network Power                  | 507-833-8822 | www.emersonnetworkpower.com |
| Keystone Electronics Corp.             | 209-796-2032 | www.keyelco.com             |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Sullins Electronics Corp.              | 760-744-0125 | www.sullinselectronics.com  |

Note: Indicate that you are using the MAX2121B when contacting these component suppliers.

## Quick Start

## Test Equipment Required

- MAX2121B EV kit
- Dual-output power supply capable of supplying up to  3.3V at &gt; 160mA for V CC  and 3V at &gt; 50 F A for VGC gain-control voltage
- RF  signal  generator  capable  of  delivering  at  least 0dBm of output power at frequencies up to 2.175GHz

Windows and Windows XP are registered trademarks of Microsoft Corp.

- RF  spectrum  analyzer  capable  of  covering  the operating frequency range of the device
- PC, laptop, or tablet with Windows XP M ,  Windows M 7 or 8 operating system, and a USB port
- USB A male to USB B male cable
- US keyboard
- Multichannel digital oscilloscope (optional)
- Network analyzer to measure return loss (optional)
- Ammeter to measure supply current (optional)

│

Evaluates: MAX21B

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                  |
|---------------|-------|----------------------------------------------------------------------------------------------------------------------------------------------|
| REF_INPUT     |     0 | Not installed, SMA edge-mount connector, round contact Emerson 142-0701-801                                                                  |
| RF_INPUT      |     1 | SMA edge-mount connector, round contact Emerson 142-0701-801                                                                                 |
| U1            |     1 | DVBS tuner (28 TQFN-EP) Maxim MAX2121BETI+                                                                                                   |
| U3            |     1 | 74LV07A hex buffer/driver OC TI SN74LV07ADR                                                                                                  |
| Y1            |     1 | 27MHz crystal Citizen America HCM49-27.000MABJ-UT Digi-Key 300-8571-1-ND                                                                     |
| -             |     0 | Not installed, shunts (JP1, JP2, VCC_BB, VCC_DIG, VCC_LO, VCC_RF1, VCC_RF2, VCC_SYN, VCC_VCO) Shorting jumpers, 2 position Sullins SSC02SYAN |
| -             |     1 | PCB:MAX2121BEVALUATIONKIT#                                                                                                                   |

## MAX21B Evaluation Kit

## Procedure

The EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Measurement Considerations

The  EV  kit  includes  on-board  matching  circuitry  at  the MAX2121B  RF  input  to  convert  the  50 I source  to  a 75 I input. Note that the input power to the device must be  adjusted  to  account  for  the  -6dB  power  loss  of  the matching resistor network.

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit in UHF mode. Caution: Do not turn on DC power or RF signal generators until all connections are completed.

- 1) Verify that all jumpers are in place.
- 2) With its output disabled, connect the DC power supply to VGC set to 0.5V (maximum gain).
- 3) With its output disabled, set the DC power supply to 3.3V. Connect the power supply to the VCC (through an ammeter if desired) and GND terminals on the EV kit. If available, set the current limit to 200mA.
- 4) With its output disabled, set the RF signal generator to  a  955MHz  frequency  at  -69dBm  to  account  for the 6dB resistive pad loss. When measuring noise figure,  this  6dB  must  also  be  accounted  for  by subtracting  6dB  from  the  measured  noise  figure, unless the pad has been removed.
- 5) Connect the output of the RF signal generator to the SMA connector labeled RF \_INPUT on the evaluation board.
- 6) Connect  the  PC  to  the  INTF3000  Interface  Board using  a  USB  A  male  to  USB  B  male  cable.  On INTF3000, place a jumper between pins 1-2 of JU1 (VBUS  Pos).  Connect  a  25-pin  connector  of  the INTF3000 (J4) directly to the 25-pin connector of the EV kit (J6).
- 7) Turn on the 3.3V V CC  power supply, followed by the 3V  gain-control  power  supply.  The  supply  current from the 3.3V V CC  supply should read approximately 150mA,  and  the  supply  current  from  the  3V  V GC should read approximately 50 F A. Be sure to adjust the  power  supply  to  account  for  any  voltage  drop across the ammeter.
- 8) Install  and  run  the  IC  control  software.  Software  is available  for  download  at www.maximintegrated. com/evkitsoftware .
- 9) Load  the  default  register  settings  from  the  control software by clicking Edit: Load Defaults .
- 10)  Connect  the  output  to  a  spectrum  analyzer  or  an oscilloscope.
- 11)  Enable the RF signal generator's output.
- 12)  Activate and set the power level of the RF generator to achieve 1VP-P differential across IP/IN or QP/QN.  Note  that  the  intended  200 I differential  load  is  dependent  on  each  baseband  output being  properly  terminated  into  50 I .  For  example, terminate  IP  into  a  50 I spectrum  analyzer  and terminate IN into 50 I . The summation of these two 50 I terminations  and  the  two  series  50 I resistors on the EV kit equates to the desired 200 I differential load.  In  this  configuration,  the  1V P-P   differential voltage across IP/IN is reduced to 250mV P-P  (-8dBm) at the spectrum-analyzer input.
- 13)  Check the I/Q outputs.
- 14)  Observe the baseband output at 5MHz with differential 1V P-P .

## Layout Considerations

The EV kit can serve as a guide for PCB layout. Keep RF signal lines as short as possible to minimize losses and radiation. Use controlled impedance on all high-frequency  traces.  The  exposed  pad  must  be  soldered  evenly to  the  board's  ground  plane  for  proper  operation.  Use abundant vias  beneath  the  exposed  pad  for  maximum heat dissipation. Use abundant ground vias between RF traces to minimize undesired coupling.

To minimize coupling between different sections of the IC, the ideal power-supply layout is a star configuration, which  has  a  large  decoupling  capacitor  at  the  central VCC node. The V CC  traces branch out from this  node, with  each  trace  going  to  separate  V CC   pins  of  the  IC. Each  V CC   pin  must  have  a  bypass  capacitor  with  low impedance  to  ground  at  the  frequency  of  interest.  Do not share ground vias among multiple connections to the PCB ground plane.

Evaluates: MAX2121B

Figure 1. MAX2121B EV Kit Schematic

<!-- image -->

## MAX2121B Evaluation Kit

Figure 2. MAX2121B EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluates: MAX2121B

Figure 3. MAX2121B EV Kit PCB Layout-Top

<!-- image -->

Figure 4. MAX2121B EV Kit PCB Layout-Bottom

<!-- image -->

Figure 5. MAX2121B EV Kit PCB Layout-Top Soldermask

<!-- image -->

## Evaluates: MAX2121B

Figure 6. MAX2121B EV Kit PCB Layout-Bottom Soldermask

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX2121BEVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX21B

## MAX21B Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-86294, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX21B