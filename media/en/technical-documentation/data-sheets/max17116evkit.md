<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX17116 Evaluation Kit

## Evaluates: MAX17116 in a 12-Pin UTDFN Package

## General Description

The  MAX17116  evaluation  kit  (EV  kit)  is  a  fully  assembled  and  tested  surface-mount  PCB  that  evaluates  the MAX17116 dual-output  DC/DC  power  supply  for  activematrix  organic  light-emitting  diode  (AMOLED)  displays, available  in  a  12-pin  UTDFN  package  with  an  exposed pad. The EV kit includes dual switch-mode power-supply (SMPS) outputs, a fixed 4.6V PWM step-up regulator, and an  adjustable  (-5.4V  to  -1.5V)  PWM  inverting  regulator. The EV kit operates from a +2.3V to +4.2V single power supply.

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| C1, C3        |     2 | 4.7 F F Q 10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A475K   |
| C2, C4        |     2 | 10 F F Q 10%, 10V X7R ceramic capacitors (0805) Murata GRM21BR71A106K |
| C5, C6        |     0 | Not installed, ceramic capacitors (0805)                              |
| JU1           |     1 | 3-pin header                                                          |
| L1, L2        |     2 | 4.7 F H, 0.9A low-profile inductors Sumida CDH36D07HF-4R7MC           |

## Features

- S +2.3V to +4.2V Input Range
- S High-Performance PWM Step-Up Regulator
- S High-Performance PWM Inverting Regulator
- S 1.4MHz Switching Frequency
- S Shutdown Control
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                         |
|---------------|-------|-------------------------------------------------------------------------------------|
| R1            |     0 | Not installed, resistor-short PC trace (0603)                                       |
| U1            |     1 | Dual-output DC/DC power supply for AMOLED displays (12 UTDFN-EP) Maxim MAX17116EVC+ |
| -             |     1 | Shunt                                                                               |
| -             |     1 | PCB: MAX17116 EVALUATION KIT                                                        |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Sumida Corp.                           | 847-545-6700 | www.sumida.com              |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

Note: Indicate that you are using the MAX17116 when contacting these component suppliers.

<!-- image -->

- MAX17116 EV kit
- +2.3V to +4.2V, 1A power supply (VIN)
- Two digital voltmeters

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Verify  that  jumper  JU1  is  in  the  default  position,  as shown in Table 1.
- 2)  Connect  the  positive  terminal  of  the  power  supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3)  Connect  the  first  voltmeter  across  the  ELVDD  PCB pad and the nearest PGND PCB pad.
- 4)  Connect the second voltmeter across the ELVSS PCB pad and the nearest PGND PCB pad.
- 5)  Turn on the DC power supply.
- 6)  Verify that the voltmeters display V ELVDD  = +4.6V and VELVSS  = -4.9V.

## Detailed Description of Hardware

The MAX17116  EV  kit  includes two current-mode 1.4MHz  SMPS  regulators  for  AMOLED  displays.  The positive supply is provided by a step-up regulator with a synchronous  rectifier.  The  negative  supply  is  provided

## Table 1. Jumper JU1 Function

| SHUNT POSITION   | EN PIN                                             | SMPS REGULATORS                                               |
|------------------|----------------------------------------------------|---------------------------------------------------------------|
| 1-2*             | Connected to IN                                    | V ELVDD = +4.6V V ELVSS = -4.9V                               |
| 2-3              | Connected to AGND                                  | V ELVDD = 0V V ELVSS = 0V                                     |
| Not installed    | External pulses must be applied to the EN test pad | V ELVDD = +4.6V V ELVSS = -5.4V to -1.5V (based on EN pulses) |

<!-- image -->

## MAX17116 Evaluation Kit

## Evaluates: MAX17116 in a 12-Pin UTDFN Package

## Quick Start

## Recommended Equipment

by  an  inverting  regulator  with  a  synchronous  rectifier. The step-up regulator output is a fixed voltage of +4.6V and the inverting regulator output is adjustable from -5.4V to -1.5V through the single-wire EN serial interface. The EV kit operates from a +2.3V to +4.2V single power supply.

## Step-Up Regulator

The EV kit includes a step-up DC-DC converter with  an integrated  power  MOSFET  switch  and  synchronous rectifier.  The  step-up  regulator  output  (ELVDD)  has  a fixed voltage of +4.6V and can provide an output current of 250mA.

## Inverting Converter

The  EV  kit  contains  an  inverting  DC-DC  converter  with integrated power MOSFET switch and synchronous rectifier. The inverting regulator output (ELVSS) is adjustable from  -5.4V  to  -1.5V  and  can  provide  an  output  current of  250mA.  The  ELVSS  output  voltage  can  be  adjusted through the single-wire EN serial interface.

## Enable Input and Serial Interface Input

The  EV  kit  features  a  3-pin  jumper  (JU1)  to  control  the enable input and an EN test pad to access the serial interface input. Connect EN to IN for normal operation. Connect EN to AGND to place the device into shutdown mode.

The  enable  pin  is  also  used  as  a  serial-interface  input to adjust the inverting converter output voltage. With no shunts installed on jumper JU1, connect an external pulse generator at the EN test pad and send the required serial pulses.  Refer  to  the EN  Serial  Interface section  in  the MAX17116 IC data sheet for a more detailed description. Table 1 lists the selectable jumper options.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17116 Evaluation Kit

## Evaluates: MAX17116 in a 12-Pin UTDFN Package

<!-- image -->

Figure 1. MAX17116 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17116 Evaluation Kit

## Evaluates: MAX17116 in a 12-Pin UTDFN Package

<!-- image -->

Figure 2. MAX17116 EV Kit Component Placement GuideComponent Side

Figure 3. MAX17116 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX17116 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17116EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX17116 Evaluation Kit

## Evaluates: MAX17116 in a 12-Pin UTDFN Package

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6