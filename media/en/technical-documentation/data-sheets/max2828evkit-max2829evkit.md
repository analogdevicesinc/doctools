<!-- lastmod 2022-08-04 -->
## MAX2828/MAX2829 Evaluation Kits

## General Description

The  MAX2828/MAX2829  evaluation  kits  (EV  kits)  simplify the testing of the MAX2828/MAX2829. The EV kits provide 50Ω SMA connectors for all RF and baseband inputs and outputs.  Differential-to-single-ended  and  single-ended-todifferential line drivers are provided to convert the differential I/Q baseband inputs and outputs of the MAX2828/MAX2829 to single-ended ports.

The EV kits simplify evaluation of the receive and transmit performance in the corresponding 802.11x bands.

## Features

- ●● On-Board Line Drivers and Voltage Reference
- ●● 50Ω SMA and BNC Connectors on All RF and Baseband Ports
- ●● PC Control Software Available at www.maximintegrated.com
- ●● 3-Wire Serial Interface

## Quick Start

Each EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section to test the devices.

## Test Equipment Required

This  section  lists  the  recommended  test  equipment  to verify  the  operation  of  the  MAX2828/MAX2829.  It  is intended  as  a  guide  only,  and  substitutions  may  be possible.

- ●● MAX2828/MAX2829 EV Kit
- ●● INTF3000+ Interface Board
- ●● DC supply capable of delivering +5.0V and 200mA of continuous current
- ●● DC supply capable of delivering -5.0V and 200mA of continuous current
- ●● DC supply capable of delivering +3.6V and 300mA of continuous current
- ●● HP 8663A or equivalent low-noise signal source capable of generating a 20MHz or 40MHz reference oscillator signal
- ●● One HP 8648s or equivalent signal sources capable of generating 0dBm CW up to 6GHz
- 802.11x CW I/Q waveform generator (optional)

Evaluate: MAX2828/MAX2829

- ●● HP 8561E or equivalent RF spectrum analyzer with a minimum 100kHz to 6GHz frequency range
- ●● TDS3012 or equivalent oscilloscope with 200MHz bandwidth
- ●● PC, laptop, or tablet with Microsoft Windows XP ® , Windows 7, 8 OS and a spare USB port
- ●● USB-A male to USB-B male cable

## Connections and Setup

This section provides step-by-step instructions for getting the EV kits up and running in all modes (see Figure 1 for EV kit connections):

- 1)  Connect the PC to the INTF3000 interface board using the  USB  cable.  On  INTF3000,  remove  jumper  JU1 and  connect  a  DC  supply  set  to  2.7V  to  the  VPULL connector. Connect the 25-pin connector of the INTF3000 (J4) directly to the 25-pin connector on the EV kit (J18).
- 2)  With  the  power  supply  turned  off,  connect  a  +2.7V power supply to the header labeled VCC (J13). Connect the  power-supply  ground  to  the  header  labeled  GND (J12).
- 3)  With the power supply turned off, connect a +5V power supply  to  the  header  labeled  +5V  (J16),  and  a  -5V power supply to the header labeled -5V (J14). Connect the  power-supply  ground  to  the  header  labeled  GND (J15).
- 4)  Connect the low-noise signal source to FREF (J9).
- 5)  Turn  on  the  +5V  and  -5V  power  supplies,  followed by the +2.7V power supply. Set the low-noise signal source to 40MHz and 2dBm. Enable the signal source. The lock indicator should be green.
- 6)  Install and run the MAX2828/MAX2829 control software HERE .

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

<!-- image -->

## MAX2828/MAX2829 Evaluation Kits

## Receive Mode

To evaluate the devices in receive mode with CW signal:

- 1)  Set the RXON jumper (JP22) to the ON position and the TXON jumper (JP21) to the OFF position. The supply current should be approximately 125mA.
- 2)  Connect  the  RF  signal  source  to  either  RXRFL  (J4) for  802.11g  frequencies  or  RXRFH  (J3)  for  802.11a frequencies.  Set  the  RF  frequency  to  2437MHz  or 5.25GHz. Set the signal power to -100dBm.
- 3)  Set  the  register  setting  to  the  default  values  listed in  the  MAX2828/MAX2829  data  sheet  by  selecting 'Evaluation Defaults' from the Setup dropdown menu.
- 4)  Use  the  software  to  select  between  802.11g  and 802.11a modes. In the program, set the frequency to either 2442MHz (802.11g) or 5.255GHz (802.11a).
- 5)  Set the RX gain to maximum using either the slider bar or the control bits.
- 6)  Connect  the  spectrum  analyzer  to  either  RXBBI  or RXBBQ.  Set  the  center  frequency  to  5MHz  with  a 1MHz span. Other recommended spectrum analyzer settings are: Res BW of 1kHz and Ref Level of 10dB.
- 7)  Turn  on  the  RF  signal  source.  The  output  at  5MHz should be approximately -6dBm (for 802.11g frequencies) or -2dBm (for 802.11a frequencies).

