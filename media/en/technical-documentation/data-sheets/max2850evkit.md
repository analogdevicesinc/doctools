<!-- lastmod 2022-08-02 -->
## MAX2850 Evaluation Kit

## General Description

The  MAX2850  evaluation  kit  (EV  kit)  simplifies  testing of  the  MAX2850's  receive  and  transmit  performance  in 802.11a applications operating in the 4.9GHz to 5.9GHz ISM band. The EV kit provides 50Ω SMA connectors for all  RF  and baseband inputs and outputs. Differential-tosingle-ended and single-ended-to-differential line drivers are  provided  to  convert  the  differential  I/Q  baseband inputs and outputs to single-ended.

## Features

- On-Board Line Driver and Voltage Reference
- 50Ω SMA Connectors on All RF and Baseband Ports
- PC Control Software Available at www.maximintegrated.com

Ordering Information appears at end of data sheet.

## Quick Start

The MAX2850 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section to test the device.

## Test Equipment Required

This  section  lists  the  recommended  test  equipment  to verify the operation of the MAX2850. It is intended as a guide only, with substitutions possible.

- MAX2850 EV kit
- INTF3000+ interface board
- 20-pin ribbon cable
- DC supply capable of delivering +5V and 200mA of continuous current
- DC supply capable of delivering -5V and 200mA of continuous current
- DC supply capable of delivering +2.85V and 500mA of continuous current
- One signal source capable of generating up to 6GHz
- 802.11a CW I/Q waveform generator or two Agilent 33120A (or equivalent) signal generators
- HP8561E or equivalent RF spectrum analyzer with minimum 100kHz to 6GHz frequency range
- TDS3012 or equivalent oscilloscope with 200MHz bandwidth
- Agilent 33120A or equivalent digital multimeter
- PC laptop or tablet with Microsoft Windows XP ® , Windows ®  7, 8 OS and a USB port
- USB-A male to USB-B male cable

<!-- image -->

Evaluates: MAX2850

## Connections and Setup

This section provides step-by-step instructions for getting the EV kit up and running in all modes:

- 1) Connect a 20-pin ribbon cable between the 20-pin connector (J2) on the EV kit and the INTF2400 connector  (J1)  on  the  INTF3000+  interface  board. Make sure pin 1 on EV kit matches with pin 1 on the INTF3000+ board.
- 2) Connect a USB cable between the INTF3000+ interface board and the PC with the MAX2850 control software.
- 3) Connect a jumper between V DEV  and center pin of JU1 header on the INTF3000+ interface board.
- 4) With the output disabled, connect the +5V supply to the +5V terminal (J7) on the MAX2850 EV kit.
- 5) With the output disabled, connect the -5V supply to the -5V terminal (J9) on the MAX2850 EV kit.
- 6) With the output disabled, connect a +2.85V supply to the VREG (J3) on the MAX2850 EV kit.
- 7) Connect all the supply grounds together and to any of the GND terminals (J4, J6, J8, J10) on the MAX2850 EV kit.
- 8) Turn on the +5V, -5V and +2.85V power supplies.
- 9) Connect a jumper between pin 1 and pin 2 of the RXBBBUF2 header.
- 10)  Make sure there are jumpers installed across JPRXB BI+, JPRXBBI-, JPRXBBQ+, and JPRXBBQ+ headers.
- 11)  Install and run the MAX2850 control software, available for download HERE .

## Frequency Synthesizer Setup

- 1) All parameters related to frequency synthesis can be set under the 'Synth' page of the MAX2850 control software.
- 2) The  'Xtal  Reference  (MHz)'  box  allows  the  user  to enter the reference input frequency. Typical reference frequency is 40MHz, when using the on-board crystal.
- 3) The  'Xtal  Tune'  box  enables  user  to  fine  tune  the crystal frequency.
- 4) The 'LO Freq (MHz)' box allows the user to enter the desired LO frequency. Enter 5350MHz as the operating frequency for testing purposes.

Evaluates: MAX2850

