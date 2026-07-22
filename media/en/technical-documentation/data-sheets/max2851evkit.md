<!-- lastmod 2022-08-02 -->
## MAX2851 Evaluation Kit

## General Description

The  MAX2851  evaluation  kit  (EV  kit)  simplifies  testing of  the  MAX2851  receive  and  transmit  performance  in 802.11a applications operating in the 4.9GHz to 5.9GHz ISM band. The EV kit provides 50Ω SMA connectors for all  RF  and baseband inputs and outputs. Differential-tosingle-ended and single-ended-to-differential line drivers are  provided  to  convert  the  differential  I/Q  baseband inputs and outputs to single-ended.

## Quick Start

The MAX2851 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section to test the device.

## Test Equipment Required

This  section  lists  the  recommended  test  equipment  to verify the operation of the MAX2851. It is intended as a guide only, with substitutions possible:

- MAX2851 EV kit
- INTF3000+ interface board
- 20 pin ribbon cable
- DC supply capable of delivering +5V and 200mA of continuous current
- DC supply capable of delivering -5V and 200mA of continuous current
- DC supply capable of delivering +2.85V and 500mA of continuous current
- One signal source capable of generating up to 6GHz
- 802.11a CW I/Q waveform generator or two Agilent 33120A, or equivalent, signal generators
- HP8561E or equivalent RF spectrum analyzer with a minimum 100kHz to 6GHz frequency range
- TDS3012 or equivalent oscilloscope with 200MHz bandwidth
- Agilent 33120A or equivalent digital multimeter
- PC laptop or tablet with Microsoft Windows XP®, Windows® 7, 8 OS and a USB port
- USB-A male to USB-B male cable

## Features

- On-Board Line Driver and Voltage Reference
- 50Ω SMA Connectors on All RF and Baseband Ports
- PC Control Software Available at www.maximintegrated.com

Ordering Information appears at end of data sheet.

## Connections and Setup

This section provides step-by-step instructions for getting the EV kit up and running in all modes:

- 1) Connect a 20 pin ribbon cable between the 20 pin connector (J2) on the MAX2851 EV kit and the INTF2400 connector (J1) on the INTF3000+ interface board. Make sure pin 1 on EV kit matches with pin 1 on INTF3000+ board.
- 2) Connect a USB cable between the INTF3000+ interface board and the PC with the MAX2851 control software.
- 3) Make sure JU1 on the INTF3000+ interface board is open with no jumper.
- 4) With the output disabled, connect a +2.85V supply to the V PULL header on the INTF3000+ interface board.
- 5) With the output disabled, connect the +5V supply to the +5V terminal (J7) on the MAX2851 EV Kit.
- 6) With the output disabled, connect the -5V supply to the -5V terminal (J9) on the MAX2851 EV Kit.
- 7) With the output disabled, connect a +2.85V supply to the V REG (J3) on the MAX2851 EV Kit.
- 8) Connect all the supply grounds together and to any of the GND terminals (J4, J6, J8, J10) on the MAX2851 EV Kit.
- 9) Turn on the +5V, -5V and +2.85V power supplies.
- 10) Connect a jumper between pin 1 and pin 2 of the RXBBBUF1 header.
- 11) Install and run the MAX2851 control software, available for download at HERE .
- 12) Note that the 'Lock' indicator goes red when the PLL is locked. Also, ignore the 'Board Not Connected!' message at the bottom of the GUI.

<!-- image -->

Evaluates: MAX2851

## MAX2851 Evaluation Kit

## Frequency Synthesizer Setup

- 1) All parameters related to frequency synthesis can be set under the 'Synth' page of the MAX2851 control software.
- 2) The 'Xtal Reference (MHz)' box enables user to enter the reference input frequency. Typical reference frequency is 40MHz, when using the on-board crystal.
- 3) The 'Xtal Tune' box enables user to fine tune the crystal frequency.
- 4) The 'LO Freq (MHz)' box allows user to enter the desired LO frequency. Enter 5350MHz as the operating frequency for testing purposes.

## Receiver Mode Setup

