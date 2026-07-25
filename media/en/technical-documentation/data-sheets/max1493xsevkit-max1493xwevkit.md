<!-- lastmod 2022-08-04 -->
## MAX1493X Evaluation Kit

## General Description

The MAX1493X evaluation kit (EV kit) demonstrates the functionality of the MAX1493X 4-channel, unidirectional, digital isolators in a 16-pin, SOIC surface-mount package. The functionality and performance of the QSOP versions (MAX1413x) can be tested indirectly by using this EVkit populated  with  any  of  the  equivalent  narrow  or  wide SOIC (MAX1493x) devices. The functionality and electrical  performance of  the QSOP versions are identical to their  corresponding  SOIC  versions. The  EV  kit  features two  independent  isolated  power  supplies  independently adjustable to +5V.

Evaluates: MAX14130, MAX14131,

MAX14930, MAX14931, MAX14932,

MAX14934, MAX14935, MAX14936

## Features

- Ease of Use
- Easy Powering Through Micro-USB or Test Points
- SMA Connectors to Connect to External Equipment
- Guaranteed Up to 5kV RMS  Isolation (for the Wide-Body SOIC Version)
- Also Evaluates the 2.75KV RMS  Versions.

Ordering Information appears at end of data sheet.

## MAX1493X Wide-Body Evaluation Kit Board Photo

<!-- image -->

<!-- image -->

## MAX1493X Evaluation Kit

## Quick Start

## Required Equipment

- MAX1493X EV kit
- MAX1493X device separated sampled
- Two 5V DC power supplies or USB cables with a micro-B connector
- Signal/function generator
- Oscilloscope

## Procedure

The  MAX1493X  EV  kit  has  everything  except  the  DUT installed.  The  user  can  install  the  desired  flavor  of the  MAX1493X  family  of  unidirectional  isolators.  Once installed, follow the steps below to verify board operation:

- 1) Connect the DC power supplies between the MAX1493X EV kit's VDDA/VDDB and GNDA/GNDB test points.
- 2) Turn on the DC power supplies and set to 5V, then enable the power-supply output.

Note: It is also possible to power the MAX1493X EV kit with standard USB ports. To do so, connect the micro-B-end of the USB cables into PA/PB on the board. Connect the A-end of the USB cable into the USB ports. Please ensure that only one type of supply is used on either side (USB or DC power supply).

- 3) Connect any signal to the SMA connectors or test points and observe the isolated signal on the other side using an oscilloscope.

Figure 1. Simplified Schematic Shown for MAX1493X

<!-- image -->

Evaluates: MAX14130, MAX14131,

MAX14930, MAX14931, MAX14932,

MAX14934, MAX14935, MAX14936

## Detailed Description of Hardware (or Software)

The MAX1493X EV kit is powered from two +5V supplies, as described below.

## External Power Supplies

Power  on  the  MAX1493X  EV  kit  is  derived  from  two +5V sources. Connect external supplies to the +5V and GNDA test points, or connect a micro-B USB cable to the on-board  PA/PB  connectors  to  provide  the  5V.  Both options have a reverse-current protection diode.

The MAX1493X level-shifts the data and control signals, transmitting them across the isolation barrier. Each supply is  set  independently and can be present over the entire specified range of the device, regardless of the level or presence of the other supply.

Figure 1 is a simplified schematic showing the connections for evaluating the MAX1493X in a simple microprocessor interface.  The  MAX1493X  level-shifts  the  signals  and transmits them across the isolation barrier.

│

## MAX1493X Evaluation Kit

## Termination

Each  input  and  output  has  an  unpopulated  resistor  and capacitor to GND\_ to allow terminating based on customer requirements.

Figure 2. MAX1493X EV Kit Component Placement Guide (Top Silkscreen)

<!-- image -->

Evaluates: MAX14130, MAX14131, MAX14930, MAX14931, MAX14932,

MAX14934, MAX14935, MAX14936

## Jumpers