## Receiver Mode Setup

- 1) Set the signal generator to accurately deliver -70dBm at 5351MHz.
- 2) With the generator output disabled, connect the output of signal generator to the receiver input port (RXRF).
- 3) Connect the receiver baseband I/Q outputs (RXBBI and RXBBQ) to an oscilloscope.
- 4) On the 'Write' page of the MAX2850 control software, enter the receive register values shown in Table 1 into the main and local registers.
- 5) At the bottom of the MAX2850 control software, make sure  the  ENABLE  PIN  box  is  set  to  '1'  and  'RX'  is selected from the 'Mode' drop-down menu.
- 6) Select the 5.3GHz~5.6GHz LNA band using the dropdown menu under 'LNA Band' box.
- 7) Use  the  'RX  LNA  Gain'  drop  down  menu  to  select '111 = Max Gain' and use the slider bar for 'RX VGA Gain' to set it to 'max gain'.
- 8) Click on the SEND ALL tab. At this time the supply current for +2.85V supply is around 125mA.
- 9) At  this  point,  there  should  be  two  1MHz  signals  on the scope with roughly 90° phase offset. Use the 'Xtal Tune' box to fine tune to 1MHz, if needed.
- 10)  Alternatively, connect the spectrum analyzer to either RXBBI or RXBBQ. Set the center frequency to 1MHz with a 500kHz span. Other recommended spectrum analyzer settings are: Res BW of 1kHz and Ref Level of 10dB.
- 11)  The  output  baseband  CW  tone  at  1MHz  should  be approximately -6dBm.
- 12)  The sideband suppression can be optimized manually through SPI by 'RX LO IQ Calibration' value.

## Transmitter Mode Setup

- 1) Connect one of the four TXRF outputs to a spectrum analyzer. Set the frequency of spectrum analyzer to 5350MHz and span to 10MHz. Other recommended spectrum  analyzer  settings  are:  Res  BW  of  3kHz, Attenuation of 10dB and Ref Level of 0dB.
- 2) Connect  a  1MHz  sinusoid  to  the  corresponding TXBBI and a 1MHz sinusoid with a 90° phase shift (or a cosine) to the corresponding TXBBQ ports. Set the input amplitude of each channel to 100mV RMS .

## MAX2850 Evaluation Kit

- 3) On  the  'Write'  page  of  the  device  control  software, enter  the  transmit  register  values  shown  in  Table  2 into the Main and Local registers.
- 4) At the bottom of the MAX2850 control software, make sure  the  ENABLE  PIN  box  is  set  to  1  and  'TX'  is selected from the 'Mode' drop-down menu.
- 5) On the 'TX' page of the EV kit software, select the transmitter  being  tested  under  'MIMO  PATH'  block and also select it under 'VGA Settings' block.
- 6) Using the 'VGA Settings' block, maximize the output power by setting 'Attenuation Entry' to 63.
- 7) Click on the SEND ALL tab. At this time the supply current for +2.85V supply is around 204mA.

## Table 1. Typical Receive Register Settings