- 1) Set the signal generator to accurately deliver -70dBm at 5351MHz.
- 2) With the generator output disabled, connect the output of signal generator to one of the five receiver input ports (RXRF).
- 3) Connect the corresponding receiver baseband I/Q outputs (RXBBI and RXBBQ) to an oscilloscope.
- 4) On the 'Write' page of the MAX2851 control software, enter the receive register values shown in Table 1 into the Main and Local registers.
- 5) At the bottom of the MAX2851 control software, ensure the ENABLE PIN box is set to '1' and 'RX' is selected from the 'Mode' drop-down menu.
- 6) On the 'RX' page of the EV kit software, select the receiver being tested under 'MIMO PATH' and also select it under 'LNA &amp; VGA Gain by Receiver'' block.
- 7) Select the 5.3GHz~5.6GHz LNA band using the drop-down menu under 'LNA Band' box.
- 8) Use the 'RX LNA Gain' drop down menu to select '111 = Max Gain' and use the slider bar for 'RX VGA Gain' to set it to 'max gain'.
- 9) Click on the SEND ALL tab. At this time the supply current for +2.85V supply is around 144mA.
- 10) At this point, there should be two 1MHz signals on the oscilliscope with roughly 90° phase offset. Use the 'Xtal Tune' box to fine-tune to 1MHz, if needed.
- 11) Alternatively, connect the spectrum analyzer to either RXBBI or RXBBQ. Set the center frequency to 1MHz with a 500kHz span. Other recommended spectrum analyzer settings are: Res BW of 1kHz and Ref Level of 10dB.
- 12) The output baseband CW tone at 1MHz should be approximately 0dBm.
- 13) The sideband suppression can be optimized manually through SPI by 'RX LO IQ Calibration' value.

## Evaluates: MAX2851

## Transmitter Mode Setup

- 1) Connect the TXRF output to a spectrum analyzer. Set the frequency of spectrum analyzer to 5350MHz and span to 10MHz. Other recommended spectrum analyzer settings are: Res BW of 3kHz, Attenuation of 0dB and Ref Level of 0dB.
- 2) Connect a 1MHz sinusoid to TXBBI and a 1MHz sinusoid with a 90° phase shift (or a cosine) to TXBBQ. Set the input amplitude of each channel to 100mVRMS.
- 3) On the 'Write' page of the MAX2851 control software, enter the transmit register values shown in Table 2 into the Main and Local registers.
- 4) At the bottom of the MAX2851 control software, make sure the 'ENABLE PIN' box is set to 1 and 'TX' is selected from the 'Mode' drop-down menu.
- 5) On the 'TX' page of the EV kit software, using the 'VGA Settings' block shown in Figure 4, maximize the output power by setting 'Attenuation Entry' to 63.
- 6) Click on the SEND ALL tab. At this time the supply current for +2.85V supply is around 170mA.
- 7) Measure the voltage at the VCM header on the MAX2851 and adjust R79 to get around 0.9V to 1.1V.
- 8) On the spectrum analyzer, the transmit output power at 5349MHz should be around -4dBm.
- 9) The LO leakage at 5350MHz can be optimized manually via SPI by adjusting the offset values shown in the 'DC Offset Corr. I' and 'DC Offset Corr. Q' boxes.
- 10) The sideband suppression at 5351MHz can be optimized manually via SPI by adjusting the value in the 'TX LO I/Q Phase' box.

Table 1. Typical Receive Register Settings

| MAIN REGISTERS   | MAIN REGISTERS   | MAIN REGISTERS   | MAIN REGISTERS   | LOCAL REGISTERS   | LOCAL REGISTERS   | LOCAL REGISTERS   | LOCAL REGISTERS   |
|------------------|------------------|------------------|------------------|-------------------|-------------------|-------------------|-------------------|
| ADDRESS          | HEX VALUE        | ADDRESS          | HEX VALUE        | ADDRESS           | HEX VALUE         | ADDRESS           | HEX VALUE         |
| 0                | 1EB              | 16               | 380              | 0                 | -                 | 16                | 000               |
| 1                | 0EF              | 17               | 000              | 1                 | 000               | 17                | 000               |
| 2                | 1C0              | 18               | 080              | 2                 | 000               | 18                | 000               |
| 3                | 000              | 19               | 05F              | 3                 | 000               | 19                | 000               |
| 4                | 31C              | 20               | 1EA              | 4                 | 380               | 20                | 000               |
| 5                | 000              | 21               | 0BF              | 5                 | 000               | 21                | 000               |
| 6                | 3E1              | 22               | 1B8              | 6                 | 000               | 22                | 000               |
| 7                | 024              | 23               | 065              | 7                 | 000               | 23                | 000               |
| 8                | 000              | 24               | 24F              | 8                 | 1AA               | 24                | 0C4               |
| 9                | 3FF              | 25               | 3A8              | 9                 | 114               | 25                | 12B               |
| 10               | 000              | 26               | 015              | 10                | 354               | 26                | 165               |
| 11               | 060              | 27               | 180              | 11                | 073               | 27                | 002               |
| 12               | -                | 28               | 063              | 12                | 000               | 28                | 004               |
| 13               | 000              | 29               | 000              | 13                | 000               | 29                | -                 |
| 14               | 160              | 30               | 000              | 14                | 000               | 30                | -                 |
| 15               | 242              | 31               | 000              | 15                | 000               | 31                | 000               |

