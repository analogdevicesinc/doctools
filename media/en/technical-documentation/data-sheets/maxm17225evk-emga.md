<!-- lastmod 2023-06-08 -->
## MAXM17225 Evaluation Kit

Evaluates: MAXM17225

## General Description

The  MAXM17225  is  a  nanoPower,  300nA  Quiescent current,  synchronous  step-up  DC-DC  converter  module available in the eMGA package. This datasheet provides an overview of how to use the MAXM17225 EV kit (EV kit) with detailed procedure and circuit connections to test the Boost modules' functionality.

The EV kit ships with boost module MAXM17225AMB+T placed in-circuit. The product is RoHS compliant.

## Features and Benefits

- •
- EV Kit Board Evaluates MAXM17225AMB+T · 10 lead - 2.1mm x 2.6mm- only package variant.
- 0.4V to 5.5V Input Range, V IN MIN Startup: 0.88V.
- 1.8V to 5V Resistor Selectable Output Voltage.
- 1A Peak Inductor Current Limit.
- Proven 2-Layer 1-oz Copper PCB Layout.
- Demonstrates Compact Solution Size.
- Fully Assembled and Tested.

Ordering Information appears at end of data sheet.

## MAXM17225 EV Kit Photo

Figure 1. MAXM17225 EV Kit

<!-- image -->

## Quick Start

## Required Equipment

- MAXM17225 EV Kit
- 5.5 V, 2A DC Power supply
- Electronic load capable of 100mA
- Digital Voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation.

## Caution:  Do  not  turn  on power  supply  until  all connections are completed.

1.  Verify that jumper JU1 is in its default position as shown in Table 1.
2.  Connect  the  DC  power  supply  between  the  IN  and nearest GND terminal posts.
3.  Connect the 100mA electronic load between the OUT and nearest GND terminal posts.
4.  Connect the DVM between the OUT and nearest GND terminal posts.
5.  Set the Power Supply Input to EV kit to 1.8V. Turn ON.
6.  Enable the electronic load.
7. Verify  that  the  voltage  at  the  OUT  terminal  post  is approximately 3.3V.

## MAXM17225 EV Kit Files

| FILE                    | DESCRIPTION              |
|-------------------------|--------------------------|
| MAXM17225 EV BOM        | EV Kit Bill of Materials |
| MAXM17225 EV PCB layout | EV Kit Layout            |
| MAXM17225 EV Schematic  | EV Kit Schematic Diagram |

## Table 1. EN Jumper Connection Guide

| JU1 SHUNT POSITION   | DESCRIPTION        |
|----------------------|--------------------|
| 1-2*                 | Enabled. EN = IN   |
| 2-3                  | Disabled. EN = GND |

<!-- image -->

## Detailed Description of Hardware

The following documentation should be used with the MAXM17225EVKIT#EMGA PCB Evaluation kit:

- MAXM17225 IC Datasheet
- MAXM17225EVK#EMGA EV kit Datasheet (this document)

## Hardware Description

## Enabling/ Disabling the Device

The hardware has an EN device pin which can be operated through a Jumper connector JU1. The default position is set to EN = IN, see Table 1 , meaning the device is enabled. Make connections to the EV kit as listed in the Procedure above and power up the device in the required sequence for reliable operation.

## Setting Output Voltage

The  MAXM17225  has  a  single  external  RSEL  resistor  used  for  Output  voltage  configuration.  R1  is  the  ref  des  in MAXM17225 EV kit for the RSEL resistor. Refer to the MAXM17225 datasheet for Output Voltage Vs. corresponding RSEL resistor . The default value of R1 that ships with EV kit is 80.6k Ω , which sets the output voltage to 3.3V nominal. The EV kit uses 0402, a 1% tolerance resistor for R1. Bear in mind that as this is a boost module, the input voltage applied should be less than the output voltage set by R1 value to ensure the module regulates the output voltage reliably upon power up.

## Integrated inductor

The Boost module uses an integrated 1µH inductor part from Murata. The manufacturer part # is DFE201610E-1R0M=P2.

## LX pin (Switch node)

In the MAXM17225, the boost inductor is integrated between the IN and LX pins. There is no need for an external inductor. As a result, the LX pin should be left floating, as it is solely utilized for programming by the manufacturer.

## Input Capacitor

