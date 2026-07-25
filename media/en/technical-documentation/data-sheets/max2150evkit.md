<!-- lastmod 2022-08-02 -->
## MAX2150 Evaluation Kit

## General Description

The MAX2150 evaluation kit (EV kit) simplifies testing of the MAX2150 complete wideband I/Q modulator chip. The kit  allows  evaluation  of  the  I/Q  modulator,  synthesizer, 3-wire  programming  interface,  and  power-management features. The EV kit provides 50Ω connectors for all signal inputs and outputs.

## Component Suppliers

| SUPPLIERS       | WEBSITE                |
|-----------------|------------------------|
| AVX Corp.       | www.avxcorp.com        |
| Coilcraft, Inc. | www.coilcraft.com      |
| Murata Americas | www.murataamericas.com |

## Component List

| DESIGNATION                                             |   QTY | DESCRIPTION                                         |
|---------------------------------------------------------|-------|-----------------------------------------------------|
| BUFEN                                                   |     1 | 3-pin header, 100 mil centers Digi-Key S1012-36-ND  |
| C1-C3, C12, C18, C28, C30, C31, C34, C36, C37, C50, C52 |    13 | 0.1µF ±10% capacitors (0603) Murata GRM188R71C104K  |
| C4, C9-C11, C13, C35                                    |     6 | 100pF ±5% capacitors (0402) Murata GRP1555C1H101J   |
| C5, C6, C7, C15, C16                                    |     5 | Open                                                |
| C8                                                      |     1 | 22pF ±5% capacitor (0402) Murata GRP1555C1H220J     |
| C14, C17                                                |     2 | 100pF ±5% capacitors (0603) Murata GRM1885C1H101J   |
| C19-C21, C32, C33                                       |     5 | 0.1µF ±10% capacitors (0402) Murata GRP155R61A104K  |
| C22                                                     |     1 | 6800pF ±10% capacitor (0402) Murata GRP155R71E682K  |
| C23                                                     |     1 | 0.068µF ±10% capacitor (0402) Murata GRP155R61A683K |

## Features

- 3-Wire Interface
- Differential Baseband Inputs
- 2.7V to 3.6V Single-Supply Operation
- 50Ω Connectors on All Signal Ports
- Low-Power Shutdown Mode
- PC Control Software (Available at www.maximintegrated.com )

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| MAX2150EVKIT | EV Kit |

| DESIGNATION                           |   QTY | DESCRIPTION                                                                       |
|---------------------------------------|-------|-----------------------------------------------------------------------------------|
| C24                                   |     1 | 680pF ±10% capacitor (0402) Murata GRP155R71H681K                                 |
| C25                                   |     1 | 1µF ±10% tantalum capacitor, case A AVX TAJA105K016                               |
| C26                                   |     1 | 470pF ±10% capacitor (0402) Murata GRP155R71H471K                                 |
| C27                                   |     1 | 1.0µF ±10% capacitor (0603) Murata GRM188R60J105K                                 |
| DCIN, EN                              |     2 | Test points Digi-Key 5000-ND                                                      |
| J1, J3                                |     2 | 50Ω BNC connectors, 31 series, Amphenol Allied Electronics 31-5329-52RFX 713-9041 |
| J5-J7, J11, J16, J17, J19, J20, VCCSD |     9 | 2-pin headers, 100 mil centers Digi-Key S1012-36-ND                               |
| J8, J13-J15, J18 (Note 1)             |     5 | SMAconnectors, edge mount EFJohnson 142-0701-801                                  |
| J10                                   |     1 | 10-pin header Digi-Key S2012-36-ND                                                |

<!-- image -->

Evaluates: MAX2150

## MAX2150 Evaluation Kit

## Component List (continued)

Note 1: Cut center pin to approximately 1/16in long.

| DESIGNATION            |   QTY | DESCRIPTION                              |
|------------------------|-------|------------------------------------------|
| J19, J20, BUFEN, VCCSD |     4 | Shunt-shorting jumpers Digi-Key S9000-ND |
| L1                     |     0 | Not installed, inductor                  |
| R1-R4, R29, R35        |     0 | Not installed, resistors                 |
| R12                    |     1 | 0Ω ±5% resistor (0402)                   |
| R13, R18               |     2 | 0Ω ±5% resistors (0603)                  |
| R23                    |     1 | 245Ω ±5% resistor (0402)                 |
| R24, R25               |     2 | 1.1kΩ ±1% resistors (0402)               |
| R31-R34                |     4 | 3.3kΩ ±5% resistors (0603)               |

Note 2: This IC has an exposed pad. It must be solder attached to the circuit board to ensure proper function.

## Connector Descriptions

| CONNECTOR   | NAME     | DESCRIPTION                       | DC VOLTAGE RANGE   |
|-------------|----------|-----------------------------------|--------------------|
| J1, J3      | I, Q     | I/Q baseband input BNC connectors | -                  |
| J5, J19     | VCCVCO   | V CC to on-board VCO              | 2.7V ~ 3.6V        |
| J6          | VCC      | Supply voltage                    | 2.7V ~ 3.6V        |
| J7, J11     | GND      | Ground                            | -                  |
| J8          | RFOUT    | RF output (SMA)                   | -                  |
| J10         | -        | Interface connection              | 2.7V ~ 3.6V        |
| J13         | BUFOUT   | Buffer output (SMA)               | -                  |
| J14, J15    | LO       | External LO input (SMA)           | -                  |
| J16, J17    | N.C.     | No connection                     | -                  |
| J18         | REFL IN  | Reference input (SMA)             | -                  |
| J20         | LOCK     | Lock signal output                | -                  |
| -           | BUFEN    | Buffer enable                     | -                  |
| -           | DCIN     | Bias voltage input                | 1.6V               |
| -           | EN       | Enable pin input                  | -                  |
| -           | TUNE_OUT | Tuning voltage output             | -                  |
| -           | VCCSD    | V CC to sigma-delta modulator     | 2.7V ~ 3.6V        |

