<!-- lastmod 2022-08-02 -->
## MAX2112 Evaluation Kit

## General Description

The MAX2112 evaluation kit (EV kit) simplifies  the  testing and  evaluation  of  the  IC  direct-conversion  tuner.  The evaluation kit is fully assembled and tested at the factory. Standard 50Ω SMA and BNC connectors are included on the EV kit for the inputs and outputs to allow quick and easy evaluation on the test bench.

This  document  provides  a  list  of  equipment  required  to evaluate the device, a straightforward test procedure to verify functionality, a description of the EV kit circuit, the circuit schematic, a component list for the kit, and artwork for each layer of the PCB.

## MAX2112 EV Kit Bill of Materials

| DESIGNATION                                                     |   QTY | DESCRIPTION                                                                  |
|-----------------------------------------------------------------|-------|------------------------------------------------------------------------------|
| ADDR                                                            |     0 | Not installed, 3-pin (1 x 3) inline header, 0.01in centers Sullins PEC36SAAN |
| BB_I_O/P, BB_Q_O/P                                              |     2 | 50Ω BNC PC mounts Amphenol 31-5329-52RFX                                     |
| BB_IN, BB_IP, BB_QN, BB_QP, CP_OUT, J12, J13, J17, REF_O/P, VGC |    10 | PC mini red test points Keystone 5000                                        |
| C1-C6, C9                                                       |     7 | 1000pF ±10% ceramic capacitors (0603) Murata GRM188R71H102K                  |
| C7, C13, C19, C20, C75                                          |     5 | 0.1µF ±10% ceramic capacitors (0603) Murata GRM188R71C104K                   |
| C8, C12, C25-C30                                                |     0 | Not installed, capacitors                                                    |

## Features

- Easy Evaluation of the MAX2112
- 50Ω RF Input SMA Connector
- 50Ω Baseband Output BNC Connector
- Single 3.3V ±5% Supply
- I 2 C 2-Wire Serial Interface
- All Critical Peripheral Components Included
- Fully Assembled and Tested
- PC Control Software (available at www.maximintegrated.com/evkitsoftware )

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX2112EVKIT+ | EV Kit |

| DESIGNATION       |   QTY | DESCRIPTION                                                  |
|-------------------|-------|--------------------------------------------------------------|
| C10, C11          |     2 | 0.047µF ±10% ceramic capacitors (0603) Murata GRM188R71C473K |
| C14               |     1 | 100pF ±5% ceramic capacitor (0603) Murata GRM1885C1H101J     |
| C15               |     1 | 0.033µF ±10% ceramic capacitor (0603) Murata GRM188R71E333K  |
| C16               |     1 | 2200pF ±5% ceramic capacitor (0603) Murata GRM188R71H222J    |
| C17, C18          |     2 | 10µF ±10% tantalum capacitors (C Case) AVX TAJC016K016       |
| C22               |     1 | 43.2Ω ±1% resistor (0603)*                                   |
| C23, C24, C71-C73 |     5 | 330pF ±5% ceramic capacitors (0603) Murata GRM1885C1H331J    |

<!-- image -->

Evaluates: MAX2112

## MAX2112 EV Kit Bill of Materials (continued)

| DESIGNATION                                                         |   QTY | DESCRIPTION                                                                   |
|---------------------------------------------------------------------|-------|-------------------------------------------------------------------------------|
| J6                                                                  |     1 | DB25 right-angle male connector AMP 5747238-4                                 |
| JP_VCC, VCC_BB, VCC_DIG, VCC_LO, VCC_RF1, VCC_RF2, VCC_SYN, VCC_VCO |     0 | Not installed, 2-pin (1 x 2) inline headers, 0.01in centers Sullins PEC36SAAN |
| L1                                                                  |     1 | 33pF ±5% capacitor (0603) Murata GRM1885C1H330J                               |
| R2, R12, R18-R20, R22, R25, R27-R33                                 |     0 | Not installed, resistors                                                      |
| R3, R7, R15-R17, R21                                                |     6 | 0Ω ±5% resistors (0603)*                                                      |
| R4, R13, R24                                                        |     3 | 1kΩ ±5% resistors (0603)*                                                     |
| R5                                                                  |     1 | 820Ω ±5% resistor (0603)*                                                     |
| R6                                                                  |     1 | 390Ω ±5% resistor (0603)*                                                     |
| R8                                                                  |     1 | 86.6Ω ±1% resistor (0603)*                                                    |
| R9-R11, R41, R42                                                    |     5 | 100Ω ±1% resistors (0603)*                                                    |
| R14, R43                                                            |     2 | 5.1kΩ ±5% resistors (0603)*                                                   |
| R23, R26                                                            |     2 | 0.1µF ±10% ceramic capacitors (0603) Murata GRM188R71C104K                    |
| R46, R47                                                            |     2 | 2.7kΩ ±5% resistors (0603)*                                                   |