| MAIN REGISTERS   | MAIN REGISTERS   | MAIN REGISTERS   | MAIN REGISTERS   | LOCAL REGISTERS   | LOCAL REGISTERS   | LOCAL REGISTERS   | LOCAL REGISTERS   |
|------------------|------------------|------------------|------------------|-------------------|-------------------|-------------------|-------------------|
| ADDRESS          | HEX VALUE        | ADDRESS          | HEX VALUE        | ADDRESS           | HEX VALUE         | ADDRESS           | HEX VALUE         |
| 0                | 1EB              | 16               | 380              | 0                 | -                 | 16                | 000               |
| 1                | 0EF              | 17               | 000              | 1                 | 000               | 17                | 000               |
| 2                | 1C0              | 18               | 080              | 2                 | 000               | 18                | 000               |
| 3                | 000              | 19               | 05F              | 3                 | 000               | 19                | 000               |
| 4                | 31C              | 20               | 1EA              | 4                 | 380               | 20                | 000               |
| 5                | 000              | 21               | 0BF              | 5                 | 000               | 21                | 000               |
| 6                | 3E8              | 22               | 1B8              | 6                 | 000               | 22                | 000               |
| 7                | 024              | 23               | 065              | 7                 | 000               | 23                | 000               |
| 8                | 000              | 24               | 24F              | 8                 | 1AA               | 24                | 0C4               |
| 9                | 3FF              | 25               | 3A8              | 9                 | 114               | 25                | 12B               |
| 10               | 000              | 26               | 015              | 10                | 354               | 26                | 165               |
| 11               | 060              | 27               | 180              | 11                | 073               | 27                | 002               |
| 12               | -                | 28               | 063              | 12                | 000               | 28                | 004               |
| 13               | 000              | 29               | 000              | 13                | 000               | 29                | -                 |
| 14               | 160              | 30               | 000              | 14                | 000               | 30                | -                 |
| 15               | 242              | 31               | 000              | 15                | 000               | 31                | 000               |

## Evaluates: MAX2850

- 8) Measure  the  voltage  at  the  VCM  header  on  the MAX2850 and adjust R25 to get around 0.9V to 1.1V.
- 9) On the spectrum analyzer, the transmit output power at 5351MHz should be around -6.5dBm.
- 10)  The LO leakage at 5350MHz can be optimized manually through SPI by adjusting the offset values shown in the 'DC Offset Corr. I' and 'DC Offset Corr. Q' boxes.
- 11)  The  sideband  suppression  at  5349MHz  can  be optimized  manually  through  SPI  by  adjusting  the value in the 'TX LO I/Q Phase' box.

Table 2. Typical Transmit Register Settings

| MAIN REGISTERS   | MAIN REGISTERS   | MAIN REGISTERS   | MAIN REGISTERS   | LOCAL REGISTERS   | LOCAL REGISTERS   | LOCAL REGISTERS   | LOCAL REGISTERS   |
|------------------|------------------|------------------|------------------|-------------------|-------------------|-------------------|-------------------|
| ADDRESS          | HEX VALUE        | ADDRESS          | HEX VALUE        | ADDRESS           | HEX VALUE         | ADDRESS           | HEX VALUE         |
| 0                | 02F              | 16               | 380              | 0                 | -                 | 16                | 000               |
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

Evaluates: MAX2850

Evaluates: MAX2850

Figure 1. MAX2850 Hardware Connections

<!-- image -->

Figure 2. MAX2850 Control Software-Frequency Synthesizer Page

<!-- image -->

Figure 3. MAX2850 Control Software-TX Page

<!-- image -->

Figure 4. MAX2850 Control Software-RX Page

<!-- image -->

## Component Suppliers

| SUPPLIER                               | WEBSITE                    |
|----------------------------------------|----------------------------|
| Kyocera                                | www.americas.kyocera.com   |
| Digi-Key                               | www.digikey.com            |
| National Semiconductor                 | www.ni.com                 |
| Johnson / Cinch Connectivity Solutions | www.johnsoncomponents.com  |
| Johanson Technology                    | www.johansontechnology.com |
| Sullins Corp.                          | www.sullinscorp.com        |
| Keystone                               | www.keyelco.com            |

Note:

Indicate that you are using the MAX2850 when contacting these component suppliers.

## Component List, PCB Layout, and Schematic

See the following links for component information, PCB layout diagrams, and schematics.

- MAX2850 EV BOM
- MAX2850 EV PCB Layout
- MAX2850 EV Schematic

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX2850EVKIT+ | EV Kit |

Evaluates: MAX2850

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX2850