Two jumpers (ENA/ENB) are provided to enable either side of  the  isolation  barrier.  These  are  active-high  signals.  To enable each side, connect to VDDA/VDDB, respectively.

Figure 3. MAX1493X EV Kit PCB Layout (Top Layer)

<!-- image -->

Figure 4. MAX1493X EV Kit PCB Layout (Bottom Layer)

<!-- image -->

│

## MAX1493X Evaluation Kit

## MAX1493X EV Schematic

Evaluates: MAX14130, MAX14131,

MAX14930, MAX14931, MAX14932,

MAX14934, MAX14935, MAX14936

<!-- image -->

│

## MAX1493X Evaluation Kit

## MAX1493X Bill of Materials

| PART                      |   QTY | MFG PART #        | MOUSER PART NUMBERS   | VALUE           | COMMENTS   |
|---------------------------|-------|-------------------|-----------------------|-----------------|------------|
| A1-A4, B1-B4              |     8 | 142-0701-851      | 530-142-0701-801      | 142-0701-851    |            |
| C1, C2                    |     2 | EMK107BJ104KAH    | 963-EMK107BJ104KAHT   | 0.1UF           |            |
| C3, C4                    |     2 | LMK212F106ZG-T    | 963-LMK212F106ZG-T    | 10UF            |            |
| D1-D4                     |     4 | MBR130T1G         | 863-MBR130T3G         | MBR130T1G       |            |
| ENA, ENB                  |     2 | 961103-6404-AR    | 517-9611036404AR      | PEC03SAAN       |            |
| HDR3, HDR4                |     2 | 961102-6404-AR    | 517-9611026404AR      | PEC02SAAN       |            |
| HEADER1, HEADER2          |     2 | 961107-6404-AR    | 517-9611076404AR      | PEC07SAAN       |            |
| GNDA, GNDB                |     4 | 5001              | 534-5001              | N/A             |            |
| VDDA, VDDB                |     4 | 5000              | 534-5000              | N/A             |            |
| PA,PB                     |     2 | 10103593-0001LF   | 649-10103593-0001LF   | 10103593-0001LF |            |
| R7-R10                    |     4 | RCV0805499KFKEA   | 71-RCV0805499KFKEA    | 499K            |            |
| TPA1-TPA4, TPB1-TPB4      |     8 | 5004              | 534-5004              | N/A             |            |
| TP_ENA, TP_ENB            |     2 | 5002              | 534-5002              | N/A             |            |
|                           |     1 | EPCB1493XW        |                       | PCB             |            |
| U1                        |     1 | MAX1493X          |                       |                 |            |
| SU1-SU4                   |     4 | 969102-0000-DA    | 517-9691020000DA      | STC02SYAN, JMP  |            |
| C5-C8, C18, C19, C23, C24 |     8 | GRM2195C1H103JA01 | 81-GRM215C1H103JA01D  |                 | PACKOUT    |
| R1-R6, R11, R12           |     8 | ERJ-P06J472V      | 667-ERJ-P06J472V      |                 | PACKOUT    |

## Ordering Information

| PART            | TYPE                                  |
|-----------------|---------------------------------------|
| MAX1493XWEVKIT# | EVKIT (for wide-body SOIC packages)   |
| MAX1493XSEVKIT# | EVKIT (for narrow-body SOIC packages) |

#Denotes RoHS compliant.

Evaluates: MAX14130, MAX14131,

MAX14930, MAX14931, MAX14932,

MAX14934, MAX14935, MAX14936

│

## MAX1493X Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                         | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------|-----------------|
|                 0 | 6/15            | Initial release                                     | -               |
|                 1 | 8/15            | Expanded part numbers that this document applies to | 1, 2, 4         |
|                 2 | 8/16            | Added MAX14130 and MAX14131 part numbers            | 1-6             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,ntegrated reserves the right to change the circuitr\ and specifications without notice at an\ time.

│

Evaluates: MAX14130, MAX14131,

MAX14930, MAX14931, MAX14932,

MAX14934, MAX14935, MAX14936