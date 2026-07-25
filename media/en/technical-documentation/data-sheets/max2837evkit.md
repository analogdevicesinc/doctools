<!-- lastmod 2022-08-02 -->
## MAX2837 Evaluation Kit

## General Description

The  MAX2837  evaluation  kit  (EV  kit)  simplifies  test -ing  of  the  device's  receive  and  transmit  performance in  WiMAX  applications  operating  in  the  2.3GHz  to 2.7GHz  ISM  band.  The  EV  kit  provides  50Ω  SMA connectors for all RF and baseband inputs and outputs. Differential-to-single-ended  and  single-ended-to-differential line drivers are provided to convert the differential I/Q baseband inputs and outputs to single-ended.

## Features

- On-Board Line Driver and Voltage Reference
- 50Ω SMA Connectors on All RF and Baseband Ports
- [PC Control Software Available at www.maximintegrated.com/evkitsoftware )](http://www.maximintegrated.com/evkitsoftware)

## Quick Start

## Recommended Test Equipment

This  section  lists  the  recommended  test  equipment  to verify the operation of the MAX2837. It is intended as a guide only and substitutions may be possible.

- MAX2837 EV kit
- INTF3000+ interface board
- DC supply capable of delivering  +5V  and  250mA  of continuous current
- DC  supply  capable  of  delivering  -5V  and  250mA  of continuous current
- DC supply capable of delivering +3.3V and 250mA of continuous current
- Two HP8648s or equivalent signal sources capable of generating 0dBm up to 3GHz
- Two HP or equivalent arbitrary waveform generators
- One  HP8561E  or  equivalent  RF  spectrum  analyzer with a minimum 100kHz to 3GHz frequency range
- One TDS3012 or equivalent oscilloscope with 200MHz bandwidth
- PC  laptop  or  tablet  with  Microsoft  Windows  XP ® , Windows ®  7, 8 OS and a USB port
- USB-A male to USB-B male cable

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX2837

## Connections and Setup

The EV kit is fully assembled and factory tested. Follow the instructions  below  to  test  the  device.  This  section  provides step-by-step  instructions  for  getting  the  EV  kit  up  and running in all modes. See Figure 1 for EV kit connections:

- 1) Connect  the  PC  to  the  INTF3000  interface  board using the USB-A male to USB-B male cable. On the INTF3000,  remove  jumper  JU1  and  connect  a  DC supply set to 3.3V to the VPULL connector. Connect the 25-pin connector of the INTF3000 (J4) directly to the 25-pin connector on the EV kit (J18).
- 2) With the power supply turned off, connect the +3.3V power-supply  to  VBAT  and  VCCAUX.  Connect  the power-supply ground to the header labeled GND1.
- 3) With the power supply turned off, connect the +5V power supply to the +5V test point and the -5V power supply  to  the  -5V  test  point.  Connect  the  powersupply ground to the header labeled GND2. Connect all the power-supply grounds together.
- 4) Set the RXBBBUF jumper across pins 1-2 to enable the RX baseband buffers.
- 5) Set the VCCVCO jumper across pins 2-3, VCCVCO1 jumper  across  pins  1-2,  VCCVCO2  jumper  across pins 2-3, and VBAT\_LDO jumper across pins 2-3 to utilize the three on-board LDOs to regulate the VBAT voltage to +2.85V.
- 6) Turn on the +3.3V power supply, and the +5V and -5V power supplies.
- 7) Make  sure  there  are  no  jumpers  across  headers labeled RXEN, TXEN and JPSHDNB so that these enables can be controlled through the software.
- 8) Adjust  the  TX  common-mode  potentiometer  (R36) until  measuring 0.9V common-mode voltage at the VCM test point (see Figure 1 for locations).
- 9) Install  and  run  the  MAX2837 control software from HERE.
- 10) In  the Enables panel  of  the  software,  check  the EN\_SPI box to enable the 3-wire interface.
- 11) In  the Synth panel  of  the  software,  set  the  LO frequency to 2500MHz.
- 12) In the Registers panel of the software, set ENABLE to 1 and RXENABLE and TXENABLE to 0 to put the IC into standby mode. The supply current should be around 35mA.