## Table 2. Typical Transmit Register Settings

| MAIN REGISTERS   | MAIN REGISTERS   | MAIN REGISTERS   | MAIN REGISTERS   | LOCAL REGISTERS   | LOCAL REGISTERS   | LOCAL REGISTERS   | LOCAL REGISTERS   |
|------------------|------------------|------------------|------------------|-------------------|-------------------|-------------------|-------------------|
| ADDRESS          | HEX VALUE        | ADDRESS          | HEX VALUE        | ADDRESS           | HEX VALUE         | ADDRESS           | HEX VALUE         |
| 0                | 02E              | 16               | 380              | 0                 | ---               | 16                | 000               |
| 1                | 0FF              | 17               | 000              | 1                 | 000               | 17                | 000               |
| 2                | 1C0              | 18               | 080              | 2                 | 000               | 18                | 000               |
| 3                | 000              | 19               | 05F              | 3                 | 000               | 19                | 000               |
| 4                | 31C              | 20               | 1EA              | 4                 | 380               | 20                | 000               |
| 5                | 000              | 21               | 0BF              | 5                 | 000               | 21                | 000               |
| 6                | 3EB              | 22               | 1B8              | 6                 | 000               | 22                | 000               |
| 7                | 024              | 23               | 065              | 7                 | 000               | 23                | 000               |
| 8                | 000              | 24               | 24F              | 8                 | 1AA               | 24                | 0C4               |
| 9                | 3FF              | 25               | 3A8              | 9                 | 114               | 25                | 12B               |
| 10               | 000              | 26               | 015              | 10                | 354               | 26                | 165               |
| 11               | 060              | 27               | 180              | 11                | 073               | 27                | 002               |
| 12               | -                | 28               | 063              | 12                | 000               | 28                | 004               |
| 13               | 000              | 29               | 000              | 13                | 000               | 29                | -                 |
| 14               | 160              | 30               | 000              | 14                | 000               | 30                | -                 |
| 15               | 242              | 31               | 000              | 15                | 000               | 31                | 000               |

Evaluates: MAX2851

Evaluates: MAX2851

Figure 1. MAX2851 Hardware Connections

<!-- image -->

Figure 2. MAX2851 Control Software-Frequency Synthesizer Page

<!-- image -->

Figure 3. MAX2851 Control Software-TX Page

<!-- image -->

Figure 4. MAX2851 Control Software-RX Page

<!-- image -->

## Component Suppliers

| SUPPLIER                             | WEBSITE                    |
|--------------------------------------|----------------------------|
| Kyocera                              | www.americas.kyocera.com   |
| Digi-Key                             | www.digikey.com            |
| National Semiconductor               | www.ni.com                 |
| Johnson/Cinch Connectivity Solutions | www.johnsoncomponents.com  |
| Johanson Technology                  | www.johansontechnology.com |
| Sullins Corp.                        | www.sullinscorp.com        |
| Keystone                             | www.keyelco.com            |

Note: Indicate that you are using the MAX2851 when contacting these component suppliers.

## Component Information, PCB Layout, and Schematic

See the following links for component information, PCB layout diagrams, and schematics.

- MAX2851 EV BOM
- MAX2851 EV PCB Layout
- MAX2851 EV Schematic

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX2851EVKIT+ | EV Kit |

Evaluates: MAX2851