Evaluates: MAX2150

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| U1 (Note 2)   |     1 | Wideband I/Q modulator (28 TQFN) Maxim MAX2150ETI+                   |
| U2            |     1 | VCO Fujitsu VC-3R0A23-0967/1750B                                     |
| VTUNE_OUT     |     1 | SMAconnectors, PC mount EFJohnson 142-0701-201                       |
| Y1            |     1 | 20MHz surface-mount crystal CTS Reeves Digi-Key ATS200SM CTX515TR-ND |
| -             |     1 | PCB: MAX2150 EVALUATION KIT Rev 3                                    |

## Quick Start

The  MAX2150  EV  kit  is  fully  assembled  and  factory tested.  Follow  the  instructions  in  the Connections  and Setup section.

## Test Equipment Required

This  section  lists  the  recommended  test  equipment  to verify the operation of the MAX2150. It is intended as a guide only, and substitutions are possible.

- MAX2150 EV kit
- One RF signal generator capable of delivering -7dBm of  output  power  in  the  10MHz  to  50MHz  frequency range (HP 8648A or equivalent) for the PLL reference frequency
- RF  spectrum  analyzer  capable  of  measuring  up to  7GHz  RF  signal  (Rohde  &amp;  Schwarz  FSEA20  or equivalent)
- RF power meter capable of measuring up to +10dBm output  power  (HP  437B  or  equivalent)  with  an  RF sensor
- RF network analyzer
- Oscilloscope
- Two power supplies that can provide 250mA at +5.0V (AG E3631A or equivalent)
- Arbitrary waveform generator (HP E4433B or equivalent)
- PC  laptop  or  tablet  with  Microsoft  Windows  XP ® , Windows ® 7, 8 OS and a USB port
- USB-A male to USB-B male cable
- US keyboard

## Connections and Setup

This section provides step-by-step instructions for getting the EV kit up and running in all operation modes.

- 1) Verify that jumpers are in place.
- 2) Connect  the  PC  to  the  INTF3000  interface  board using  the  USB-A  male  to  USB-B  male  cable.  On INTF3000,  remove  jumper  JU1  and  connect  a  DC supply set to +3V to the VPULL connector. Connect a 20-pin ribbon cable between the INTF3000 board (J3\_INTF2300) and the EV kit (J10), keeping the pin 1 to pin 1 connections.
- 3) Set the power supply to +3V and turn it off.

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

- 4) Set the adjustable power supply to +1.6V and turn it off.
- 5) Connect the ground terminal to GND.
- 6) Connect the positive +3V terminal to VCC and VCCVCO.
- 7) Connect  the  positive  terminal  of  the  adjustable power supply to pin DCIN on the board.
- 8) Set the I/Q generator to 330kHz, with an input level of 1V P-P . Leave the I/Q generator output off.
- 9) Using  2  BNC  cables,  connect  the  output  of  the I/Q  generator  to  the  I/Q  input  connectors  on  the MAX2150 EV kit board.
- 10) Use  an  SMA  cable  to  connect  the  RFOUT  to  the input of the spectrum analyzer.
- 11) Set the spectrum analyzer to view the output.
- 12) Turn on all power supplies and enable I/Q signal generator.
- 13) Measure the supply current level.
- 14) Observe the RF output frequency as displayed on the spectrum analyzer. Measure the RF output power.
- 15) The  RF  output  power  should  be  approximately -4dBm after accounting for cable and connector loss.

## Adjustments and Control

## Operation Modes

- 1)  TX mode
- 2)  SYNTH mode
- 3)  MOD mode
- 4)  Software shutdown mode
- 5)  Hardware shutdown mode

Refer to the MAX2150 data sheet for details.

## Layout Issues

A  good  PCB  is  an  essential  part  of  an  RF  circuit design.  The  EV  kit  PCB  can  serve  as  a  guide  for  lay -ing  out  a  board  using  the  MAX2150.  Keep  traces carrying  RF  signals  as  short  as  possible  to  minimize radiation  and  insertion  loss.  Use  impedance  control  on all  RF signal traces. The VCC node on the PCB should have decoupling capacitors to the closest ground. Refer to the Layout section of the MAX2150 data sheet for more information.

Figure 1. MAX2150 EV Kit Schematic

<!-- image -->

Evaluates: MAX2150

Figure 2. MAX2150 EV Kit Primary-Side Silkscreen

<!-- image -->

Evaluates: MAX2150

Figure 3. MAX2150 EV Kit Secondary-Side Silkscreen

<!-- image -->

Figure 4. MAX2150 EV Kit PCB Layout-Layer 2

<!-- image -->

Figure 6. MAX2150 EV Kit Primary Component Side

<!-- image -->

## Evaluates: MAX2150

Figure 5. MAX2150 EV Kit PCB Layout-Layer 3

<!-- image -->

Figure 7. MAX2150 EV Kit Secondary Side

<!-- image -->

## MAX2150 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                  | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------|-----------------|
|                 0 | 8/02            | Initial release                                              | -               |
|                 1 | 11/14           | Updated Quick Start section and added Revision History table | 2, 8            |
|                 2 | 6/15            | Updated Component List                                       | 2               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX2150