| EVKit Part Number: MAX2850EVKIT+   | EVKit Part Number: MAX2850EVKIT+                                                                                |     | Associated schematic: F   | Associated schematic: F   | Associated schematic: F   |              |                 |
|------------------------------------|-----------------------------------------------------------------------------------------------------------------|-----|---------------------------|---------------------------|---------------------------|--------------|-----------------|
| Revision: G                        | Revision: G                                                                                                     |     | Associated Layout: 2850_2 | Associated Layout: 2850_2 | Associated Layout: 2850_2 |              |                 |
| Lead Designer:                     | Lead Designer:                                                                                                  |     |                           |                           |                           |              |                 |
| Lead Layout:                       | Lead Layout:                                                                                                    |     |                           |                           |                           |              |                 |
| Date Last Edited: 6-18-13          | Date Last Edited: 6-18-13                                                                                       |     |                           |                           |                           |              |                 |
| Last Edited by (whom): Sue Harris  | Last Edited by (whom): Sue Harris                                                                               |     |                           |                           |                           |              |                 |
| Item                               | Reference                                                                                                       | Qty | Value                     | Tolerance                 | Description               | Manufacturer | Part Number     |
| 1                                  | C1 C7                                                                                                           | 2   | 1.2pF                     | 0.1pF                     | 0402 Capacitor            | Murata       | GRM1555C1H1R2B  |
| 2                                  | C2 C9 C11 C18 C24 C26 C49                                                                                       | 7   | 1000pF                    | 10%                       | 0402 Capacitor            | Murata       | GRM155R71H102K  |
| 3                                  | C3 C6 C25 C28 C40 C100                                                                                          | 6   | 0.01uF                    | 10%                       | 0402 Capacitor            | Murata       | GRM155R71E103K  |
| 4                                  | C4 C5 C36                                                                                                       | 3   | 2.4nH                     | 0.1nH                     | 0402 Inductor             | Murata       | LQP15MN2N4B02   |
| 5                                  | C8 C39                                                                                                          | 2   | 3.9nH                     | 0.1nH                     | 0402 Inductor             | Murata       | LQP15MN3N9B02   |
| 6                                  | C10 C12 C13 C17 C19 C20 C21 C22 C32 C34 C41 C47 C52 C53 C54 C61 C66 C67 C68 C69 C70 C83 C103 C104               | 0   | DNI                       |                           | 0402 Capacitor            |              | Leave Site Open |
| 7                                  | C14                                                                                                             | 1   | 1.0pF                     | 0.25pF                    | 0402 Capacitor            | Murata       | GRM1555C1H1R0C  |
| 8                                  | C15                                                                                                             | 1   | 1.3nH                     | 0.1nH                     | 0402 Inductor             | Murata       | LQP15MN1N3B02   |
| 9                                  | C16 C27 C42 C46 C62 C63 C64 C65 C71 C72 C73 C74 C75 C76 C77 C78 C84 C85 C87 C88 C89 C90 C93 C94 C95 C97 C98 C99 | 28  | 0.1uF                     | 10%                       | 0402 Capacitor            | Murata       | GRM155R61A104K  |
| 10                                 | C23                                                                                                             | 1   | 33pF                      | 5%                        | 0402 Capacitor            | Murata       | GRM1555C1H330J  |
| 11                                 | C29                                                                                                             | 1   | 2.0nH                     | 0.1nH                     | 0201 Inductor             | Murata       | LQP03TN2N0C00   |
| 12                                 | C30 C35                                                                                                         | 2   | 1.0pF                     | 0.1pF                     | 0402 Capacitor            | Murata       | GRM1555C1H1R0B  |
| 13                                 | C31                                                                                                             | 1   | 3.6nH                     | 0.1nH                     | 0402 Inductor             | Murata       | LQP15MN3N6B02   |
| 14                                 | C33                                                                                                             | 1   | 4.3nH                     | 0.1nH                     | 0402 Inductor             | Murata       | LQP15MN4N3B02   |
| 15                                 | C37 C38 C55 C60 C106                                                                                            | 5   | 47pF                      | 5%                        | 0402 Capacitor            | Murata       | GRM1555C1H470J  |
| 16                                 | C43 C48                                                                                                         | 2   | 1.0uF                     | 10%                       | 0402 Capacitor            | Murata       | GRM155R61A105K  |
| 17                                 | C44                                                                                                             | 1   | 5.6pF                     | 0.1pF                     | 0402 Capacitor            | Murata       | GRM1555C1H5R6B  |
| 18                                 | C45                                                                                                             | 1   | 2200pF                    | 10%                       | 0402 Capacitor            | Murata       | GRM155R71H222K  |
| 19                                 | C50                                                                                                             | 1   | 39pF                      | 5%                        | 0402 Capacitor            | Murata       | GRM1555C1H390J  |
| 20                                 | C51                                                                                                             | 1   | 1000pF                    | 5%                        | 0402 Capacitor            | Murata       | GRM1555C1H102J  |
| 21                                 | C56 C59 C79 C82                                                                                                 | 4   | 10uF                      | 10%                       | 1206 Capacitor            | Murata       | GRM31CR60J106K  |