## Component Suppliers

| SUPPLIER                        | WEBSITE                     |
|---------------------------------|-----------------------------|
| AMP/Tyco Electronics            | www.tycoelectronics.com     |
| Amphenol RF                     | www.amphenolrf.com          |
| AVX Corp.                       | www.avxcorp.com             |
| Digi-Key Corp.                  | www.digikey.com             |
| Emerson Network Power           | www.emersonnetworkpower.com |
| Keystone Electronics Corp.      | www.keyelco.com             |
| Maxim Integrated Products, Inc. | www.maxim-ic.com            |
| Murata Americas                 | www.murataamericas.com      |
| Sullins Electronics Corp.       | www.sullinselectronics.com  |
| Texas instruments               | www.ti.com                  |

Note: Indicate that you are using the MAX2112 when contacting these component suppliers.

Evaluates: MAX2112

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------------------------------|
| REF_INPUT     |     0 | Not installed, SMAedge-mount connector, round contact Emerson 142-0701-801                                                                 |
| RF_INPUT      |     1 | SMAedge-mount connector, round contact Emerson 142-0701-801                                                                                |
| U1            |     1 | DVBS tuner (28 TQFN-EP**) Maxim MAX2112ETI+                                                                                                |
| U2, U4        |     0 | Not installed, single-supply op amps with R2R outputs Maxim MAX4453ESA                                                                     |
| U3            |     1 | 74LV07A hex buffer/driver OC TI SN74LV07ADR                                                                                                |
| U5            |     0 | Not installed, open I/O comparator Maxim MAX985                                                                                            |
| Y1            |     1 | 27MHz crystal Citizen America 300-8571-1-ND Digi-Key HCM49-27.000MABJ-UT                                                                   |
| -             |     0 | Not installed, shunts (JP_VCC, VCC_BB, VCC_DIG, VCC_LO, VCC_RF1, VCC_RF2, VCC_SYN, VCC_VCO) Shorting jumpers, 2 position Sullins SSC02SYAN |
| -             |     1 | PCB: MAX2112/20 EVALUATION KIT+                                                                                                            |

## Quick Start

## Test Equipment Required

- MAX2112 EV kit
- Dual-output power supply capable of supplying up to 3.3V at &gt; 160mA for V CC and 3V at &gt; 50μA for V GC gain control voltage
- RF  signal  generator  capable  of  delivering  at  least 0dBm of output power at frequencies up to 2.175GHz
- RF  spectrum  analyzer capable of covering the operating frequency range of the device
- PC  laptop  or  tablet  with  Microsoft  Windows  XP ®, Windows ® 7, 8 OS and a USB port
- USB-A male to USB-B male cable
- US keyboard
- Multichannel digital oscilloscope (optional)
- Network analyzer to measure return loss (optional)
- Ammeter to measure supply current (optional)

## Procedure

The EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Measurement Considerations

The  EV  kit  includes  on-board  matching  circuitry  at  the MAX2112 RF input to convert the 50Ω source to a 75Ω input.  Note  that  the  input  power  to  the  device  must  be adjusted to account for the -6dB power loss of the match -ing resistor network.

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit in UHF mode. Caution: Do not turn on DC power or RF signal generators until all connections are completed.

