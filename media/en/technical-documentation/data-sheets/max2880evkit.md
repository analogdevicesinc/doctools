<!-- lastmod 2022-08-02 -->
## MAX2880 Evaluation Kit

## General Description

The MAX2880 evaluation kit (EV kit) facilitates the evaluation of the MAX2880 wide-band phase-locked loop (PLL). It is a fully  assembled  and  tested  frequency  synthesizer  consisting of the IC, 5840MHz to 6040MHz external VCO, 50MHz TCXO, passive-loop filter, and low-dropout regulators.

A  software  application,  running  on  a  PC  with  Windows XP ®  or later Windows ®  operating system, simplifies the control of the IC in various operating modes and features.

## EV Kit Contents

The EV kit package contains the following:

- EV kit board
- Maxim INTF-3000-to-USB interface board
- 20-pin ribbon cable for connecting EV kit to INTF-3000 board

The content of this document includes:

- Brief test procedure to verify functionality
- Description of the EV kit circuit and circuit schematic
- List of EV kit components and artwork for each PCB layer

Figure 1. EV Kit Setup Block Diagram

<!-- image -->

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

## Features

- Easy Evaluation of the MAX2880
- All Critical Peripheral Components Included
- PC-Based Control Software
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- +6.0V power supply, capable of delivering 150mA
- USB cable, type A to type B
- Windows PC
- Signal source analyzer or spectrum analyzer
- Power cables and an SMA-terminated, 50Ω RF cable

Ordering Information appears at end of data sheet.

Evaluates: MAX2880

<!-- image -->

## MAX2880 Evaluation Kit

## Procedure

Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default positions, as shown in Figure 2.
- 2) Connect  the  20-pin  cable  between  the  INTF-3000 board and the EV kit; verify the pin 1-1 connections, as shown in Figure 2.
- 3) Connect the USB cable from the PC to the INTF-3000 board.
- 4) With its output disabled, set the DC power supply to +6.0V. Connect the DC power supply (with a compliance  limit  of  150mA)  to  the  banana  plugs  labeled VSUPPLY and GNDSUPPLY.
- 5) Connect an RF cable from the VCOOUT SMA con -nector to a signal analyzer or spectrum analyzer.
- 6) Visit www.maximintegrated.com , search for MAX2880EVK, and download the latest EK kit software installation file. Run the installation file.
- 7) Turn on the DC power supply to power on the EV kit board.
- 8) Run MAX2880.exe to launch the EV kit GUI (Figure 3).  In  the  lower  right  corner,  verify  that  the USB Online box is green.
- 9) In the EV kit GUI, click on Defaults and then Send All button.  In  the  lower  right  corner,  verify  that  the PLL Lock indicator is green
- 10)  Use  a  signal  analyzer  to  verify  the  performance  of the EV kit. Under the default setting, the user should expect  to  see  similar  output  as  the  TOC07  plot  in the Typical  Operating  Characteristics section  in  the MAX2880 IC data sheet.
- 11)  The  user  can  also  open  two  more  preload  register settings  (fractional  low-noise  mode  and  fractional low-spur mode) from the Settings - Load menu, then hit the Send All button.
- 12)  To input a new output frequency, update the fVco edit box and then hit Enter on the keyboard.

## Evaluates: MAX2880

Figure 2. Hardware Setup and Default Jumper Pposition

<!-- image -->

│

Figure 3. MAX2880 EV Kit GUI

<!-- image -->

## MAX2880 Evaluation Kit

## Detailed Description of Hardware

The  MAX2880  EV  kit  is  a  complete  frequency  synthesizer consisting of the MAX2880 PLL, on-board 6000MHz VCO, 50MHz TCXO frequency reference, and 3rd-order passive-loop filter. The EV kit is configured with a narrowband,  high-performance  6000MHz  VCO  to  demonstrate the  IC  performance  across  the  5840MHz  to  6040MHz frequency range.

The EV kit input and output interfaces use standard 50Ω SMA connectors. The board also includes the necessary peripheral  components  and  functions  needed  to  power,

## Component List

| DESIGNATION                                 |   QTY | DESCRIPTION                                                          |
|---------------------------------------------|-------|----------------------------------------------------------------------|
| 3V_EXT, 5V_EXT                              |     2 | Small red test points Keystone 5000                                  |
| C1, C16, C18- C20, C27, C28, C38, C45       |     9 | 0.01μF ±10%, 50V X7R ceramic capacitors (0402) Murata GRM155R71H103K |
| C2                                          |     1 | 0.1μF ±10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H104K   |
| C3                                          |     1 | 1000pF ±5%, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H102J   |
| C4, C101, C102                              |     0 | Not installed, ceramic capacitors (0603)                             |
| C5, C6                                      |     2 | 100pF ±5%, 25V C0G ceramic capacitors (0201) Murata GRM0335C1E101J   |
| C7, C9, C11, C13, C15, C21, C23, C26        |     8 | 100pF ±5%, 50V C0G ceramic capacitors (0402) Murata GRM1555C1H101J   |
| C8, C10, C12, C14, C22, C25                 |     0 | Not installed, ceramic capacitors (0402)                             |
| C17, C41, C48                               |     3 | 1μF ±10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H105K    |
| C24, C30, C32, C34, C39, C46                |     6 | 4.7μF ±10%, 50V X7R ceramic capacitors (1206) Murata GRM31CR71H475K  |
| C29, C31, C33, C37, C40, C42, C44, C47, C49 |     9 | 0.1μF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K  |

Evaluates: MAX2880

monitor, and control the IC, including linear power regulators, LED indicators, and SPI bus.