<!-- image -->

|   22 | C57 C58 C80 C81 C91 C101                                                                                                                                                                                                                                                                                                                          |   6 | 1.0uF        | 20%   | 1206 Capacitor                   | Murata              | GRM31MR71C105M                |
|------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|--------------|-------|----------------------------------|---------------------|-------------------------------|
|   23 | C86 C102                                                                                                                                                                                                                                                                                                                                          |   0 | DNI          |       | 1206 Capacitor                   |                     | Leave Site Open               |
|   24 | C92 C96                                                                                                                                                                                                                                                                                                                                           |   2 | 5.0pF        | 0.1pF | 0402 Capacitor                   | Murata              | GRM1555C1H5R0B                |
|   25 | C105 C107 C108 C109 C110 C111 C112 C113                                                                                                                                                                                                                                                                                                           |   8 | 0.01uF       | 10%   | 0603 Capacitor                   | Murata              | GRM188R71E03K                 |
|   26 | R1 R8 R9 R34 R35 R42 R52 R58 R59 R64 R65 R66 R67 R69 R70 R71 R72 R73 R74 R75 R76 R77 R78 R79 R80 R81 R82 R83 R84 R85 R86 R87 R88 R89 R90 R91 R92 R93 R94 R95 R96 R97 R98 R99 R102 R103 R104 R105 R106 R107 R108 R109 R110 R111 R112 R113 R114 R115 R116 R117 R118 R119 R120 R121 R122 R123 R124 R125 R126 R127 R128 R129 R130 R131 R132 R133 R134 |   0 | DNI          |       | 0402 Resistor                    |                     | Leave Site Open               |
|   27 | R2 R7 R17 R19 R33 R40 R53 R55                                                                                                                                                                                                                                                                                                                     |   8 | 200 ohm      | 1%    | 0402 Resistor                    |                     | Use Lead-Free Parts Only      |
|   28 | R3 R5 R6 R13 R15 R18 R23 R29 R31 R38 R39 R41 R47 R49 R54 R56                                                                                                                                                                                                                                                                                      |  16 | 205 ohm      | 1%    | 0402 Resistor                    |                     | Use Lead-Free Parts Only      |
|   29 | R4 R10 R14 R16 R30 R32 R48 R50                                                                                                                                                                                                                                                                                                                    |   8 | 226 ohm      | 1%    | 0402 Resistor                    |                     | Use Lead-Free Parts Only      |
|   30 | R11 R12 R21 R22 R27 R28 R45 R46                                                                                                                                                                                                                                                                                                                   |   8 | 61.9 ohm     | 1%    | 0402 Resistor                    |                     | Use Lead-Free Parts Only      |
|   31 | R20 R51                                                                                                                                                                                                                                                                                                                                           |   2 | 392 ohm      | 1%    | 0402 Resistor                    |                     | Use Lead-Free Parts Only      |
|   32 | R24                                                                                                                                                                                                                                                                                                                                               |   1 | 301 ohm      | 1%    | 0402 Resistor                    |                     | Use Lead-Free Parts Only      |
|   33 | R25                                                                                                                                                                                                                                                                                                                                               |   1 | 1k           |       | Potentiometer                    |                     | 3296W-1-102LF                 |
|   34 | R26                                                                                                                                                                                                                                                                                                                                               |   1 | 620 ohm      | 5%    | 0402 Resistor                    |                     | Use Lead-Free Parts Only      |
|   35 | R36 R37 R43 R44                                                                                                                                                                                                                                                                                                                                   |   1 | 5.1k         | 5%    | 0402 Resistor                    |                     | Use Lead-Free Parts Only      |
|   36 | R57                                                                                                                                                                                                                                                                                                                                               |   1 | 100 ohm      | 5%    | 0402 Resistor                    |                     | Use Lead-Free Parts Only      |
|   37 | R60 R62                                                                                                                                                                                                                                                                                                                                           |   2 | 49.9 ohm     | 1%    | 0402 Resistor                    |                     | Use Lead-Free Parts Only      |
|   38 | R61 R63 R68                                                                                                                                                                                                                                                                                                                                       |   3 | 10k          | 1%    | 0402 Resistor                    |                     | Use Lead-Free Parts Only      |
|   39 | R100                                                                                                                                                                                                                                                                                                                                              |   1 | 66.5k        | 1%    | 0402 Resistor                    |                     | Use Lead-Free Parts Only      |
|   40 | R101                                                                                                                                                                                                                                                                                                                                              |   1 | 25.5k        | 1%    | 0402 Resistor                    |                     | Use Lead-Free Parts Only      |
|   41 | L1 L2 L3 L4 L5 L6 L7 L8 L11 L12                                                                                                                                                                                                                                                                                                                   |   0 | DNI          |       | 0402 Inductor                    |                     | Leave Site Open               |
|   42 | T1 T2 T3 T4 T5                                                                                                                                                                                                                                                                                                                                    |   5 | 5400BL15B100 |       | 0805 Ceramic Balun 5400MHZ       | Johanson Technology | 5400BL15B100                  |
|   43 | U1                                                                                                                                                                                                                                                                                                                                                |   1 | MAX2850      |       | 5GHz, 4-Channel MIMO Transmitter | Maxim Integrated    | MAX2850ITK+                   |
|   44 | U2                                                                                                                                                                                                                                                                                                                                                |   0 | DNI          |       |                                  |                     | MAX8869EUE33+ Leave Site Open |