## Transmit Mode

To evaluate the devices in transmit mode with CW signal:

- 1)  Set the TXON jumper (JP21) to the ON position and the  RXON  jumper  (JP22)  to  the  OFF  position.  The supply current should be approximately 130mA.
- 2)  Connect a 1MHz sinusoid to TXBBI and a 1MHz sinusoid with a 90° phase shift (or a cosine) to TXBBQ. Set the input amplitude of each channel to 100mV RMS .
- 3)  Set  the  register  setting  to  the  default  values  listed in  the  MAX2828/MAX2829  data  sheet  by  selecting 'Evaluation Defaults' from the Setup dropdown menu.
- 4)  Use  the  software  to  select  between  802.11g  and 802.11a modes. In the program, set the frequency to either 2437MHz or 5.25GHz.
- 5)  Set the TX gain to maximum using either the slider bar or the control bits. Keep the TX Baseband gain to its default value.
- 6)  Connect the spectrum analyzer to either TXRFL (J1) (for  802.11g)  or  TXRFH  (J2)  (for  802.11a).  Set  the center frequency to either 2438MHz or 5251MHz and span to 1MHz. Other recommended spectrum analyzer settings are: Res BW of 3kHz, attenuation of 6dB, and Ref Level of 0dB.
- 7)  Turn  on  the  baseband  signal  sources. The  output  at 2438MHz should be approximately -3dBm (for 802.11g frequencies)  or  the  output  at  5251MHz  should  be approximately -5.5dBm (for 802.11a frequencies).

Evaluate: MAX2828/MAX2829

Note: CW  signals  can  be  replaced  by  modulated 802.11a/b/g signals.

## Table 1. Jumper Functions

| JUMPER   | STATE   | FUNCTION                                                                                                    |
|----------|---------|-------------------------------------------------------------------------------------------------------------|
| JP21     | ON      | Enables transmit mode. Placing the jumper toward the DB25 connector (J18) puts the device in transmit mode. |
| JP22     | ON      | Enables receive mode. Placing the jumper toward the DB25 connector (J18) puts the device in receive mode.   |

## Table 2. Test Points

| TP   | DESCRIPTION                                                       |
|------|-------------------------------------------------------------------|
| TP1  | This pin allows for direct injection or monitoring of pin TXBBI+. |
| TP2  | This pin allows for direct injection or monitoring of pin TXBBI-. |
| TP3  | This pin allows for direct injection or monitoring of pin RXBBI+. |
| TP4  | This pin allows for direct injection or monitoring of pin RXBBI-. |
| TP6  | This pin allows for direct injection or monitoring of pin TXBBQ+. |
| TP7  | This pin allows for direct injection or monitoring of pin TXBBQ-. |
| TP10 | This pin allows for monitoring of the VCO tune voltage.           |
| TP11 | This pin allows for direct injection or monitoring of pin RXBBQ+. |
| TP12 | This pin allows for direct injection or monitoring of pin RXBBQ-. |
| TP13 | This pin allows for monitoring of pin B3.                         |
| TP14 | This pin allows for monitoring of pin B4.                         |
| TP15 | This pin allows for monitoring of pin B2.                         |
| TP16 | This pin allows for monitoring of pin B5.                         |
| TP17 | This pin allows for monitoring of pin SHDN .                      |
| TP18 | This pin allows for monitoring of pin B1.                         |
| TP19 | This pin allows for monitoring of pin B6.                         |
| TP20 | This pin allows for monitoring of pin TXENA.                      |
| TP21 | This pin allows for monitoring of pin RXENA.                      |
| TP22 | This pin allows for monitoring of pin RXHP.                       |
| TP23 | This pin allows for monitoring of pin B7.                         |

## MAX2828/MAX2829 Evaluation Kits

## Layout Considerations

