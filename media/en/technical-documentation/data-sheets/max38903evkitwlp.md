<!-- lastmod 2022-10-10 -->
## MAX38903 WLP Evaluation Kit

## General Description

The  MAX38903  wafer-level  package  (WLP)  evaluation kit  (EV  kit)  evaluates  the  MAX38903C/MAX38903D  IC family of low noise linear regulators. The EV kit operates over an input range of 1.7V to 5.5V, provides an output voltage  range  from  0.6V  to  5.0V,  and  delivers  up  to  1A of current. The EV kit comes with the MAX38903CANL+ installed.

## Features

- Evaluates the MAX38903C/MAX38903D IC in a 9-ball (1.4mm x 1.4mm) WLP
- 1.7V to 5.5V Input Range
- 0.6V to 5.0V Resistor Configurable Output Voltage (MAX38903C, Onboard with Output Set to 3.3V)
- 1.2V to 5.0V Factory-Preset Output Voltage (MAX38903D, with IC Replacement)
- Up to 1A Output Current
- Proven 2-Layer 1-oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX38903 WLP EV Kit Files

| FILE                           | DECRIPTION              |
|--------------------------------|-------------------------|
| MAX38903 WLP EV Kit BOM        | EV Kit Bill of Material |
| MAX38903 WLP EV Kit PCB Layout | EV Kit Layout           |
| MAX38903 WLP EV Kit Schematic  | EV Kit Schematic        |

Ordering Information appears at end of data sheet.

Evaluates: MAX38903C/MAX38903D

## Quick Start

## Required Equipment

- MAX38903 WLP EV Kit
- 5.5V, 1A DC power supply
- Electronic load capable of 1A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  jumper  JU1  is  in  its  default  position  as shown in Table 1.
- 2) Connect the 5.5V power supply between the IN1 and nearest GND1 terminal posts.
- 3) Connect  the  1A  electronic  load  between  the  OUT1 and nearest GND1 terminal posts.
- 4) Connect  the  DVM  between  the  OUT1  and  nearest GND1 terminal posts.
- 5) Turn on the power supply.
- 6) Enable the electronic load.
- 7) Verify that the voltage at the OUT1 terminal post is approximately 3.3V.

<!-- image -->

## MAX38903 WLP Evaluation Kit

## Detailed Description of Hardware

The MAX38903 WLP EV kit evaluates the MAX38903C/ MAX38903D  IC  family.  The  MAX38903C/MAX38903D are low noise linear regulators that deliver 1A of output current with only 7µV RMS  of output noise from 10Hz to 100kHz. These regulators require only 100mV of input-tooutput headroom at full load.

The  MAX38903  WLP  EV  kit  operates  over  an  input range  of  1.7V  to  5.5V.  The  EV  Kit  comes  with  the MAX38903CANL+  installed  and  the  output  is  resistor configured  to  3.3V  and  can  deliver  1A  of  current.  The output voltage on the MAX38903C can be reconfigured to other voltages from 0.6V to 5.0V by replacing feedback resistors  R1  and  R2.  Refer  to  the MAX38903  IC  data sheet for feedback resistor calculation.

## Component Suppliers

| SUPPLIER                                | WEBSITE            |
|-----------------------------------------|--------------------|
| Murata/TOKO                             | www.murata.com     |
| TDK                                     | www.tdk.com        |
| Samsung Electro-Mechanics America. Inc. | www.samsungsem.com |

Note: Indicate that you are using the MAX38903C/D when contacting these component suppliers.

## Evaluates: MAX38903C/MAX38903D

## EN for the MAX38903C/MAX38903D

The EV kit provides a jumper JU1 to enable or disable the MAX38903C (or the MAX38903D after IC replacement). Refer to Table 1 for jumper setting of jumper JU1.

## Evaluating the MAX38903D

The EV Kit can evaluate the MAX38903D after IC (U1) replacement.  The  MAX38903D  can  be  factory  trimmed to  any  voltage  between  0.7V  and  5.0V  in  50mV  steps. Contact  the  factory  to  order  the  MAX38903D  with  the desired factory-preset output voltages.

## Table 1. EN on MAX38903C/D (JU1)

| JU1 SHUNT POSITION   | DESCRIPTION         |
|----------------------|---------------------|
| 1-2*                 | Enabled. EN = IN1   |
| 2-3                  | Disabled. EN = GND1 |

