<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX16928 evaluation kit (EV kit) is a fully assembled and tested surface-mount PCB that provides the voltages and features  required  for  automotive  thin-film  transistor (TFT),  liquid-crystal  display  (LCD)  applications.  The  EV kit includes a boost converter, a 3.3V regulator controller with external npn transistor, two gate voltage regulators, a single-stage positive charge pump, and a single-stage negative charge pump.

The EV kit can operate from 4.5V to 5.5V input voltages and  is  optimized  for  automotive  TFT-LCD  applications. The boost converter is configured for a 12V output that provides at least 400mA. The regulator controller output is  3.3V and provides at least 500mA. The positive-gate voltage regulator provides 18V output and the negativegate voltage regulator provides -5.9V.

| DESIGNATION               |   QTY | DESCRIPTION                                                                               |
|---------------------------|-------|-------------------------------------------------------------------------------------------|
| C1, C4, C22, C24          |     4 | 10 F F Q 20%, 25V X7R ceramic capacitors (1210) Murata GRM32DR71E106M TDK C3225X7R1E106M  |
| C2, C3, C5, C14, C25, C27 |     6 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K TDK C1608X7R1H104K |
| C6                        |     1 | 2.2 F F Q 10%, 10V X7R ceramic capacitor (0805) Murata GRM21BR71A225K                     |
| C7                        |     1 | 220pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H221K                       |
| C8                        |     1 | 22pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H220J                         |
| C9                        |     1 | 150pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H151J                        |
| C12, C13, C21             |     3 | 1 F F Q 10%, 25V X7R ceramic capacitors (0805) Murata GRM21BR71E105K                      |
| C23, C37, C38, C39        |     0 | Not installed, ceramic capacitors (1210)                                                  |

<!-- image -->

- S 4.5V to 5.5V Input Range
- S Output Voltages

12V Output at 400mA (Boost Converter)

3.3V Output at 500mA (Regulator Controller)

18V Output (Positive-Gate Voltage Regulator) -5.9V Output (Negative-Gate Voltage Regulator)

- S High-Frequency Operation 2.2MHz (Boost Converter)
- S Single-Stage Positive and Negative Charge Pumps
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| C26           |     1 | 4.7 F F Q 20%, 25V X7R ceramic capacitor (1206) Murata GRM31CR71E475M |
| D1, D6        |     2 | 200mA, 100V dual-series diodes (SOT23) Fairchild MMBD4148SE           |
| D2            |     1 | 3A, 30V Schottky diode (M Flat) Toshiba CMS02(TE12L,Q)                |
| D4            |     1 | 2A, 50V fast-recovery diode (SMB) Fairchild ES2A                      |
| JU1, JU2      |     2 | 3-pin headers                                                         |
| L1            |     1 | 3.3 F H, 9A power inductor Würth 744314330                            |
| P1            |     1 | -20V, -2.4A p-channel MOSFET (3 SuperSOT) Fairchild FDN304P           |
| Q1            |     1 | npn bipolar transistor (SOT23) Fairchild MMBT3904                     |
| Q2            |     1 | npn high-gain transistor (SOT89) Zetex ZXTN25012EZ                    |
| R1            |     1 | 30k I Q 1% resistor (0603)                                            |
| R2, R13       |     2 | 6.8k I Q 5% resistors (0603)                                          |
| R5            |     1 | 180k I Q 5% resistor (0603)                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX16928 Evaluation Kit Evaluates: MAX16928

## Features

| DESIGNATION   |   QTY | DESCRIPTION                  |
|---------------|-------|------------------------------|
| R6            |     1 | 169k I Q 1% resistor (0603)  |
| R7            |     1 | 10k I Q 1% resistor (0603)   |
| R9, R16, R17  |     3 | 10k I Q 5% resistors (0603)  |
| R10           |     1 | 100k I Q 5% resistor (0603)  |
| R11           |     1 | 133k I Q 1% resistor (0603)  |
| R12           |     1 | 12.1k I Q 1% resistor (0603) |
| R14           |     1 | 316k I Q 1% resistor (0603)  |

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Verify that a shunt is installed on pins 1-2 on jumper JU1.
- 2)  Verify that a shunt is installed on pins 2-3 on jumper JU2.
- 3)  Connect the positive terminal of the power supply to the INA PCB pad. Connect the negative terminal of the power supply to the PGNDP PCB pad closest to INA.
- 4)  Set the power-supply INA to 5V.
- 5)  Turn on the power supply.
- 6)  Verify  that  the  step-up  switching  regulator  (VSH) is 12V.
- 7)  Verify that the 3.3V regulator is 3.3V.

<!-- image -->

## MAX16928 Evaluation Kit

## Evaluates: MAX16928

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                               |
|---------------|-------|-----------------------------------------------------------|
| R15           |     1 | 51.1k I Q 1% resistor (0603)                              |
| R18           |     1 | 33 I Q 5% resistor (0603)                                 |
| U1            |     1 | TFT-LCD power supply (20 TSSOP-EP ) Maxim MAX16928AGUP/V+ |
| -             |     2 | Shunts                                                    |
| -             |     1 | PCB: MAX16928 EVALUATION KIT                              |

## Component Suppliers

