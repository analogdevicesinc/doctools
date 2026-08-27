<!-- lastmod 2022-08-02 -->
## MAX2831 Evaluation Kit

## General Description

The  MAX2831  evaluation  kit  (EV  kit)  simplifies  testing of  the  MAX2831  receive  and  transmit  performance  in 802.11g/b applications operating in the 2.4GHz to 2.5GHz ISM band. The EV kit provides 50Ω SMA connectors for all  RF  and  baseband inputs and outputs. Differential-tosingle-ended and single-ended-to-differential line  drivers are  provided  to  convert  the  differential  I/Q  baseband inputs and outputs to single ended.

## Features

- On-Board Line Driver and Voltage Reference
- 50Ω SMA Connectors on All RF and Baseband Ports
- PC Control Software Available at www.maximintegrated.com

## Quick Start

The MAX2831 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section to test the devices.

## Test Equipment Required

This  section  lists  the  recommended  test  equipment  to verify the operation of the MAX2831. It is intended as a guide only and substitutions may be possible:

- MAX2831 EV kit
- INTF3000+ interface board
- DC supply capable of delivering +5V and 200mA of continuous current
- DC supply capable of delivering -5V and 200mA of continuous current
- DC supply capable of delivering +3.3V and 300mA of continuous current
- DC supply capable of delivering +2.85V and 200mA of continuous current
- One HP8648s or equivalent signal sources capable of generating 0dBm up to 3GHz
- 802.11b/g CW I/Q waveform generator
- HP8561E or equivalent RF spectrum analyzer with a minimum 100kHz to 3GHz frequency range
- TDS3012 or equivalent oscilloscope with 200MHz bandwidth
- PC laptop or tablet with Microsoft Windows XP ® , Windows ®  7, 8 OS and a USB port
- USB-A male to USB-B male cable

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX2831

## Connections and Setup

This  section  provides  step-by-step  instructions  for  getting the EV kit up and running in all modes (see Figure 1 for EV kit connections):

- 1)  Connect the PC to the INTF3000 interface board using the  USB-A male to USB-B male cable. On INTF3000, remove jumper JU1 and connect a DC supply set to 3.3V to the V PULL  connector. Connect the 25-pin connector of the INTF3000 (J4) directly to the 25-pin connector on the EV kit (J18).
- 2)  With  the  power  supply  turned  off,  connect  a  +2.85V power supply to V REG (pin 1), VCCAUX, and a +3.3V power  supply  to  V BAT .  Connect  the  power-supply ground to the header labeled GND1 or GND2.
- 3)  With the power supply turned off, connect a +5V power supply to the +5V test point and a -5V power supply to the  -5V  test  point.  Connect  the  power-supply  ground  to the  header  labeled  GND1  or  GND2.  Connect  all  the power-supply grounds together.
- 4)  Make  sure  the  jumpers  are  installed  in  their  default positions as shown in Figure 1.
- 5)  Turn  on  the  +3.3V  power  supply,  followed  by  the +2.85V  power  supply,  +5V  power  supply,  and  -5V power supply.
- 6)  Install and run the MAX2831  control software, available for download here .

## Receive Mode

- 1)  Set the RXTX jumper across pins 2-3 (RX) to enable the receiver  and  disable  the  transmitter.  Set  the ANTSEL jumper to its default position 2-3  (ANT1).
- 2)  Set the signal generator to accurately deliver -100dBm at  2438MHz,  at  the  SMA  port  (ANT1/RXRF)  of MAX2831. Connect the output of signal generator to RXRF port of MAX2831.
- 3)  On the Registers page of the EV kit software, set the register  values  to  the  recommended  setting  in  the MAX2831  data  sheet  by  clicking  the  "Defaults"  and 'Send All' buttons.
- 4)  On the Entry page, confirm that the "Receive Mode" is set to 'normal,' "Baseband Filter Mode  Control" is set to 'RX,' and the "RF frequency" is tuned to 2437MHz. Maximize the RX LNA and RX VGA Gain.
- 5)  Connect  the  spectrum  analyzer  to  either  RXBBI  or RXBBQ. Set the center frequency to 1MHz with a span

<!-- image -->

of  500kHz.  Other  recommended  spectrum  analyzer settings are: Res BW of 1kHz and Ref Level of 10dB.

- 6)  Turn on the RF signal source. The supply current draw should be approximately 70mA. The output CW tone at 1MHz should be approximately -2dBm.

## Transmit Mode

