<!-- lastmod 2022-08-04 -->
## MAX2870/MAX2871 Evaluation Kits

## General Description

The MAX2870/MAX2871 evaluation kits (EV kits) simplify the testing and evaluation of the MAX2870 and MAX2871 ultra-wideband  phase-locked  loop  (PLL)  with  integrated voltage-control  oscillators  (VCOs).  Each  EV  kit  is  fully assembled and tested at the factory. Standard 50Ω SMA connectors  are  included  on  the  EV  kits  for  the  inputs and outputs to enable quick and easy evaluation on the test bench.

This document provides a Quick Start guide, a description of the EV kit circuit, a Troubleshooting Guide , the circuit schematic, a list of components for the EV kit, and diagrams for each layer of the PCB.

Note: This EV kit data sheet supports the MAX2870 (Rev B)  and  MAX2871  EV  kits.  Customers  using  MAX2870 (Rev A) EV kit can access the schematic, PCB layout, and user guide under the Help menu of the EV kit software.

## Quick Start

## Required Equipment

- MAX2870/MAX2871 EV kit board
- Mini-USB type A-to-type B cable (included)
- User-supplied Windows PC
- User-supplied spectrum analyzer or signal analyzer

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items from the EV kit  software.  Text  in bold  and  underlined refers  to items from the Windows operating system.

## Procedure

## Hardware Connection Guide

Each  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation:

- 1) Verify that all jumpers are in their default positions, as shown in Figure 1.
- 2) Connect the USB cable from the PC to the EV kit.
- 3) Connect  one  of  the  RFOUT  SMA  connectors  to  a signal analyzer or spectrum analyzer.
- 4) Terminate the remaining unused RFOUT ports with a 50Ω pad.

Evaluate: MAX2870/MAX2871

## Features

- Easy Evaluation of the MAX2870 and MAX2871
- 50Ω SMA Connectors
- All Critical Peripheral Components Included
- PC Control Software
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Software Installation and Evaluation Guide

- 1) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software, Max287X\_Setup\_1-1-x.zip.
- 2) Extract the zip file and run the installation file. Restart the PC after installation.
- 3) Run the MAX287x.exe file. Choose the correct IC type (MAX2870 or MAX2871) at the front page and click the Continue button. The EV kit GUI appears and looks similar to Figure 2.
- 4) Verify that USB Connected is displayed in green in the lower right-hand  corner of the GUI.
- 5) Verify that the EV kit TCXO (U2) frequency matches the EV kit software REF. FREQ . If not, enter the correct value in MHz (default is 50) and press the Enter key.
- 6) In the GUI, click on the Defaults button and then the Send All button located at the top of the GUI.
- 7) Enter the desired output frequency in MHz in the RF\_OUTA or RF\_OUTB edit box and press the Enter key.
- 8) Verify that the PLL Lock indicator in the lower righthand corner of the GUI is displayed in green.
- 9) Use the signal analyzer to verify the performance of the MAX2870 or MAX2871.

<!-- image -->

Figure 1. MAX2870/MAX2871 EV Kit Hardware Connection

<!-- image -->

## Troubleshooting Guide

## External Reference Source

The  default  on-board  crystal  oscillator  frequency  is 50MHz. To use a different reference frequency, perform the following steps:

- 1) Remove jumper JP14 (disables on-board XTAL oscillator).
- 2) Apply a reference signal to the REFIN SMA port, (power  &gt; 0 dBm).
- 3) Update the REF. FREQ . value in the EV kit GUI .
- 4) Program the IC to the desired frequency.
- 5) Optional: It is recommended to measure the reference-source phase noise and check the

EE-Sim is a registered trademark of Maxim Integrated Products, Inc.

MAX2870 simulated phase noise (using the Maxim EE-Sim® PLL tool). Note: If the reference-source phase noise is poor, it could impact the ICs' output phase noise.

## RF Output Level

There is a 3dB pad at each RFOUT port. The purpose of these  3dB  pads  is  to  provide  reasonable  matched  load to the ICs' outputs when unused. Therefore, direct power measurement at the EV kit's RF OUT SMA ports is 3dB lower  than  the  actual  output  level.  To  measure  the  true output level, remove the 3dB pads and terminate all active unused ports with a 50Ω load.

│

Evaluate: MAX2870/MAX2871

Figure 2. MAX2870/MAX2871 EV Kit Software GUI

<!-- image -->

## Export/Import Full Register Settings

To  export  the  full  register  settings  from  the  MAX2870/ MAX2871, perform the following steps:

- Click on Reg → Clip in the lower left-hand corner of the GUI. The registers are then saved to the clipboard.
- Paste the clipboard to any text editor.

To import full register settings to the MAX2870/MAX2871, perform the following steps:

- Copy the register settings (comma delimited) from a text editor to the clipboard.
- Click on Clip → Reg in the lower left-hand corner of the GUI.
- Click the Send All button in the top right-hand corner of the GUI.