<!-- image -->

|   45 | U3                                                                                                              |   0 | DNI             |                                                                                           |                        | KT3225R40000ECV28ZAA Leave Site Open                                     |
|------|-----------------------------------------------------------------------------------------------------------------|-----|-----------------|-------------------------------------------------------------------------------------------|------------------------|--------------------------------------------------------------------------|
|   46 | U4                                                                                                              |   1 | 40MHz           | Crystal                                                                                   | Kyocera                | CX2520SB40000H0WZK06                                                     |
|   47 | U5 U6 U7 U8 U11 U12 U14 U15                                                                                     |   8 | LMH6551MA       | Differential Hi-Speed Op Amp                                                              | National Semiconductor | LMH6551MA/NOPB                                                           |
|   48 | U9                                                                                                              |   1 | MAX6062         | Precision, Micropower, Low- Dropout, High-Output-Current, SOT23 Voltage Reference         | Maxim Integrated       | MAX6062AEUR+                                                             |
|   49 | U13 U16                                                                                                         |   0 | MAX8510 DNI     |                                                                                           | Maxim Integrated       | MAX8510EXK33+ Leave Site Open                                            |
|   50 | U17 U18                                                                                                         |   2 | MAX4444         | Ultra-High-Speed, Low-Distortion, Differential-to-Single-Ended Line Receivers with Enable | Maxim Integrated       | MAX4444ESE+                                                              |
|   51 | RXBBI RXBBQ TXBBI1 TXBBI2 TXBBI3 TXBBI4 TXBBQ1 TXBBQ2 TXBBQ3 TXBBQ4                                             |  10 | Connector       | SMA End Launch Jack Receptacle 0.062"                                                     | Johnson                | 142-0701-801 Cut center pin of each SMA to 1/4" length before installing |
|   52 | TXRF1 TXRF2 TXRF3 TXRF4 RXRF                                                                                    |   5 | Connector       | SMA End Launch Jack Receptacle 0.062"                                                     | Johnson                | 142-0701-801 Cut center pin of each SMA to 1/4" length before installing |
|   53 | CLKOUT XTAL                                                                                                     |   0 | Connector DNI   | SMA End Launch Jack Receptacle 0.062"                                                     | Johnson                | 142-0701-801                                                             |
|   54 | J1                                                                                                              |   0 | Connector DNI   |                                                                                           |                        | QTH-020-01-L-D-DP-A-K Leave Site Open                                    |
|   55 | J2                                                                                                              |   1 | 2X10 Pin Header | Dual In-Line Header, 100 mil centers                                                      | Sullins                | PEC36DAAN                                                                |
|   56 | JP1                                                                                                             |   1 | 2X3 Pin Header  | Dual In-Line Header, 100 mil centers                                                      | Sullins                | PEC36DAAN                                                                |
|   57 | JP2                                                                                                             |   1 | 2X12 Pin Header | Dual In-Line Header, 100 mil centers                                                      | Sullins                | PEC36DAAN                                                                |
|   58 | JP5                                                                                                             |   1 | 2X16 Pin Header | Dual In-Line Header, 100 mil centers                                                      | Sullins                | PEC36DAAN                                                                |
|   59 | JP4 JPRXBBI+ JPRXBBI- JPRXBBQ+ JPRXBBQ- JPTXBBI1 JPTXBBI2 JPTXBBI3 JPTXBBI4 JPTXBBQ1 JPTXBBQ2 JPTXBBQ3 JPTXBBQ4 |  13 | 1X2 Pin Header  | Single In-Line Header, 100 mil centers                                                    | Sullins                | PEC36SAAN                                                                |
|   60 | RXBBBUF2                                                                                                        |   1 | 1X3 Pin Header  | Single In-Line Header, 100 mil centers                                                    | Sullins                | PEC36SAAN                                                                |