- 1)  Set the RXTX jumper across pins 1-2 (TX) to enable the  transmitter  and  disable  the  receiver.  Keep  the ANTSEL jumper at its default position 2-3 (ANT1).
- 2)  Connect TXRF port to the spectrum analyzer. Set the center  frequency  of  spectrum  analyzer  to  2437MHz and  span  to  10MHz.  Other  recommended  spectrum analyzer settings are: Res BW of 3kHz, Attenuation of 30dB and Ref Level of 22dB.
- 3)  Connect a 1MHz sinusoid to TXBBI and a 1MHz sinusoid with a 90° phase shift (or a cosine) to TXBBQ. Set the input amplitude of each channel to 100mV RMS .
- 4)  On the Registers page of the EV kit software, set the register values to the recommended register setting listed in the MAX2831 data sheet by clicking the "Defaults" and "Send All" buttons.
- 5)  On  the  Entry  page,  make  sure  that  the  "Transmitter Mode"  is  set  to  'normal,'  "Baseband  Filter  Mode Control"  is  set  to  'TX,'  and  the  "RF  Frequency"  is tuned to 2437MHz. Set the TX gain to maximum using the "TX VGA Gain" sliding bar.
- 6)  Enable the output of the baseband signal sources. The supply current draw should be approximately 88mA.
- 7)  The  TX output power at 2438MHz  should be approximately  21dBm. The  LO  leakage  at  2437MHz should be -16dBm and unwanted sideband at 2436MHz should be -17dBm.

Note: CW signals can be replaced by modulated

802.11g/b signals.

Table 1. Jumper Functions

| JUMPER          | SETTING   | FUNCTION                                                                           |
|-----------------|-----------|------------------------------------------------------------------------------------|
| RXTX            | Pins 2-3  | Enable receive mode                                                                |
| RXTX            | Pins 1-2  | Enable transmit mode                                                               |
| ANTSEL          | Pins 2-3  | Default                                                                            |
| TXBBBUF/RXBBBUF | Pins 1-2  | Enables the buffers                                                                |
| TXBBBUF/RXBBBUF | Pins 2-3  | Disables the buffers                                                               |
| VREG            | Pins 1-2  | Short the jumper to provide voltage to the MAX2831 from the linear regulator (U10) |
| VCCVCO          | Pins 2-3  | Supply the V CCVCO from VREG                                                       |
| VCCVCO          | Pins 1-2  | Supply the V CCVCO from the linear regulator (U10)                                 |

│

Evaluates: MAX2831

## Layout Considerations

The EV kit can serve as a guide for board layout. Keep PCB  trace  lengths  as  short  as  possible  to  minimize parasitic inductance. Also, keep decoupling capacitors as close to the IC as possible with a direct connection to the ground plane.

## Power-Supply Layout

To minimize coupling between different sections of the IC, use a star power-supply routing configuration with a large decoupling  capacitor  at  a  central  V CC node.  The  V CC traces branch out from this node, each going to a separate V CC  node  in  the  circuit.  Place  a  bypass  capacitor  as close as possible to each supply pin. This arrangement provides local decoupling at each V CC pin. Use at least one throughput per bypass capacitor for a low-inductance ground  connection.  Do  not  share  the  capacitor  ground vias with any other branch.

## Evaluates: MAX2831

Figure 1. MAX2831 EV Kit Connections

<!-- image -->

│

## Component Suppliers

| SUPPLIER               | WEBSITE                   |
|------------------------|---------------------------|
| AVX Corp.              | www.avx.com               |
| Digi-Key Corp.         | www.digikey.com           |
| Johnson Components     | www.johnsoncomponents.com |
| Murata Americas        | www.murata.com            |
| Texas Instruments Inc. | www.ti.com                |

Note:

Indicate that you are using the MAX2831 when contacting these component suppliers.

## Component List, PCB Layout, and Schematic

- MAX2831 EV BOM
- MAX2831 EV PCB Layout
- MAX2831 EV Schematic

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX2831EVKIT+ | EV Kit |

+Denotes a lead(Pb)-free and RoHS-compliant EV kit.

│

Evaluates: MAX2831

## MAX2831 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------|-----------------|
|                 0 | 5/07            | Initial release                                                            | -               |
|                 1 | 11/14           | Updated Quick Start section                                                | 3               |
|                 2 | 11/15           | Added more detailed description for TX and RX sections and added Figure 1. | 1-4             |
|                 3 | 1/16            | Updated connectivity information of INTF3000 board                         | 1-3             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and speci¿cations without notice at any time.

Evaluates: MAX2831