The EV kits can be used as a starting point for layout. For best  performance,  take  into  consideration  grounding  and RF, baseband, and power-supply routing. Make connections from vias to the ground plane as short as possible. On the high-impedance ports, keep traces short to minimize shunt capacitance. EV kit Gerber files can be requested at www. maximintegrated.com .

## Evaluate: MAX2828/MAX2829

## Power-Supply Layout

To  minimize  coupling  between  different  sections  of  the IC, a star power-supply routing configuration with a large decoupling capacitor at a central V CC node is recommended. The V CC  traces branch out from this node, each going to a separate V CC  node in the circuit. Place a bypass capacitor as close to each supply pin as possible. This arrangement provides local decoupling at each V CC pin. Use at least one throughput per bypass capacitor for a  low-inductance  ground  connection.  Do  not  share  the capacitor ground vias with any other branch.

## Matching Network Layout

The  layout  of  a  matching  network  is  very  sensitive  to parasitic circuit elements. To minimize parasitic inductance, keep all traces short and place components as close to the IC as possible.

Figure 1. MAX2828/MAX2829 EV Kit Connections

<!-- image -->

## MAX2828/MAX2829

## Evaluation Kits

## Table 3. I/O Connectors

| SIGNAL   | DESCRIPTION                                     |
|----------|-------------------------------------------------|
| J1       | 802.11b/g Transmitter Output (2.4GHz to 2.5GHz) |
| J2       | 802.11a Transmitter Output (4.9GHz to 5.875GHz) |
| J3       | 802.11a Receiver Input (4.9GHz to 5.875GHz)     |
| J4       | 802.11b/g Receiver Input (2.4GHz to 2.5GHz)     |
| J5       | Single-Ended Transmitter Baseband I Input       |
| J6       | Single-Ended Receiver Baseband I Output         |
| J7       | Single-Ended Transmitter Baseband Q Input       |
| J8       | Single-Ended Receiver Baseband Q Output         |
| J12      | Ground                                          |
| J13      | +2.7V Supply Input                              |
| J14      | +5V Supply Input                                |
| J15      | Ground                                          |
| J16      | -5V Supply Input                                |
| J18      | SPI Interface Connector                         |

## Component Suppliers

| SUPPLIER               | WEBSITE                   |
|------------------------|---------------------------|
| AVX North America      | www.avx.com               |
| Digi-Key Corp.         | www.digikey.com           |
| Johnson Components     | www.johnsoncomponents.com |
| Murata Americas        | www.murata.com            |
| Texas Instruments Inc. | www.ti.com                |

Note: Indicate that you are using the MAX2828/MAX2829 when contacting these component suppliers.

## Component Information, PCB Layout, and Schematic

See the following links  for  component  information,  PCB layout diagrams, and schematic.

- ●● MAX2828/MAX2829 EV BOM
- ●● MAX2828/MAX2829 EV PCB Layout
- ●● MAX2828/MAX2829 EV Schematic

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX2828 EVKIT | EV Kit |
| MAX2829 EVKIT | EV Kit |

Evaluate: MAX2828/MAX2829

## MAX2828/MAX2829

## Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                    | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 10/04           | Initial release                                                                                | -               |
|                 1 | 11/14           | Updated Quick Start section                                                                    | 2               |
|                 2 | 8/15            | Updated the Quick Start section, added Figure 1                                                | 2-4             |
|                 3 | 12/15           | EV kit updated to reflect conversion to INTF3000 interface board/USB cable from parallel cable | 1-5             |
|                 4 | 1/16            | Syntax errors corrected                                                                        | 1, 2, 4         |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluate: MAX2828/MAX2829