## MAX2851 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-462, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX2851

| EVKit Part Number: MAX2851EVKIT+   | EVKit Part Number: MAX2851EVKIT+                                                                                                                                                 | EVKit Part Number: MAX2851EVKIT+   | EVKit Part Number: MAX2851EVKIT+   | EVKit Part Number: MAX2851EVKIT+   | EVKit Part Number: MAX2851EVKIT+   | EVKit Part Number: MAX2851EVKIT+   | EVKit Part Number: MAX2851EVKIT+   |
|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|
| Revision: F                        | Revision: F                                                                                                                                                                      | Revision: F                        | Revision: F                        | Revision: F                        | Revision: F                        | Revision: F                        | Revision: F                        |
| Date Last Edited: 6-18-13          | Date Last Edited: 6-18-13                                                                                                                                                        | Date Last Edited: 6-18-13          | Date Last Edited: 6-18-13          | Date Last Edited: 6-18-13          | Date Last Edited: 6-18-13          | Date Last Edited: 6-18-13          | Date Last Edited: 6-18-13          |
| Associated schematic: E            | Associated schematic: E                                                                                                                                                          | Associated schematic: E            | Associated schematic: E            | Associated schematic: E            | Associated schematic: E            | Associated schematic: E            | Associated schematic: E            |
| Associated Layout: 2851_2          | Associated Layout: 2851_2                                                                                                                                                        | Associated Layout: 2851_2          | Associated Layout: 2851_2          | Associated Layout: 2851_2          | Associated Layout: 2851_2          | Associated Layout: 2851_2          | Associated Layout: 2851_2          |
| Item                               | Reference                                                                                                                                                                        | Qty                                | Value                              | Tolerance                          | Description                        | Manufacturer                       | Part Number                        |
| 1                                  | C1 C2 C3 C4 C6 C9 C10 C12 C31                                                                                                                                                    | 9                                  | 1000pF                             | 10%                                | 0402 Capacitor                     | Murata                             | GRM155R71H102K                     |
| 2                                  | C5 C76                                                                                                                                                                           | 2                                  | 47pF                               | 5%                                 | 0402 Capacitor                     | Murata                             | GRM1555C1H470J                     |
| 3                                  | C7 C24                                                                                                                                                                           | 2                                  | 0.01uF                             | 10%                                | 0402 Capacitor                     | Murata                             | GRM155R71E103K                     |
| 4                                  | C8 C11 C15 C30 C68 C70 C71 C72 C74 C75 C77 C79 C80 C81 C83 C84 C85 C87 C88 C89 C91 C92 C93 C95 C96 C97 C99 C100 C101 C103 C104 C105 C107 C108 C109 C110 C111 C112 C113 C127 C128 | 41                                 | 0.1uF                              | 10%                                | 0402 Capacitor                     | Murata                             | GRM155R61A104K                     |
| 5                                  | C13 C22                                                                                                                                                                          | 2                                  | 1.0uF                              | 10%                                | 0402 Capacitor                     | Murata                             | GRM155R61A105K                     |
| 6                                  | C14                                                                                                                                                                              | 1                                  | 2.2uF                              | 20%                                | 0402 Capacitor                     | Murata                             | GRM155R60J225M                     |
| 7                                  | C16 C18 C20 C21 C25 C26 C27 C28 C33 C34 C35 C37 C40 C41 C43 C46 C47 C49 C52 C53 C55 C58 C61 C64 C65 C67 C120 C124                                                                | 0                                  | DNI                                |                                    | 0402 Capacitor                     |                                    | Leave Site Open                    |
| 8                                  | C17 C38 C121 C125                                                                                                                                                                | 0                                  | DNI                                |                                    | 1206 Capacitor                     |                                    | Leave Site Open                    |
| 9                                  | C19                                                                                                                                                                              | 1                                  | 10pF                               | 0.1pF                              | 0402 Capacitor                     | Murata                             | GRM1555C1H100B                     |
| 10                                 | C23                                                                                                                                                                              | 1                                  | 39pF                               | 5%                                 | 0402 Capacitor                     | Murata                             | GRM1555C1H390J                     |
| 11                                 | C29                                                                                                                                                                              | 1                                  | 5.6pF                              | 0.1pF                              | 0402 Capacitor                     | Murata                             | GRM1555C1H5R6B                     |
| 12                                 | C32                                                                                                                                                                              | 1                                  | 33pF                               | 5%                                 | 0402 Capacitor                     | Murata                             | GRM1555C1H330J                     |
| 13                                 | C36 C42 C48 C54 C66                                                                                                                                                              | 5                                  | 0 ohm                              | 5%                                 | 0402 Resistor                      |                                    | Use Lead-Free Parts Only           |
| 14                                 | C59                                                                                                                                                                              | 1                                  | 3.0nH                              | 0.1nH                              | 0402 Inductor                      | Murata                             | LQP15MN3N0B02                      |
| 15                                 | C60                                                                                                                                                                              | 1                                  | 1.2pF                              | 0.1pF                              | 0402 Capacitor                     | Murata                             | GRM1555C1H1R2B                     |
| 16                                 | C69 C73 C78 C82 C86 C90 C94 C98 C102 C106                                                                                                                                        | 10                                 | 5.0pF                              | 0.1pF                              | 0402 Capacitor                     | Murata                             | GRM1555C1H5R0B                     |
| 17                                 | C114 C116 C118 C122                                                                                                                                                              | 4                                  | 10uF                               | 10%                                | 1206 Capacitor                     | Murata                             | GRM31CR60J106K                     |
| 18                                 | C115 C117 C119 C123                                                                                                                                                              | 4                                  | 1.0uF                              | 20%                                | 1206 Capacitor                     | Murata                             | GRM31MR71C105M                     |