<!-- image -->

## Receive Mode

- 1) Set the signal generator to accurately deliver -100dBm  at  2502MHz.  Connect  the  output  of  the signal generator to RXRF port of the EV kit.
- 2) Connect either the RXBBI or RXBBQ baseband output to a spectrum analyzer. Set the center frequency to 2MHz and the span to 1MHz. Other recommended spectrum  analyzer  settings  are:  Res  BW  of  3kHz, Attenuation of 40dB, and Ref Level of 30dB.
- 3) In the Registers panel of the software, set ENABLE and RXENABLE to 1 and TXENABLE to 0 to activate the receive path. The current should be around 94mA.
- 4) In the RX panel of the software, toggle both the LNA gain  enable  and  the  baseband  VGA  enable  to  be SPI. Set both of the gain controls to max.
- 5) Turn on the RF signal source. The output CW tone at 2MHz should be approximately -2dBm.

## Transmit Mode

- 1) Connect  the  spectrum  analyzer  to  the  TXRF  port. Set the center frequency to 2500MHz and the span to  5MHz.  Other  recommended  spectrum  analyzer settings are: Res BW of 10kHz, Attenuation of 10dB and Ref Level of 0dB.
- 2) Connect  a  2MHz  sinusoid  to  TXBBI  and  a  2MHz sinusoid  with  a  90°  phase  shift  (or  a  cosine)  to TXBBQ. Set the input amplitude of each channel to 90mVRMS.
- 3) In the Registers panel of the software, set ENABLE and TXENABLE to 1 and RXENABLE to 0 to activate the transmit path. The current should be around 146mA.
- 4) In the TX panel of the software, toggle TX VGA Gain to SPI. Set it to -3dB from the max gain.
- 5) In the TX panel of the software, set the TX Mixer V2I gain to -5.5dB (this is also the default setting).
- 6) Turn on the baseband signal sources. The output at 2502MHz should be approximately -1dBm. The LO leakage at 2500MHz should be around -27dBm and sideband suppression at 2498MHz should be around -39dBm.

## Layout Considerations

The  EV  kit  can  serve  as  a  guide  for  board  layout. Keep  PCB  trace  lengths as short as possible to minimize  parasitic  inductance.  Also,  keep  decoupling capacitors  as  close  to  the  IC  as  possible  with  a  direct connection to the ground plane.

## Power-Supply Layout

To  minimize  coupling  between  different  sections  of  the IC,  use  a  'star'  power-supply  routing  configuration  with a  large  decoupling  capacitor  at  a  central  V CC node. The V CC traces  branch  out  from  this  node,  each  going to  a  separate  V CC  node  in  the  circuit.  Place  a  bypass capacitor  as  close  to  each  supply  pin  as  possible.  This arrangement  provides  local  decoupling  at  each  V CC pin. Use at least one via per bypass capacitor for a lowinductance ground connection. Do not share the capacitor ground vias with any other branch.

Evaluates: MAX2837

Figure 1. MAX2837 EV Kit Connections

<!-- image -->

## Component Suppliers

| SUPPLIER               | WEBSITE                   |
|------------------------|---------------------------|
| Digi-Key Corp.         | www.digikey.com           |
| Johnson Components     | www.johnsoncomponents.com |
| Murata Americas        | www.murata.com            |
| Texas Instruments Inc. | www.ti.com                |

Note: Indicate that you are using the MAX2837 when contacting these component suppliers.

## MAX2837 Evaluation Kit

## MAX2837 EV Kit Bill of Materials