│

## MAX2870/MAX2871 Evaluation Kits

## Component List, PCB Layout, and Schematics

See the following  links  for  component  information,  PCB layout diagrams, and schematics.

- MAX2870/MAX2871 EV BOM
- MAX2870/MAX2871 EV PCB Layout
- MAX2870/MAX2871 EV Schematics

Evaluate: MAX2870/MAX2871

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| MAX2870VKIT# | EV Kit |
| MAX2871VKIT# | EV Kit |

# Denotes RoHS compliant.

Note: Customers using older versions of the MAX2870 EV kit can access the EV kit data sheet from the Help menu in the software GUI.

│

## MAX2870/MAX2871 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                    | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------|-----------------|
|                 0 | 9/13            | Initial release                                                | -               |
|                 1 | 10/14           | Added MAX2871 to data sheet                                    | 1-15            |
|                 2 | 11/15           | Step 4 added to hardware connections to terminate unused ports | 1               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim InteJrated reserYes the riJht to chanJe the circuitry and specifications without notice at any time.

│

Evaluate: MAX2870/MAX2871

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## MAX2870/MAX2871 Bil Value= open or NPI, means Do Not install

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

|   Item |   Qty | Reference          | Value              | Toler   | Description                            | Part Name                                  | Manufacturer   | Part Number       |
|--------|-------|--------------------|--------------------|---------|----------------------------------------|--------------------------------------------|----------------|-------------------|
|      1 |     1 | C72                | 10nF               | 10%     | Capacitor                              | 0.01UF_10%_TR\GRM155R71E\610MURA, 10nF,10% |                | GRM155R71E103K    |
|      2 |     5 | C28-29 C41 C44 C71 | 0.1uF              | 10%     | 0603 Capacitor                         | 0.1UF_10%_TR\GRM188R71C\610MURA,0 .1uF,10% |                | GRM188R71C104K    |
|      3 |     4 | D1 D3-5            | Green LED          |         | GREEN LED                              | 0603_LED,Green LED                         |                | LT L29S-P2R1-25-Z |
|      4 |     1 | D2                 | Diode              |         | GENERIC DIODE AXIAL LEAD               | 1N4001,Diode                               |                | 1N4001            |
|      5 |     2 | C38 C56            | 330pF              | 10%     | 0402 Capacitor                         | 330PF_10%_TR\GRM155R71H\610MURA, 330pF,10% |                | GRM155R71H331K    |
|      6 |     2 | C42-43             | 33pF               | 5%      | 0402 Capacitor                         | 33PF_5%_TR\GRM1555C1H\610MURA,33 pF,5%     |                | GRM1555C1H330J    |
|      7 |     1 | U6                 | SN74LV07ADR        |         | Hex Buffer/Driver OC                   | 74LV07A,SN74LV07ADR                        |                | SN74LV07ADR       |
|      8 |     1 | GNDSUPPLY          | Bananna Plug Black |         | Red Bananna Plug                       | BANANNA_JACK,Bananna Plug Black            |                | 571-0500-01       |
|      9 |     1 | VSUPPLY            | Bananna Plug Red   |         | Red Bananna Plug                       | BANANNA_JACK,Bananna Plug Red              |                | 571-0500-01       |
|     10 |     0 | S1                 | NPI                |         | Shield                                 | BMIS-203MOD1,NPI                           |                | BMI-S-205         |
|     11 |     2 | C48 C50            | 4.7 uf             |         | 0805 Capacitor                         | CAP0805MIL,4.7 uf                          | MURATA         | GRM219R61A475K    |
|     12 |     2 | C23 C37            | 10uF               | 10%     | Tantalum Capacitor - C-Case            | CAPT6032N,10uF,10%                         |                | TAJC106K016R      |
|     13 |     1 | Y1                 | ECS-60-20-5PX-TR   |         | 6 MHz Crystal                          | CSM-7,ECS-60-20-5PX-TR                     |                | ECS-60-20-5PX-TR  |
|     14 |     1 | U2                 | CWX823-050.0M      |         |                                        | CWX8XX_5X7MM,CWX823-050.0M                 |                | CWX823-050.0M     |
|     15 |     0 | INTF2400           | Open               |         | 0.1 Centers 2x10 Header                | INTERFACE_2300\730\HEAD,Open               |                | PEC36DAAN         |
|     16 |     1 | JP14               | 2 Pin Header       |         | 2 Pin In-Line Header - 100 Mil Centers | JUMPER2,2 Pin Header                       |                | PEC36SAAN         |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

。。。

。。

<!-- image -->

。

.

?

。

。

?

。

：

C

L

：

OO

O

。

:

.

8

!

.

O

·

+

.

O

+

?

·

。。

：

+

+

B2e B20

8

<!-- image -->

<!-- image -->