|   19 | R1 R2 R3 R4 R5 R6 R7 R8 R9 R10 R11 R12 R13 R14 R15 R16 R17 R18 R19 R20 R21 R22 R23 R24 R25 R26 R27 R28 R29 R30 R31 R32 R33 R35 R37 R38 R40 R42 R43 R44 R45 R46 R47 R48 R49 R50 R51 R52 R53 R54 R55 R56 R57 R91 R92 R93 R94 R95 R96 R97 R98 R100 R101 R102 R103 R104 R105 R106 R107 R108 R109 R110 R111 R112 R113 R114 R115 R121 R122 R123 R124 R125 R126 R127   |   0 | DNI          |    | 0402 Resistor                    |                     | Leave Site Open                      |
|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|--------------|----|----------------------------------|---------------------|--------------------------------------|
|   20 | R34 R36                                                                                                                                                                                                                                                                                                                                                         |   2 | 390 ohm      | 5% | 0402 Resistor                    |                     | Use Lead-Free Parts Only             |
|   21 | R39                                                                                                                                                                                                                                                                                                                                                             |   0 | 1k DNI       |    | Potentiometer                    |                     | 3296W-1-103LF Leave Site Open        |
|   22 | R41 R58 R60 R62 R64 R66 R68 R70 R72 R74 R76                                                                                                                                                                                                                                                                                                                     |  11 | 10k          | 1% | 0402 Resistor                    |                     | Use Lead-Free Parts Only             |
|   23 | R59 R61 R63 R65 R67 R69 R71 R73 R75 R77                                                                                                                                                                                                                                                                                                                         |  10 | 49.9 ohm     | 1% | 0402 Resistor                    |                     | Use Lead-Free Parts Only             |
|   24 | R78                                                                                                                                                                                                                                                                                                                                                             |   1 | 620 ohm      | 5% | 0402 Resistor                    |                     | Use Lead-Free Parts Only             |
|   25 | R79                                                                                                                                                                                                                                                                                                                                                             |   1 | 1k           |    | Potentiometer                    |                     | 3296W-1-102LF                        |
|   26 | R80                                                                                                                                                                                                                                                                                                                                                             |   1 | 301 ohm      | 1% | 0402 Resistor                    |                     | Use Lead-Free Parts Only             |
|   27 | R81 R86                                                                                                                                                                                                                                                                                                                                                         |   2 | 61.9 ohm     | 1% | 0402 Resistor                    |                     | Use Lead-Free Parts Only             |
|   28 | R82 R87                                                                                                                                                                                                                                                                                                                                                         |   2 | 200 ohm      | 1% | 0402 Resistor                    |                     | Use Lead-Free Parts Only             |
|   29 | R83 R85 R89 R90                                                                                                                                                                                                                                                                                                                                                 |   4 | 205 ohm      | 1% | 0402 Resistor                    |                     | Use Lead-Free Parts Only             |
|   30 | R84 R88                                                                                                                                                                                                                                                                                                                                                         |   2 | 226 ohm      | 1% | 0402 Resistor                    |                     | Use Lead-Free Parts Only             |
|   31 | R99                                                                                                                                                                                                                                                                                                                                                             |   1 | 20 ohm       | 5% | 0402 Resistor                    |                     | Use Lead-Free Parts Only             |
|   32 | R116 R117 R118 R119                                                                                                                                                                                                                                                                                                                                             |   4 | 5.1k         | 5% | 0402 Resistor                    |                     | Use Lead-Free Parts Only             |
|   33 | R120                                                                                                                                                                                                                                                                                                                                                            |   1 | 100 ohm      | 5% | 0402 Resistor                    |                     | Use Lead-Free Parts Only             |
|   34 | L1 L2 L3 L4 L5 L6                                                                                                                                                                                                                                                                                                                                               |   0 | DNI          |    | 0402 Inductor                    |                     | Leave Site Open                      |
|   35 | T1 T2 T3 T4 T5 T6                                                                                                                                                                                                                                                                                                                                               |   6 | 5400BL15B100 |    | 0805 Ceramic Balun 5400MHZ       | Johanson Technology | 5400BL15B100                         |
|   36 | U1                                                                                                                                                                                                                                                                                                                                                              |   1 | MAX2851      |    | 5GHz, 4-Channel MIMO Transmitter | Maxim Integrated    | MAX2851ITK+                          |
|   37 | U2                                                                                                                                                                                                                                                                                                                                                              |   1 | 40MHz        |    | Crystal                          | Kyocera             | CX2520SB40000H0WZK06                 |
|   38 | U3                                                                                                                                                                                                                                                                                                                                                              |   0 | DNI          |    |                                  |                     | KT3225R40000ECV28ZAA Leave Site Open |