| DESIGNATION                                                                                                                                                                    |   QTY | DESCRIPTION                                                 |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------------------------------------------------------------|
| +5V, -5V, VBAT, VCCAUX                                                                                                                                                         |     4 | Test points, PCB red Keystone 5010                          |
| B1-B7, CLK_OUT, CSB, DIN, DOUT, ENABLE, PABIAS, RXBBI+, RXBBI-, RXBBQ+, RXBBQ-, RXENABLE, RXHP, SCLK, TXBBI+ TXBBI-, TXBBQ+, TXBBI-, TUNEM, TUNEP, TXENABLE, RSSI, VCM         |    29 | Test points, PCB mini-red Keystone 5000                     |
| GND1, GND2                                                                                                                                                                     |     2 | Test points, PCB black Keystone 5011                        |
| J17, JP2CSB, JPSPICLK, JPSPIDIN, JPSPIDOUT, L3, L4, L7, VCCCP1, VCCLNA, VCCPLL, VCCRXBB1, VCCRXBB2, VCCRXMX, VCCTXMX, VCCXTAL, VCC_DB, VCC_PAD, VCC_REF, VCC_TCXO, VCC_VCO, Y1 |     0 | Not installed                                               |
| JPB1-JPB7, JPSHDNB, RXBBBUF, RXEN, TXEN, VCCVCO, VCCVCO1, VCCVCO2                                                                                                              |    16 | 1 x 3-pin headers Sullins PEC36SAAN                         |
| C1, C3, C8, C20-C22, C24, C44, C76, C78                                                                                                                                        |     0 | Not installed, capacitors                                   |
| C2, C9, C15, C16, C19, C70, C89                                                                                                                                                |     7 | 22pF ±5% ceramic capacitors (0402) Murata GRM1555C1H220J    |
| C4-C7, C10, C13, C17, C18, C40, C45, C46, C59, C60, C67, C83                                                                                                                   |    15 | 0.1µF ±10% ceramic capacitors (0402) Murata GRM155R61C104K  |
| C11, C23, C26, C28, C32, C34, C73, C74, C75, C87, C88                                                                                                                          |    11 | 0.01µF ±10% ceramic capacitors (0402) Murata GRM155R71E103K |
| C12, C53, C55, C66                                                                                                                                                             |     4 | 10µF ±10% ceramic capacitors (0805) Murata GRM21BR61A106K   |
| C14                                                                                                                                                                            |     1 | 3300pF ±10% ceramic capacitor (0402) Murata GRM155R71H332K  |
| C25, C77                                                                                                                                                                       |     2 | 1000pF ±10% ceramic capacitors (0402) Murata GRM155R71H102K |
| C27                                                                                                                                                                            |     1 | 2.2µF ±10% ceramic capacitor (0805) Murata GRM21BR71A225K   |
| C29, C86                                                                                                                                                                       |     2 | 1µF ±10% ceramic capacitors (0402) Murata GRM155R61J105K    |
| C36-C39                                                                                                                                                                        |     4 | 2.2µF ±10% ceramic capacitors (0603) Murata GRM188R61A225K  |
| C68, C69                                                                                                                                                                       |     2 | 3pF ±5% ceramic capacitors (0402) Murata GRM1555C1H3R0J     |
| C79                                                                                                                                                                            |     1 | 180pF ±5% ceramic capacitor (0402) Murata GRM1555C1H181J    |
| C81                                                                                                                                                                            |     1 | 100pF ±5% ceramic capacitor (0402) Murata GRM1555C1H101J    |
| J18                                                                                                                                                                            |     1 | DB25 right-angle male connector AMP 5747238-4               |

Evaluates: MAX2837

## MAX2837 EV Kit Bill of Materials (continued)