| SUPPLIER                                               | PHONE        | WEBSITE                     |
|--------------------------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc.                 | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                                              | 847-803-6100 | www.component.tdk.com       |
| Toshiba America Electronic Components, Inc.            | 949-623-2900 | www.toshiba.com/taec        |
| Würth Electronik GmbH & Co. KG                         | 201-785-8800 | www.we-online.com           |
| Zetex Semiconductors (Division of Diodes Incorporated) | 805-446-4800 | www.diodes.com              |

Note: Indicate that you are using the MAX16928 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX16928	EV	kit
- 4.5V	to	5.5V,	2A	DC	power	supply
- Voltmeter
- 8)  Verify that the positive-gate voltage regulator (GH) is approximately 18V.
- 9)  Verify that the negative-gate voltage regulator (VGL) is approximately -5.9V.

## Detailed Description of Hardware

## Jumper Settings

Several jumper settings in the following tables illustrate features of the EV kit.

## Boost Circuitry and 3.3V Regulator Controller Enable Input (JU1)

The device's ENP pin enables the boost circuitry and the 3.3V regulator controller. F or normal operation, drive ENP high by installing a shunt on pins 1-2 on jumper JU1. For shutdown mode, drive ENP low by installing a shunt on pins 2-3 on JU1. See Table 1 for JU1 configuration.

## Table 1. Jumper Functions (JU1)

| SHUNT POSITION   | ENP PIN          | VSH AND 3.3V OUTPUTS   |
|------------------|------------------|------------------------|
| 1-2*             | Connected to INA | Enabled                |
| 2-3              | Connected to GND | Disabled               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 2. Jumper Functions (JU2)

| SHUNT POSITION   | SEQ PIN          | SUPPLY SEQUENCING ORDER   |
|------------------|------------------|---------------------------|
| 1-2              | Connected to INA | VSH, VGL, VGH             |
| 2-3*             | Connected to GND | VSH, VGH, VGL             |

## Supply Sequencing (JU2)

The  device's  SEQ  pin  controls  the  order  in  which  the VGH and VGL supplies are sequenced. When a shunt is installed on pins 1-2 on jumper JU2, VGL is turned on first followed by VGH. When a shunt is installed on pins 2-3, VGH is turned on first followed by VGL. See Table 2 for JU2 configuration.

## Output-Voltage Selection

## Boost Converter

The  EV  kit's  boost-converter  output  (VSH)  is  set  to 12V  by  feedback  resistors  R11  and  R12.  To  generate output voltages other than 12V, select R12 in the 10k I to 50k I range and select R11 according to the following equation:

<!-- formula-not-decoded -->

where  VVSH  is  the  desired  boost  output  voltage  and VFBP  is the  boost  converter's  feedback  set  point (1V typ). When increasing the boost output voltage, be careful  not  to  exceed  the  absolute  maximum  rating  of the CP pin (31V with INA = 5V and 29V with INA = 3.3V).

## Positive-Gate Voltage Regulator

The EV kit's positive-gate voltage regulator output (GH) is set to 18V by feedback resistors R6 and R7. To generate output voltages other than 18V, select R7 in the 10k I to 50k I range and select R6 according to the following equation:

<!-- formula-not-decoded -->

where VGH is the desired positive-gate regulator output voltage  and  VFBGH  is  the  positive-gate  feedback  set point (1V typ). With the installed charge-pump doubler, GH voltages greater than approximately 2 x VSH cannot be produced.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16928 Evaluation Kit

## Evaluates: MAX16928

## Negative-Gate Voltage Regulator

The EV kit's negative-gate voltage regulator output (VGL) is  set  to  -5.9V  by  feedback  resistors  R14  and  R15.  To generate  output  voltages  other  than  -5.9V,  select  R15 to  be  greater  than  20k I to  avoid  loading  down  the reference output. Select R14 according to the following equation:

<!-- formula-not-decoded -->

where VGL is the desired negative-gate regulator output voltage, VREF = 1.25V, and VFBGL is the negative-gate feedback set point (0.25V typ). Note that the negativegate voltage regulator is not short-circuit protected and can be damaged by overcurrent.

## Charge Pumps

The EV kit provides a single-stage positive charge pump (VCP)  and  single-stage  negative  charge  pump  (VCN). The output voltages generated on the storage capacitors are given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where  VSCHOTTKY  is  the  forward-voltage  drop  of  the Schottky diode and VD is the forward-voltage drop of the charge-pump diode.

## Evaluating Other Versions of MAX16928

The  EV  kit  comes  standard  with  the  MAX16928AGUP/ V+ IC installed, but can also evaluate several versions of  the  MAX16928.  The  IC  provides  a  variety  of  power options to meet the most common automotive TFT-LCD display-power requirements, as outlined in the Ordering Information table in the MAX16928 IC data sheet. Note some  components,  such  as  the  inductor  value  and compensation component values, may need to change when evaluating  other  versions  of  the  IC.  Refer  to  the Design  Procedure section  of  the  MAX16928  IC  data sheet for further details.

## MAX16928 Evaluation Kit Evaluates: MAX16928

<!-- image -->

Figure 1. MAX16928 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX16928 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX16928 Evaluation Kit

## Evaluates: MAX16928

Figure 3. MAX16928 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX16928 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16928EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX16928 Evaluation Kit

## Evaluates: MAX16928

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/11           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.