- 1) Verify that all jumpers are in place.
- 2) With its output disabled, connect the DC power supply to VGC set to 0.5V (maximum gain).
- 3) With its output disabled, set the DC power supply to 3.3V. Connect the power supply to the VCC (through an ammeter if desired) and GND terminals on the EV kit. If available, set the current limit to 200mA.

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

## Evaluates: MAX2112

- 4) With its output disabled, set the RF signal generator to a 955MHz frequency at -69dBm to account for the 6dB resistive pad loss. When measuring noise figure, this 6dB must also be accounted for by subtracting 6dB from the measured noise figure, unless the pad has been removed.
- 5) Connect the output of the RF signal generator to the SMA connector labeled RF \_INPUT on the evalua -tion board.
- 6) Connect  the  PC  to  the  INTF3000  interface  board using  the  USB-A  male  to  USB-B  male  cable.  On INTF3000, place a jumper between pins 1-2 on JU1 (VBUS  Pos).  Connect  the  25-pin  connector  of  the INTF3000 (J4) directly to the 25-pin connector on the EV kit (J6).
- 7) Turn on the 3.3V VCC power supply, followed by the 3V  gain-control  power  supply.  The  supply  current from the 3.3V VCC supply should read approximately 100mA,  and  the  supply  current  from  the  3V  VGC should read approximately 50μA. Be sure to adjust the  power  supply  to  account  for  any  voltage  drop across the ammeter.
- 8) Install  and  run  the  IC  control  software.  Software is  available  for  download  on  the  Maxim  website  at www.maximintegrated.com/evkitsoftware .
- 9) Load  the  default  register  settings  from  the  control software by clicking Edit: Load Defaults . Set ICP = 1 and BBG[3:0] = 1011.
- 10)  Connect  the  output  to  a  spectrum  analyzer  or  an oscilloscope.
- 11) Enable the RF signal generator's output.
- 12)  Activate and set the power level of the RF generator to  achieve  1V P-P at  the  baseband  BNC  connector outputs.
- 13)  Check the I/Q outputs.
- 14)  Observe the baseband output at 5MHz with 1V P-P .

## Layout Considerations

The EV kit can serve as a guide for PCB layout. Keep RF signal lines as short as possible to minimize losses and radiation. Use controlled impedance on all high-frequency traces. The exposed paddle must be soldered evenly to the board's ground plane for proper operation. Use abun -dant vias beneath the exposed paddle for maximum heat dissipation. Use abundant ground vias between RF traces to minimize undesired coupling.

## Evaluates: MAX2112

To  minimize  coupling  between  different  sections  of  the IC, the ideal power-supply layout is a star configuration, which  has  a  large  decoupling  capacitor  at  the  central VCC node. The V CC   traces  branch  out  from  this  node, with  each  trace  going  to  separate  V CC  pins  of  the  IC. Each V CC  pin must have a bypass capacitor with a low impedance to ground at the frequency of interest. Do not share  ground  vias  among  multiple  connections  to  the PCB ground plane.

## Evaluates: MAX2112

Figure 1. MAX2112 EV Kit Schematic

<!-- image -->

## Evaluates: MAX2112

Figure 2. MAX2112 EV Kit PCB Layout-Component Placement Guide

<!-- image -->

## Evaluates: MAX2112

Figure 3. MAX2112 EV Kit PCB Layout-Top

<!-- image -->

## Evaluates: MAX2112

Figure 4. MAX2112 EV Kit PCB Layout-Bottom

<!-- image -->

Evaluates: MAX2112

Figure 5. MAX2112 EV Kit PCB Layout-Top Soldermask

<!-- image -->

Evaluates: MAX2112

Figure 6. MAX2112 EV Kit PCB Layout-Bottom Soldermask

<!-- image -->

## MAX2112 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                   | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------|-----------------|
|                 0 | 11/07           | Initial release                               | -               |
|                 1 | 5/10            | Updated L1 in the Component List and Figure 1 | 2, 5            |
|                 2 | 11/14           | Updated Quick Start section                   | 3               |
|                 3 | 11/17           | Updated schematic                             | 5               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-462, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX2112