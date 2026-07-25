<!-- lastmod 2022-08-02 -->
## MAX17597 Evaluation Kit

## General Description

The MAX17597 evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  demonstrates  an  isolated 20W  flyback  DC-DC  converter.  The  circuit  uses  the device's peak-current-mode controller in a 16-pin TQFN package with an exposed pad. The EV kit demonstrates the  IC's  cycle-by-cycle  current-limit,  soft-start,  and  EN/ UVLO features.

The EV kit circuit output is configured for an isolated 24V and provides up to 833mA of output current. The EV kit is configured to operate at a 200kHz switching frequency. An optocoupler, along with the transformer, provides galvanic isolation between input and output, up to 1500V RMS .

## Features

- 18V to 36V Input Range
- Isolated Output: 24V DC at 20W
- Cycle-by-Cycle Current Limit
- Resistor Programmable UVLO/OVI Threshold
- Low-Cost Flyback Design
- Galvanic Isolation Up to 1500V RMS
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX17597 in a

Flyback Configuration

## Quick Start

## Recommended Equipment

- One 18V to 36V DC, 2A power supply
- Electronic load
- Four digital multimeters (DMM)
- MAX17597-24V EVKITA#

## Warning:

- Do not turn on the power supply until all connections are completed.
- Wear protective eye gear at all times.
- Do not touch any part of the circuit with bare hands or conductive materials when powered up.
- Make sure all high-voltage capacitors are fully discharged before handling. Allow 5 minutes after disconnecting the input power source before touching circuit parts.

## Equipment Setup and Test Procedure

- 1) Set the power supply to +24VDC. Disable the powersupply output.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the electronic load to the VOUT PCB pad and the negative terminal to the nearest GND0 PCB pad.
- 3) Set the electronic load to constant-current mode and disable the electronic load.
- 4) Connect a DMM configured in voltmeter mode across the VOUT PCB pad and the nearest GND0 PCB pad.
- 5) Connect another DMM configured in voltmeter mode across the VOUT PCB pad and the GND0 PCB pad.
- 6) Enable the power supply.
- 7) Enable the load and adjust the current to 833mA.
- 8) Verify that the output voltmeter displays 24V
- 9) If required, vary the input voltage from 18V to 36V, the load current from 0 to 833mA, and verify that the output voltage is 24V.

<!-- image -->

## MAX17597 Evaluation Kit

## Detailed Description

The MAX17597 EV kit provides a proven design to evaluate the  high-efficiency,  DC-DC  flyback  converter  in  a  spacesaving  16-pin  TQFN  package.  The  EV  kit  is  configured for  a  24V  output  voltage  that  can  supply  up  to  840mA  of current.  The  EV  kit  features  a  200kHz  fixed  switching frequency for optimum efficiency and component size.

This  EV  kit  uses  the  peak-current-mode,  pulse-widthmodulating (PWM) controller IC in a 16-pin TQFN package with an exposed pad. This PWM controller varies the duty cycle  to  compensate  for  the  variation  in  input  voltage (V IN )  and  the  output  load  to  maintain  a  constant  output voltage. The duty cycle determines the on/off duration of the MOSFET (Q1).

The detailed  description  of  flyback-design  methodology, as well as the calculations for component  value selection, are described in Application Note 5504, Designing Flyback Converters  Using  Peak-Current-Mode  Controllers .  The details  of  soft-start  time  programming,  programming output voltage, peak-current limit setting, switching frequency  setting,  and  the  EN/UVLO,  OVI  settings  are described in the MAX17595-MAX17597 IC data sheet.

## Evaluates: MAX17597 in a Flyback Configuration

Note: The EV kit is shipped with the frequency dithering disabled and the DITHER/SYNC pin shorted to SGND by a 0Ω resistor. To set the desired frequency dither, replace resistor  R23  with  a  capacitor  of  appropriate  value,  as detailed in the MAX17595-MAX17597 IC data sheet. The DITHER/SYNC PCB pad is available for monitoring the signal at the DITHER/SYNC pin.

## MAX17597 Evaluation Kit

## EV Kit Performance Report

<!-- image -->

<!-- image -->

## Evaluates: MAX17597 in a Flyback Configuration

<!-- image -->

<!-- image -->

│

Evaluates: MAX17597 in a

Flyback Configuration

Figure 1. MAX17597 EV Kit Component Placement Guide-Component Side

<!-- image -->

## Evaluates: MAX17597 in a Flyback Configuration

Figure 2. MAX17597 EV Kit PCB Layout-Component Side

<!-- image -->

## Evaluates: MAX17597 in a Flyback Configuration

Figure 3. MAX17597 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX17597 Evaluation Kit

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Coilcraft, Inc. | www.coilcraft.com |
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |

Note: Indicate that you are using the MAX17597 when contacting these component suppliers.

## Component List

See the links below for component information and sche -matics:

- MAX17597 EV BOM
- MAX17597 EV Schematic

Evaluates: MAX17597 in a

Flyback Configuration

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17597FBEVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX17597 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-462, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17597 in a

Flyback Configuration

<!-- image -->

## BILL OF MATERIALS (BOM) - REVISION 5/15

<!-- image -->

<!-- image -->

|   32 | R21   |   1 | 470Ω ± 5% 0.5W resistor (1210)                     | PANASONIC ERJ- 14YJ470U           |                          |                         |
|------|-------|-----|----------------------------------------------------|-----------------------------------|--------------------------|-------------------------|
|   33 | R22   |   1 | 100Ω ± 5% 0.66W resistor (1206)                    | PANASONIC ERJP08J101V             |                          |                         |
|   34 | R23   |   1 | 0Ω ± 5% resistor (0603)                            | SAMSUNG ELECTRONICS RC1608J000CS  | BOURNS CR0603-J/- 000ELF | YAGEO PH RC0603JR-070RL |
|   35 | T1    |   1 | 33µH, (3,4-1,2):(7,8- 5,6)=0.5416:1                | COILCRAFT CU8758-AL               |                          |                         |
|   36 | U1    |   1 | MAX17597 TQFN16-EP 3X3                             | MAX17597ATE+                      |                          |                         |
|   37 | U2    |   1 | 0.1A ADJUSTABLE PRECISION SHUNT REGULATOR(SOT-23)  | TEXAS INSTRUMENTS TL431AQDBZRQ1   |                          |                         |
|   38 | U3    |   1 | 6V/0.05A,0.2W PHOTOTRANSISTOR OPTOCOUPLER (NSOIC4) | AVAGO TECHNOLOGIES ACPL- 217-56AE |                          |                         |

|   DO NOT PURCHASE(DNP) | DO NOT PURCHASE(DNP)   |   DO NOT PURCHASE(DNP) | DO NOT PURCHASE(DNP)   |
|------------------------|------------------------|------------------------|------------------------|
|                      1 | C12,C13                |                      2 | N/A                    |
|                      2 | C21                    |                      1 | N/A                    |
|                      3 | R2,R18-R20             |                      4 | N/A                    |