| DESIGNATION                                                                                                                                                                                   | QTY   | DESCRIPTION                                                               |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|---------------------------------------------------------------------------|
| C1                                                                                                                                                                                            | 1     | 33pF ±5% capacitor (0402) Murata GRM1555C1H330J                           |
| C3, C16, C70, C79, C81, C89                                                                                                                                                                   | 6     | 100pF ±5% capacitors (0402) Murata GRM1555C1H101J                         |
| C4                                                                                                                                                                                            | 1     | 18pF ±5% capacitor (0402) Murata GRM1555C1H180J                           |
| C5, C7, C10, C11, C13, C17, C18, C21, C22, C29, C40, C42, C43, C45, C46, C50, C52, C54, C59, C60, C64, C67, C83, C86                                                                          | 24    | 100nF ±10% capacitors (0402) Murata GRM155R61A104K                        |
| C6, C9, C30, C41, C62, C73, C74, C75, C87, C88                                                                                                                                                | 10    | µF ±10% capacitors (0402) Murata GRM155R71C103K                           |
| C8, C44, C48, C49, C71, C72, C77                                                                                                                                                              | 0     | Not installed, capacitors                                                 |
| C12, C51, C53, C55, C63, C65, C66                                                                                                                                                             | 7     | 10µF ±20% tantalum capacitors (R-case) AVX TAJR106M006                    |
| C61                                                                                                                                                                                           | 1     | 10µF ±10% capacitor (1206) Murata GRM31CR60J106K                          |
| C68, C69                                                                                                                                                                                      | 2     | 1.5pF ±0.25pF capacitors (0402) Murata GRM1555C1H1R5C                     |
| C76                                                                                                                                                                                           | 1     | 1000pF ±10% capacitor (0402) Murata GRM155R71H102K                        |
| C78                                                                                                                                                                                           | 1     | 2200pF ±10% capacitor (0402) Murata GRM155R71H222K                        |
| C80                                                                                                                                                                                           | 1     | 68pF ±5% capacitor (0402) Murata GRM1555C1H680J                           |
| C82                                                                                                                                                                                           | 1     | 10µF ±10% capacitor (0805) Murata GRM21BR60J106K                          |
| J17                                                                                                                                                                                           | 0     | Not installed                                                             |
| J18                                                                                                                                                                                           | 1     | DB25 right-angle male connector AMP 5747238-4                             |
| JPB1-JPB4, JPB6, JPB7, JPCSB, JPDIN, JPLD, JPRXHP, JPSCLK, JPSHDNB                                                                                                                            | 0     | Not installed                                                             |
| L1, L2, L7                                                                                                                                                                                    | 0     | Not installed                                                             |
| LDO_IN, VREG                                                                                                                                                                                  | 2     | 1 x 2 headers Sullins PEC36SAAN                                           |
| R1, R2, R6, R10, R16, R17, R22, R27                                                                                                                                                           | 8     | 75Ω ±1% resistors (0402)                                                  |
| R3, R7, R18, R23                                                                                                                                                                              | 4     | 3.3kΩ ±5% resistors (0402)                                                |
| R4, R5, R21, R26                                                                                                                                                                              | 4     | 49.9Ω ±1% resistors (0402)                                                |
| R8, R9, R12, R13, R28, R29, R31, R32                                                                                                                                                          | 8     | 0Ω ±1% resistors (0402)                                                   |
| R11, R30, R38, R46, R50                                                                                                                                                                       | 0     | Not installed, resistors                                                  |
| R14                                                                                                                                                                                           | 1     | 270Ω ±5% resistor (0402)                                                  |
| R39, R45                                                                                                                                                                                      | 2     | 100Ω ±1% resistors (0402)                                                 |
| R43                                                                                                                                                                                           | 1 1   | 1kΩ ±1% resistor (0402) 1.2kΩ ±5% resistor (0402)                         |
| R51 R52                                                                                                                                                                                       | 1     | 750Ω ±5% resistor (0402)                                                  |
| R53                                                                                                                                                                                           | 1     | 10kΩ ±5% resistor (0402)                                                  |
| T1                                                                                                                                                                                            | 0     | Not installed                                                             |
| T2, T3                                                                                                                                                                                        | 2     | 2.4GHz RF baluns Murata LDB212G4010C-001                                  |
| U1, U5                                                                                                                                                                                        | 2     | Line drivers (16 SO) Maxim MAX4447ESE+                                    |
| U2, U6                                                                                                                                                                                        | 2     | Line receivers (16 SO) Maxim MAX4444ESE+                                  |
| U3                                                                                                                                                                                            | 1     | Low-dropout reference (3 SOT) Maxim MAX6061BEUR+                          |
| U4                                                                                                                                                                                            | 1     | Transceiver (48 TQFN) Maxim MAX2831ETM+                                   |
| U8, U9                                                                                                                                                                                        | 2     | SN74LVTH244ADB TI SN74LVTH244ADBR                                         |
| U10                                                                                                                                                                                           | 0     | Not installed (optional) Maxim MAX8882EUTJJ+                              |
| Y1                                                                                                                                                                                            | 1     | 40MHz crystal Kyocera CX3225SB40000H0WZK21                                |
| +5V, -5V, B1-B7, CSB, DIN, GND1, GND2, LD, RSSI, RXBBI+, RXBBI-, RXBBQ+, RXBBQ-, RXHP, SCLK, SHDNB, TPANTSEL, TPCLKOUT, TPRXTX, TPTUNE, TPTXCMIN, TXBBI+ TXBBI-, TXBBQ+, TXBBQ-, VBAT, VCCAUX | 33    | Test points Keystone 5000                                                 |
| CLKOUT, FREF, RXBBI, RXBBQ, RXRF, TXBBI, TXBBQ, TXRF VCCLNA, VCCPA1, VCCPA2,                                                                                                                  | 8     | SMA edge-mount connectors, round Johnson 142-0701-801                     |
| VCCPLL, VCCRXBB1, VCCRXBB2, VCCRXMX, VCCTXMX, VCCXTAL, VCC_DB, VCC_REF, VREG                                                                                                                  | 0     | Not installed                                                             |
| -                                                                                                                                                                                             | 6     | Shunts (ANTSEL, LDO_IN, RXBBBUF, RXTX, TXBBBUF, VCCVCO) Sullins SSC02SYAN |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->