| DESIGNATION                                                                                           |   QTY | DESCRIPTION                                                             |
|-------------------------------------------------------------------------------------------------------|-------|-------------------------------------------------------------------------|
| C1                                                                                                    |     1 | 0.5pF ±0.1pF 0402 capacitor Murata GRM1555C1HR50B                       |
| C2                                                                                                    |     1 | 8.2pF ±0.1pF 0402 capacitor Murata GRM1555C1H8R2B                       |
| C3, C66                                                                                               |     2 | 1.0μF ±10% 0402 capacitors Murata GRM155R60J105K                        |
| C4                                                                                                    |     1 | 1.0pF ±0.1pF 0402 capacitor Murata GJM1555C1H1R0B                       |
| C5, C7, C10, C11, C17, C18, C21, C22, C29, C35, C37, C40, C42, C43, C45, C46, C50, C52, C54, C59, C60 |    21 | 0.1μF ± 10% 0402 capacitors Murata GRM1555R61A104K                      |
| C6, C9, C16, C19, C20, C23-C28, C30, C32, C36, C38, C41, C56, C57, C58                                |    19 | 0.01μF ±10% 0402 capacitors Murata GRM155R71C103K                       |
| C12, C13                                                                                              |     2 | 1.8pF ±0.1pF 0402 capacitors Murata GRM1555C1H1R8B                      |
| C14, C15                                                                                              |     2 | 1.2pF ±0.1pF 0402 capacitors Murata GJM1555C1H1R2B                      |
| C33                                                                                                   |     1 | 560pF ±5% 0402 capacitor Murata GRM1555C1H561J                          |
| C34                                                                                                   |     1 | 150pF ±5% 0402 capacitor Murata GRM1555C1H151J                          |
| C39, C51, C53, C55                                                                                    |     4 | 10μF ±20% tantalum capacitors-R case AVX TAJR106M006R                   |
| C47                                                                                                   |     1 | 100pF ±5% 0402 capacitor Murata GRM1555C1H101J                          |
| C65                                                                                                   |     1 | 0.5pF ±0.1pF 0201 capacitor Murata GJM0335C1ER50B                       |
| J1-J9                                                                                                 |     9 | Connectors-SMA end-launch jack receptacles 0.062in Johnson 142-0701-801 |
| J12-J16, TP1-TP8, TP10-TP23                                                                           |    27 | Test points 5000K-ND                                                    |
| J18                                                                                                   |     1 | Connector DB25-right angle, male AMP 747238-4                           |
| JP21, JP22                                                                                            |     2 | 1 x 3 headers, 3-pin in-line headers, 100 mils Sullins S1012-36-ND      |
| L1                                                                                                    |     1 | 6.8nH ±5% 0402 inductor Murata LQG15HN6N8J00                            |
| L2                                                                                                    |     1 | 2.0nH ±0.2nH 0201 inductor Murata LQP03TN2N0C00                         |
| L6                                                                                                    |     1 | 3.6nH ±0.2nH 0402 inductor Murata LQP15MN3N6C00                         |
| L7                                                                                                    |     1 | 1.8nH ±0.1nH 0402 inductor Murata LQP15MN1N8B02                         |
| R1, R2, R6, R10, R16, R17, R22, R27                                                                   |     8 | 75Ω ±1% 0402 resistors                                                  |
| R3, R7, R18, R23, R25                                                                                 |     5 | 10kΩ ± 1% 0402 resistors                                                |
| R4, R5, R21, R26                                                                                      |     4 |                                                                         |
| R8, R9, R12, R13, R19, R28, R29, R31, R32, R36, R42, R44                                              |    12 | 0Ω ±1% 0402 resistors                                                   |
| R14                                                                                                   |     1 | 267Ω ±1% 0402 resistor                                                  |
| R15                                                                                                   |     1 | 11kΩ ±1% 0402 resistor                                                  |
| R20                                                                                                   |     1 | 620Ω ± 0.01 0402 resistor                                               |
| R24                                                                                                   |     1 | 300Ω ±0.01 0402 resistor                                                |
| R34, R37                                                                                              |     2 | 100kΩ ±1% 0402 resistors                                                |
| R39-R41                                                                                               |     3 | 100Ω ±1% 0402 resistors                                                 |
| R43                                                                                                   |     1 | 1kΩ ±1% 0402 resistor                                                   |
| T1                                                                                                    |     1 | HHM1711D1 balun TDK HHM1711D1                                           |
| T2                                                                                                    |     1 | HHM1732B1 balun TDK HHM1732B1                                           |
| U1, U5                                                                                                |     2 | Maxim MAX4447ESE                                                        |
| U2, U6                                                                                                |     2 | Maxim MAX4444ESE                                                        |
| U3                                                                                                    |     1 | Maxim MAX6061BEUR                                                       |
| U4                                                                                                    |     1 | Maxim MAX2828ETN, MAX2829ETN                                            |
| U8, U9                                                                                                |     2 | TI SN74LVTH244ADBR                                                      |
| -                                                                                                     |     1 | PCB: MAX2828/9 EVALUATION KIT                                           |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

ど

<!-- image -->