<!-- image -->

|   39 | U4 U5 U6 U7 U8 U9 U10 U11 U12 U13                                                                                                                                                                                                           |   10 | MAX4444            | Ultra-High-Speed, Low-Distortion, Differential-to-Single-Ended Line Receivers with Enable   | Maxim Integrated       | MAX4444ESE+                                                              |
|------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------|--------------------|---------------------------------------------------------------------------------------------|------------------------|--------------------------------------------------------------------------|
|   40 | U14 U15                                                                                                                                                                                                                                     |    2 | LMH6551MA          | Differential Hi-Speed Op Amp                                                                | National Semiconductor | LMH6551MA/NOPB                                                           |
|   41 | U16                                                                                                                                                                                                                                         |    1 | MAX6062            | Precision, Micropower, Low- Dropout, High-Output-Current, SOT23 Voltage Reference           | Maxim Integrated       | MAX6062AEUR+                                                             |
|   42 | U17 U18                                                                                                                                                                                                                                     |    0 | MAX8510 DNI        |                                                                                             | Maxim Integrated       | MAX8510EXK33+ Leave Site Open                                            |
|   43 | U19                                                                                                                                                                                                                                         |    0 | MAX8869 DNI        |                                                                                             | Maxim Integrated       | MAX8869EUE33+ Leave Site Open                                            |
|   44 | RXBBI1 RXBBI2 RXBBI3 RXBBI4 RXBBI5 RXBBQ1 RXBBQ2 RXBBQ3 RXBBQ4 RXBBQ5 RXRF1 RXRF2 RXRF3 RXRF4 RXRF5 TXBBI TXBBQ TXRF                                                                                                                        |   18 | Connector          | SMA End Launch Jack Receptacle 0.062"                                                       | Johnson                | 142-0701-801 Cut center pin of each SMA to 1/8" length before installing |
|   45 | CLKOUT                                                                                                                                                                                                                                      |    0 | Connector DNI      | SMA End Launch Jack Receptacle 0.062"                                                       | Johnson                | 142-0701-801                                                             |
|   46 | J1                                                                                                                                                                                                                                          |    0 | Connector DNI      |                                                                                             |                        | QTH-020-01-L-D-DP-A-K Leave Site Open                                    |
|   47 | J2                                                                                                                                                                                                                                          |    1 | 2X10 Pin Header    | Dual In-Line Header, 100 mil centers                                                        | Sullins                | PEC36DAAN                                                                |
|   48 | JP1                                                                                                                                                                                                                                         |    1 | 2X3 Pin Header     | Dual In-Line Header, 100 mil centers                                                        | Sullins                | PEC36DAAN                                                                |
|   49 | JP2                                                                                                                                                                                                                                         |    1 | 2X7 Pin Header     | Dual In-Line Header, 100 mil centers                                                        | Sullins                | PEC36DAAN                                                                |
|   50 | JP3                                                                                                                                                                                                                                         |    1 | 2X11 Pin Header    | Dual In-Line Header, 100 mil centers                                                        | Sullins                | PEC36DAAN                                                                |
|   51 | JP4                                                                                                                                                                                                                                         |    0 | 1X2 Pin Header DNI | Single In-Line Header, 100 mil centers                                                      | Sullins                | PEC36DAAN Leave Site Open                                                |
|   52 | JPRXBBI1+ JPRXBBI1- JPRXBBI2+ JPRXBBI2- JPRXBBI3+ JPRXBBI3- JPRXBBI4+ JPRXBBI4- JPRXBBI5+ JPRXBBI5- JPRXBBQ1+ JPRXBBQ1- JPRXBBQ2+ JPRXBBQ2- JPRXBBQ3+ JPRXBBQ3- JPRXBBQ4+ JPRXBBQ4- JPRXBBQ5+ JPRXBBQ5- JPTXBBI+ JPTXBBI- JPTXBBQ+ JPTXBBQ- |   24 | 1X2 Pin Header     | Single In-Line Header, 100 mil centers                                                      | Sullins                | PEC36SAAN                                                                |

