<!-- lastmod 2022-08-03 -->
## MAX44286 Evaluation Kit

## General Description

The MAX44286 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX44286  zero-drift,  high-side, current-sense  amplifier  that  offers  precision  and  low supply current. This EV kit demonstrates the MAX44286 in an ultra-small, 0.78mm x 0.78mm x 0.35mm, 4-bump wafer-level package (WLP).

The EV kit PCB comes with a MAX44286FAZS+ installed, which  is  the  50V/V  gain  version.  Other  gain  options are  available.  Contact  the  factory  for  free  samples of  the  pin-compatible  MAX44286TAZS+  (25V/V  gain), MAX44286HAZS+ (100V/V gain), and MAX44286WAZS+ (200V/V gain).

## EV Kit Contents

- MAX44286 EV Kit Board

## Features and Benefits

- Precision Real-Time Current Monitoring
- +1.8V to +5.5V Input Common-Mode Range
- Proven PCB Layout
- RoHS Compliant

Ordering Information appears at end of data sheet.

Evaluates: MAX44286

## Quick Start

## Required Equipment

The following items are required for operation:

- MAX44286 EV kit
- +3.3V, 1.5A DC power supply
- Electronic load capable of sinking 1A (i.e., HP6060B)
- Two digital voltmeters (DVMs)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  the  board  operation. Caution:  Do  not turn on power supply or the electronic load until all connections are made.

- 1)  Connect the positive terminal of the +3.3V supply to the VBATT PCB pad and the negative terminal of the supply to the GND PCB pad closest to the VBATT PCB pad.
- 2)  Set the electronic load to 1A.
- 3)  Connect  the  electronic  load's  positive  terminal  to the LOAD PCB pad and the negative terminal to the nearest GND PCB pad on the EV kit.
- 4)  Connect  the  first  voltmeter  across  the  RS+  and  RStest points.
- 5)  Connect the second voltmeter across VOUT and the nearest GND PCB pad on the EV kit.
- 6)  Enable the power supply.
- 7)  Enable the electronic load.
- 8)  Verify  that  the  first  DVM  displays  60mV  and  the second DVM displays 3.0V.

<!-- image -->

## Detailed Description of Hardware

The  MAX44286  EV  kit  provides  a  proven  design  to evaluate the MAX44286 zero-drift, high-side, current-sense  amplifier  that  offers  precision  accuracy specifications of V OS  less than 7µV (max) and gain error less than 0.2% (max).

## Applying the VRS+ Supply and the Load

The EV kit is installed with a MAX44286FAZS+, which has a 50V/V gain. The current-sense resistor (R SENSE ) value is 0.05Ω with ±0.5% tolerance. The V OUT is given by:

<!-- formula-not-decoded -->

where A V is the gain and I LOAD  is the current load applied to the device. Normal operating V RS+  and V RS-  range is +1.8V to +5.5V.

## Evaluates: MAX44286

## Measuring the Load Current

The load current is measured as a voltage drop (V SENSE ) across  an  external  sense  resistor.  This  voltage  is  then amplified  by  the  current-sense  amplifier  and  presented at  its  OUT  pin.  Like  all  differential  amplifiers,  the  output voltage has two components of error (an offset error and a  gain  error).  The  offset  error  affects  accuracy  at  low currents  and  a  gain  error  affects  accuracy  at  large currents-both  errors  affect  accuracy  at  intermediate currents.  By  minimizing  both  offset  and  gain  errors, accuracy can be optimized over a wide dynamic range.

## Evaluating Other Gain Versions

The  MAX44286  EV  kit  can  be  used  to  evaluate  other gain  versions  of  the  MAX44286  (25V/V,  50V/V,  100V/V, 200V/V = T, F, H, Z suffix). Replace U1 of the MAX44286 EV kit with the appropriate version of the MAX44286.

## MAX44286 Evaluation Kit

## Component List

Refer  to  file  'evkit\_build\_bom\_max44286\_evkit\_a.csv' attached to this PDF for component information.

Figure 1. MAX44286 EV Kit Schematic

<!-- image -->

│

Figure 2. MAX44286 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX44286 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX44286 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44286EVKIT# | EV Kit |

# RoHS compliant.

Evaluates: MAX44286

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/14           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSlieG. 0a[iP ,nteJrateG reserYes the riJht to chanJe the circXitr\ anG sSeci¿cations withoXt notice at an\ tiPe.

│

Evaluates: MAX44286