To simplify the test setup, the EV kit is configured to operate  from  a  single  5.5V  to  6.5V  power  supply.  The  5.5V to  6.5V  input  voltage  range  is  governed  by  the  chosen on-board LDOs (U6 and U7) and not by the IC. The EV kit can be reconfigured to bypass the on-board LDOs and run off separate 3V and 5V supplies.

The EV kit can be modified to evaluate the IC at operating frequencies ranging from 250MHz up to 12.4GHz using an external VCO. This topic is addressed in a dedicated application note. Contact the factory for details.

| DESIGNATION                                            |   QTY | DESCRIPTION                                                        |
|--------------------------------------------------------|-------|--------------------------------------------------------------------|
| C35                                                    |     1 | 10μF tantalum capacitor (C case) AVX TPSC106K016R                  |
| C36, C43                                               |     2 | 10μF ±10%, 25V X7R ceramic capacitors (1206) Murata GRM31CR71E106K |
| CE, CLK, DATA, LE, MUX_OUT, PHASE_ADJ, REF_IN, TUNE_TP |     8 | Small white test points Keystone 5002                              |
| D1-D3                                                  |     3 | Green LEDs (0603) LT L29S-P2R1-25-Z                                |
| D4                                                     |     1 | Generic axial-lead diode 1N4001                                    |
| GND1-GND4                                              |     4 | Small black test points Keystone 5001                              |
| GNDSUPPLY                                              |     1 | Black banana plug Deltron 571-0100-01                              |
| J1                                                     |     1 | 20-pin male header (2 x 10), 0.100in spacing Sullins PEC36DAAN     |
| JP1, JP3, JP5-JP8                                      |     6 | 3-pin male headers (1 x 3), 0.100in spacing Sullins PEC36SAAN      |
| JP2, JP4, JP9                                          |     3 | 2-pin male headers (1 x 2), 0.100in spacing Sullins PEC36SAAN      |
| R1, R21, R22                                           |     3 | 5.11kΩ ±1% resistors (0402)                                        |
| R2A, R18                                               |     2 | 100Ω ±1% resistors (0402)                                          |

│

## Component List (continued)

| DESIGNATION                            |   QTY | DESCRIPTION                                          |
|----------------------------------------|-------|------------------------------------------------------|
| R2B, R11, R12, R25-R27, R32, R35, R102 |     0 | Not installed, resistors (0402)                      |
| R3                                     |     1 | 47.5Ω ±1% resistor (0402)                            |
| R7-R9                                  |     3 | 16.9Ω ±1% resistors (0201)                           |
| R4, R5, R10, R24                       |     4 | 0Ω ±1% resistors (0402)                              |
| R6                                     |     1 | 49.9Ω ±1% resistor (0201)                            |
| R13-R16, R19, R20, R28-R30, R33, R36   |    11 | 1kΩ ±5% resistors (0402)                             |
| R17, R23, R31, R34                     |     4 | 10kΩ ±5% resistors (0402)                            |
| REFIN, TUNE, VCOIN, VCOOUT             |     4 | PCB edge-mount SMARF connectors Johnson 142-0741-856 |
| U1                                     |     1 | High-performance PLL (20 TQFN-EP*) Maxim MAX2880ETP+ |

## Component Suppliers

| SUPPLIER                 | WEBSITE                |
|--------------------------|------------------------|
| AVX Corporation          | www.avxcorp.com        |
| Fair-Rite Products Corp. | www.fair-rite.com      |
| Murata Americas          | www.murataamericas.com |
| Texas Instruments Inc.   | www.ti.com             |
| Z-Communications         | www.zcomm.com          |
| Connor-Winfield          | www.conwin.com         |

Note:

Indicate that you are using the MAX2880 when contacting these component suppliers.

Evaluates: MAX2880

*EP = Exposed pad.

| DESIGNATION        |   QTY | DESCRIPTION                                                    |
|--------------------|-------|----------------------------------------------------------------|
| U2                 |     1 | TCXO Connor Winfield CWX823-050.0M                             |
| U3                 |     0 | Maxim MAX9632ASA+                                              |
| U4                 |     1 | 5840MHz to 6040MHz VCO (0.5V to 4.5V tuning) ZCOMM V940ME28-LF |
| U5                 |     1 | Hex buffer/driver TI SN74LV07ADR                               |
| U6                 |     1 | 3.3V regulator (5 SOT23) Maxim MAX8867EUK33+                   |
| U7                 |     1 | 5.0V regulator (5 SOT23) Maxim: MAX8867EUK50+                  |
| VCC_OPAMP, VCC_VCO |     2 | Small yellow test points Keystone 5004                         |
| VSUPPLY            |     1 | Red banana plug Deltron 571-0500-01                            |
| -                  |     1 | PCB: MAX2880 EVKIT#                                            |

│

Figure 4a. MAX2880 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

Figure 4b. MAX2880 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

## Evaluates: MAX2880

Figure 5. MAX2880 EV Kit Component Placement-Component Side

<!-- image -->

Figure 6. MAX2880 EV Kit PCB Layout-Top Layer

<!-- image -->

│

## Evaluates: MAX2880

Figure 7. MAX2880 EV Kit PCB Layout-2nd Layer

<!-- image -->

Figure 8. MAX2880 EV Kit PCB Layout-3rd Layer

<!-- image -->

│

Evaluates: MAX2880

Figure 9. MAX2880 EV Kit PCB Layout-Bottom Layer

<!-- image -->

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX2880EVKIT# | EV kit |

│

## MAX2880 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION            | PAGES CHANGED   |
|-------------------|-----------------|------------------------|-----------------|
|                 0 | 2/14            | Initial release        | -               |
|                 1 | 8/19            | Updated Component List | 5               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitr\ and specifications without notice at an\ time.

│

Evaluates: MAX2880