The input capacitors C1 and C2 reduce the peak current drawn from the battery or input power source and reduces the switching  noise  in  the  module.  C1  is  not  populated  and  C2  is  a  10µF  ceramic  capacitor  having  X7R  temperature characteristics making it suitable for 125°C module operation.

## Output Capacitor

The output capacitors C3 and C4 are required to keep the output voltage ripple small and to ensure loop stability. The capacitors must have low impedance at the switching frequency. C3 is a 10µF ceramic capacitor having X7R temperature characteristics making it suitable for 125ºC module operation. C4 is not populated.

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAXM17225EVK#EMGA | EV Kit |

#Denotes RoHS-compliant.

## MAXM17225 EV Kit Schematic Diagram

<!-- image -->

MAXM17225 EV Kit Schematic Diagram

## MAXM17225 EV Kit Bill of Materials

| ITEM   | QTY   | REF DES               | MAX INV#           | MFG PART#                    | MFR                   | DESCRIPTION                                                                           |
|--------|-------|-----------------------|--------------------|------------------------------|-----------------------|---------------------------------------------------------------------------------------|
| 1      | 2     | C2, C3                | 20-0010U-R1A       | CL10B106MQ8NRN               | SAMSUNG ELECTRONICS   | CAP; SMT (0603); 10UF; 20%; 6.3V; X7R; CERAMIC                                        |
| 2      | 1     | EN                    | 02-TPMINI5002-00   | 5002                         | KEYSTONE              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE;              |
| 3      | 4     | GND, GND2, IN, OUT1   | 01-10807400011P-80 | 108-0740-001                 | EMERSON NETWORK POWER | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                              |
| 4      | 4     | GND5, GND6, IN1, OUT2 | 02-15142-00        | 1514-2                       | KEYSTONE              | TERMINAL; TURRET; PIN DIA = 0.090IN; TOTAL LENGTH=0.105IN, RECOMMENDED FOR 0.062' PCB |
| 5      | 1     | JU1                   | 01-PEC03SAAN3P-21  | PEC03SAAN                    | SULLINS               | 3- PIN BERG CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS, BLACK          |
| 6      | 2     | LX, OUT               | 01-131435300-10    | 131-4353-00                  | TEKTRONICS            | TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS; NOTE: CUSTOM FOOTPRINT                   |
| 7      | 1     | R1                    | 80-080K6-23        | ERJ-2RKF8062                 | PANASONIC             | RES; SMT (0402); 80.6K; 1%;                                                           |
| 8      | 1     | R6                    | ER111000004224     | RC0603FR-070RL               | YAGEO                 | RES; SMT (0603); 0; 1%; JUMPER;                                                       |
| 9      | 1     | SU1                   | 02-JMPFS1100B-00   | S1100-B; SX1100-B; STC02SYAN | KYCON; KYCON; SULLINS | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK                                   |
| 10     | 1     | TP1                   | 02-TPMINI5001-00   | 5001                         | KEYSTONE              | GND TEST POINT; BLACK, PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN;          |
| 11     | 1     | U1                    | MAXM17225AMB+T     | MAXM17225AMB+T               | MAXIM INTEGRATED      | EVKIT PART - IC; TINY 0.4V - 5.5V INPUT; 300nA IQ; 1A PEAK NANOPOWER BOOST MODULE     |
| 12     | 4     | MH1-MH4               | 02-SOM35016H-00    | 9032                         | KEYSTONE              | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON             |
| 13     | 1     | PCB                   | MAXM17225EVK#EMGA  | MAXM17225EVK#EMGA            | MAXIM INTEGRATED      | MAXM17225_EVKIT_REV B, BOOST MODULE MAXM17225                                         |
| 14     | 0**   | C1, C4                | 20-0010U-R1A       | CL10B106MQ8NRN               | SAMSUNG ELECTRONICS   | CAP; SMT (0603); 10UF; 20%; 6.3V; X7R; CERAMIC                                        |
| TOTAL  | 24    |                       |                    |                              |                       |                                                                                       |

## MAXM17225 EV Kit PCB Layout Diagrams

MAXM17225 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAXM17225 EV Kit PCB Layout-Top View

<!-- image -->

MAXM17225 EV Kit PCB Layout-Bottom View

<!-- image -->

MAXM17225 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

## MAXM17225 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 05/21           | Release for Market Intro | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

Evaluates: MAXM17225