|   61 | JP6                                                                 |   0 | 1X3 Pin Header DNI   | Single In-Line Header, 100 mil centers          | Sullins   | PEC36SAAN Leave Site Open   |
|------|---------------------------------------------------------------------|-----|----------------------|-------------------------------------------------|-----------|-----------------------------|
|   62 | VCM1 J7                                                             |   2 | Test Point           | PC Mini - Red                                   | Keystone  | 5000                        |
|   63 | J3 J5                                                               |   2 | Test Point           | PC Mini - White                                 | Keystone  | 5002                        |
|   64 | J4 J6 J8 J10                                                        |   4 | Test Point           | PC Mini - Black                                 | Keystone  | 5001                        |
|   65 | J9                                                                  |   1 | Test Point           | PC Mini - Yellow                                | Keystone  | 5004                        |
|   66 | JPRXBBI+ JPRXBBI- JPRXBBQ+ JPRXBBQ- RXBBBUF2 - Install on Pin 1 & 2 |   5 | Shunt                | Shorting Jumper                                 | Kycon     | SX1100-B                    |
|   67 | Pack-Out Instruction                                                |     |                      | Brown Box 9 3/16" x 7" x 1 1/4"                 |           |                             |
|   68 |                                                                     |     |                      | ESD Bag 5"x8" w/ESD Logo                        |           |                             |
|   69 |                                                                     |     |                      | Pink Foam 12"x12"x 5MM                          |           |                             |
|   70 |                                                                     |     |                      | Web Instructions                                |           |                             |
|   71 |                                                                     |     |                      | INTF3000+ Interface Board                       |           |                             |
|   72 |                                                                     |     |                      | 36" Socket Connector Ribbon Cable - 20 Contacts | 3M        | M3AAA-2036R                 |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

WAX2850 EVALUATI0N KIT LAYER(s):LAYER 5

REV1 SHEET: 5 0F 15

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->