* Default position.

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX38903EVKIT#WLP | EV Kit |

# Denotes RoHS compliant.

│

## MAX38903 WLP EV Bill of Materials

| ITEM REF_ DES     | DNI/ DNP   | QTY MFG PART #                                                               | MFG                              | VALUE           | DESCRIPTION                                                                                                                                              |
|-------------------|------------|------------------------------------------------------------------------------|----------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 C1              | -          | 1 C0603C473K5RAC; GRM188R71H473KA61; GCM188R71H473KA55; CGA3E2X7R1H473K080AA | KEMET; MURATA; MURATA;TDK        | 0.047UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.047UF; 50V; TOL=10%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                  |
| 2 C2, C3          | -          | 2 CL10B106MQ8NRN                                                             | SAMSUNG ELECTRONICS              | 10UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; MODEL=CL SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                              |
| 3 GND1, IN1, OUT1 | -          | 3 108-0740-001                                                               | EMERSON NETWORK POWER            | 108-0740-001    | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                                 |
| 4 JU1             | -          | 1 PEC03SAAN                                                                  | SULLINS                          | PEC03SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                |
| 5 R1              | -          | 1 CRCW0603909KFK                                                             | VISHAY DALE                      | 909K            | RESISTOR; 0603; 909K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                   |
| 6 R2              | -          | 1 CRCW06032003FK                                                             | VISHAY DALE                      | 200K            | RESISTOR; 0603; 200K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                      |
| 7 SU1             | -          | 1 STC02SYAN                                                                  | SULLINS ELECTRONICS CORP.        | STC02SYAN       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                                  |
| 8 TP4, TP5        | -          | 2 131-4353-00                                                                | TEKTRONICS                       | 131-4353-00     | CONNECTOR;WIREMOUNT;CIRCUITBOARDTESTPOINTMINIATUREPROBE;STRAIGHT;4PINS TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR |
| 9 TP_GND1         | -          | 1                                                                            | 5001 KEYSTONE                    | N/A             | BRONZE WIRE SILVER PLATE FINISH; RED; PHOSPHOR                                                                                                           |
| 10 TP_OUT1        | -          | 1                                                                            | 5000 KEYSTONE                    | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BRONZE WIRE SILVER PLATE FINISH;                                                       |
| 11 U1             | -          | 1 MAX38903CANL+                                                              | MAXIM                            | MAX38903CAN L+  | EVKIT PART-IC; PKG. CODE: N91D1-1; PKG. OUTLINE NO.: 21-100257                                                                                           |
| 12 PCB            | -          | 1 MAX38903WLP                                                                | MAXIM                            | PCB             | PCB:MAX38903WLP                                                                                                                                          |
| 13 BUMP1- BUMP4   | DNI        | 4 SJ-5003(BLACK)                                                             | 3M ELECTRONIC SOLUTIONS DIVISION | SJ- 5003(BLACK) | BUMPER; BLACK-HEMISPHERICAL SHAPE EVKIT EH0231; 0.44D/0.2BH; RESILIENT ELASTOMER POLYURETHANE                                                            |
| 14 C4             | DNP        | 0 N/A                                                                        | N/A                              | OPEN            | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                                                 |
| 15 R3             | DNP        | 0 N/A                                                                        | N/A                              | SHORT           | PACKAGE OUTLINE 0603 RESISTOR                                                                                                                            |
| TOTAL             |            | 20                                                                           |                                  |                 |                                                                                                                                                          |

NOTE: DNI--&gt; DO NOT INSTALL(PACKOUT) ; DNP--&gt; DO NOT PROCURE

## MAX38903 WLP EV Kit Schematics

<!-- image -->

│

## MAX38903 WLP EV PCB Layout Diagrams

MAX38903 WLP EV-Top Silkscreen

<!-- image -->

MAX38903 WLP EV-Bottom View

<!-- image -->

MAX38903 WLP EV-Top View

<!-- image -->

MAX38903 WLP EV-Bottom Silkscreen

<!-- image -->

│

## MAX38903 WLP Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/18           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. Ma[iP ,ntegrated reVerveV the right to change the circuitr\ and VpecificationV Zithout notice at an\ tiPe.

│

Evaluates: MAX38903C/MAX38903D