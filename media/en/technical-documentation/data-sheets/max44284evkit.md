<!-- lastmod 2022-08-03 -->
## MAX44284 Evaluation Kit

## General Description

The MAX44284 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX44284  high-precision,  lowpower, current-sense amplifier. This EV kit demonstrates the MAX44284 in an ultra-small, 1.3mm x 0.9mm, 6-bump WLP package.

The  EV  kit  PCB  comes  with  a  MAX44284HAWT+ installed,  which  is  the  100V/V  gain  version.  Other gain options are available. Contact  the  factory for the  pin-compatible  MAX44284FAWT+  (G  =  50V/V), MAX44284WAWT+  (200V/V),  and  MAX44284EAWT+ (G = 500V/V).

## EV Kit Contents

- MAX44284 EV Kit Board

## Features and Benefits

- Precision Real-Time Current Monitoring
- -0.1V to +36V Input Common-Mode Range
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX44284

## Quick Start

## Required Equipment

The following items are required for operation:

- MAX44284 EV kit
- +3.3V, 1.5A DC power supply
- +2.7, 1A DC power supply
- An electronic load capable of sinking 1A (i.e., HP6060B)
- Two digital voltmeters

## Procedure

The  MAX44284  EV  kit  is  fully  assembled  and  tested. Follow  the  steps  below  to  verify  the  board  operation. Caution: Do not turn on power supply or the electronic load until all connections are made .

- 1) Connect the positive terminal of the +3.3V supply to the VDD test point and the negative terminal of the supply to the nearest GND test point.
- 2) Connect the positive terminal of the +2.7V supply to the VBATT test point and the negative terminal of the supply to the nearest GND test point.
- 3) Set the electronic load to sink 650mA.
- 4) Connect the positive terminal of the electronic load to the LOAD test point and the negative terminal of the supply to the nearest GND test point.
- 5) Connect the first voltmeter between test points RS+ and RS- to measure V SENSE .
- 6) Connect  the  second  voltmeter  between  VOUT  and the nearest GND test points.
- 7) Turn on the power supplies.
- 8) Enable the electronic load.
- 9) Verify that the first voltmeter displays 33mV and the second voltmeter displays 3.3V.

<!-- image -->

## Detailed Description of Hardware

The MAX44284 EV kit provides a proven design to evaluate  the  MAX44284  high-side,  current-sense  amplifier, which  offers  precision  accuracy  specifications  of  input offset voltage (V OS ) less than 2µV (max) and gain error less than 0.05% (max).

## Applying the VRS+ Supply and the Load

The EV kit is installed with a MAX44284H, which has a 100V/V gain. The current-sense resistors (R SENSE ) value is 0.05Ω with ±0.5% tolerance. The V OUT  for each channel given by:

<!-- formula-not-decoded -->

where A V is the gain and I LOAD  is the current load applied to the device. Normal operating V RS+  and V RS-  range is -0.1V to +36V.

## Measuring the Load Current

The load current is measured as a voltage drop (V SENSE ) across  an  external  sense  resistor.  This  voltage  is  then amplified by the current-sense amplifier and presented at

## Component List

Refer to file 'max44284\_evkit\_reva\_parts checklist.xls' attached to this PDF for component information.

## Evaluates: MAX44284

its  VOUT\_ pin. Like all differential amplifiers, the output voltage has two components of error (an offset error and a gain error). The offset error affects accuracy at low currents and a gain error affects accuracy at large currentsboth  errors  affect  accuracy  at  intermediate  currents.  By minimizing both offset and gain errors, accuracy can be optimized over a wide dynamic range.

## SHDN

To place the device into shutdown mode, install a shunt in the 2-3 position on jumper JU1. See Table 1 for shunt positions.

## Table 1. SHDN Jumper Description (JU1)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                         |
|----------|------------------|-------------------------------------|
| JU1      | 1-2*             | Normal operation                    |
| JU1      | 2-3              | SHDN , MAX44284 is in shutdown mode |

* Default position.

Figure 1. MAX44284 EV Kit Schematic

<!-- image -->

Figure 2. MAX44284 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX44284 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX44284 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44284EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX44284

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/14            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSlied. 0a[iP ,ntegrated reserYes the right to change the circuitry and sSeci¿cations without notice at any tiPe.

Evaluates: MAX44284