|   53 | RXBBBUF1                                                   |   1 | 1X3 Pin Header     | Single In-Line Header, 100 mil centers          | Sullins   | PEC36SAAN                 |
|------|------------------------------------------------------------|-----|--------------------|-------------------------------------------------|-----------|---------------------------|
|   54 | JP6                                                        |   0 | 1X3 Pin Header DNI | Single In-Line Header, 100 mil centers          | Sullins   | PEC36SAAN Leave Site Open |
|   55 | JP7 NOTE: Install only 2-Pin header between Pin 9 & Pin 10 |   1 | 1X2 Pin Header     | Single In-Line Header, 100 mil centers          | Sullins   | PEC36SAAN                 |
|   56 | VCM J11 J12 J13                                            |   4 | Test Point         | PC Mini - Red                                   | Keystone  | 5000                      |
|   57 | J3 J5                                                      |   2 | Test Point         | PC Mini - White                                 | Keystone  | 5002                      |
|   58 | J4 J6 J8 J10                                               |   4 | Test Point         | PC Mini - Black                                 | Keystone  | 5001                      |
|   59 | J7 J9                                                      |   2 | Test Point         | PC Mini - Yellow                                | Keystone  | 5004                      |
|   60 | JP7 RXBBBUF1 - Center Pin to +5V                           |   5 | Shunt              | Shorting Jumper                                 | Kycon     | SX1100-B                  |
|   61 | Pack-Out Instruction                                       |     |                    | Brown Box 9 3/16" x 7" x 1 1/4"                 |           |                           |
|   62 |                                                            |     |                    | ESD Bag 5"x8" w/ESD Logo                        |           |                           |
|   63 |                                                            |     |                    | Pink Foam 12"x12"x 5MM                          |           |                           |
|   64 |                                                            |     |                    | Web Instructions                                |           |                           |
|   65 |                                                            |     |                    | INTF3000+ Interface Board                       |           |                           |
|   66 |                                                            |     |                    | 36" Socket Connector Ribbon Cable - 20 Contacts | 3M        | M3AAA-2036R               |

<!-- image -->

<!-- image -->

MAX2851 EVALUATION KIT LAYER(s):LAYER 2

REV2

SHEET: 2 0F 15

MAX2851EVALUATIONKIT LAYER(s):LAYER 3

<!-- image -->

REV2 SHEET:3 0F15

MAX2851EVALUATIONKIT LAYER(s):LAYER 4

<!-- image -->

REV2 SHEET: 4 0F 15

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->