| DESIGNATION                                                                |   QTY | DESCRIPTION                                                                                  |
|----------------------------------------------------------------------------|-------|----------------------------------------------------------------------------------------------|
| L1                                                                         |     1 | 6.2nH ±0.1nH inductor Murata LQ15AN6N2B00                                                    |
| R1, R7                                                                     |     2 | 200Ω ±1% resistors (0402)                                                                    |
| R2, R5, R6, R38                                                            |     4 | 205Ω ±1% resistors (0402)                                                                    |
| R3, R10                                                                    |     2 | 226Ω ±1% resistors (0402)                                                                    |
| R4, R26                                                                    |     2 | 49.9Ω ±1% resistors (0402)                                                                   |
| R8, R9, R12-R19, R23, R24, R25, R28, 29, R31, R32, R40, R41, R45, R47, R48 |    22 | 0Ω resistors (0402)                                                                          |
| R11, R30, R35, R42, R50, R52                                               |     0 | Not installed, resistors                                                                     |
| R20, R51                                                                   |     2 | 475Ω ±1% resistors (0402)                                                                    |
| R21, R22                                                                   |     2 | 61.9Ω ±1% resistors (0402)                                                                   |
| R33, R36                                                                   |     2 | Trimmer potentiometers Bourns 3296W-1-102LF                                                  |
| R34                                                                        |     1 | 576Ω ±1% resistor (0402)                                                                     |
| R37                                                                        |     1 | 332Ω ±1% resistor (0402)                                                                     |
| RXRF, TXRF, CLKOUT, RXBBI, RXBBQ, TXBBI, TXBBQ, FREF                       |     8 | SMAedge-mount connectors, round Johnson 142-0701-801                                         |
| T1, T2                                                                     |     2 | 2.4GHz RF baluns Murata LDB182G5010G-120                                                     |
| U1, U3                                                                     |     2 | Low-noise differentialADC drivers ADI AD8139                                                 |
| U2, U6                                                                     |     2 | MAX4444ESE+ (16-pin narrow SO)                                                               |
| U4                                                                         |     1 | MAX2837ETM+ (48-pin thin QFN-EP, 6mm x 6mm x 0.8mm)                                          |
| U7                                                                         |     1 | Low-dropout linear regulator MAX8887EZK29+ (5-pin SOT23)                                     |
| U8, U9                                                                     |     2 | SN74LVTH244ADB Texas Instruments SN74LVTH244ADBR                                             |
| U10                                                                        |     1 | Low-dropout voltage reference MAX6062AEUR+ (3-pin SOT23)                                     |
| U11                                                                        |     1 | 40MHz TCXO Kyocera KT3225N40000ECV28ZAA                                                      |
| U12-U14                                                                    |     3 | Ultra-low-noise LDOs MAX8510EXK29+ (5-pin SC70)                                              |
| -                                                                          |    16 | Shunts (JPB1-JPB7, JPSHDNB, RXBBBUF, RXEN, TXEN, VCCVCO, VCCVCO1, VCCVCO2) Sullins SSC02SYAN |
| -                                                                          |     1 | PCB: MAX9835/7 EVALUATION KIT+                                                               |

Evaluates: MAX2837

## MAX2837 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX2837 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX2837 EV Kit PCB Layout-Inner Layer 2 (Ground Layer)

MAX2837 EV Kit PCB Layout-Component Side

<!-- image -->

MAX2837 EV Kit PCB Layout-Inner Layer 3 (Routes)

<!-- image -->

## MAX2837 EV Kit PCB Layout Diagrams (continued)

MAX2837 EV Kit PCB Layout-Inner Layer 2 (Ground Layer)

<!-- image -->

MAX2837 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

## MAX2837 EV Kit Schematic

MAX2837 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

## MAX2837 EV Kit Schematic (continued)

MAX2837 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX2837EVKIT+ | EV Kit |

+ Denotes a lead-free and RoHS-compliant EV kit.

Evaluates: MAX2837

## MAX2837 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                               | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------|-----------------|
|                 0 | 8/07            | Initial release                           | -               |
|                 1 | 11/14           | Updated Quick Start section               | 3               |
|                 2 | 1/16            | General improvements to EV kit data sheet | 1-4             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-462, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX2837