<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX98307 evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  evaluates  the  MAX98307 filterless Class DG multilevel amplifier to drive a speaker in portable audio applications. The EV kit comes with a MAX98307 IC in a 16-pin TQFN-EP package. Designed to operate from a 2.6V to 5.25V DC power supply, the EV kit is capable of delivering 3.3W into an 8 I load. The EV kit accepts a differential or a single-ended input signal.

| DESIGNATION                                 | QTY                                         | DESCRIPTION                                                             |
|---------------------------------------------|---------------------------------------------|-------------------------------------------------------------------------|
| MINIMAL COMPONENTS FOR CUSTOMER DESIGN      | MINIMAL COMPONENTS FOR CUSTOMER DESIGN      | MINIMAL COMPONENTS FOR CUSTOMER DESIGN                                  |
| C1, C2, C3                                  | 3                                           | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K  |
| C4, C5                                      | 2                                           | 0.33 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C334K |
| C6                                          | 1                                           | 4.7 F F Q 10%, 16V X7R ceramic capacitor (0805) Murata GRM21BR71C475K   |
| C7                                          | 1                                           | 10 F F Q 20%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J106M   |
| R1, R2                                      | 2                                           | 10k I Q 1% resistors (0603)                                             |
| R3, R4                                      | 2                                           | 20k I Q 1% resistors (0603)                                             |
| U1                                          | 1                                           | Class DG audio amplifier (16-TQFN-EP) Maxim MAX98307ETE+                |
| OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION | OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION | OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION                             |
| C1N, PVSS                                   | 2                                           | White test points, 40 mil drill size                                    |
| C1P                                         | 1                                           | Red test point, 40 mil drill size                                       |
| C8                                          | 1                                           | 10 F F Q 20%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J106M   |

<!-- image -->

## MAX98307 Evaluation Kit

## Evaluates: MAX98307

## Features

- S Filterless Operation Passes Radiated Emissions with Up to 30cm of Speaker Cable
- S 2.6V to 5.25V Single-Supply Operation
- S Delivers Up to 3.3W Into an 8 I Speaker
- S Configurable Gain Control
- S Differential or Single-Ended Input
- S Low-Power Shutdown Input
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                                                               |
|--------------------------|-------|---------------------------------------------------------------------------|
| C9-C13                   |     0 | Not installed, capacitors (0603) Recommended: Murata GRM188R71C224K       |
| C14-C17                  |     0 | Not installed, capacitors (0603)                                          |
| FOUT-, FOUT+, PGND, PVDD |     4 | Binding posts                                                             |
| IN                       |     1 | Red, right-angle, PC-mount RCA jack                                       |
| JU1                      |     1 | 3-pin header                                                              |
| JU2                      |     1 | 2-pin header                                                              |
| L1, L2                   |     0 | Not installed, inductors-short (PC trace) Recommended: Sumida CDRH65-220M |
| OUT-                     |     1 | Black test point, 63 mil drill size                                       |
| OUT+                     |     1 | Red test point, 63 mil drill size                                         |
| R5, R6                   |     0 | Not installed, resistors (0603) Recommended: 22 I Q 5% resistors (0603)   |
| R7, R8                   |     2 | 0 I Q 5% resistors (0603)                                                 |
| SU1, SU2                 |     2 | Shunts (JU1, JU2)                                                         |
| TP0                      |     0 | Not installed, test point (15 mil drill size)                             |
| -                        |     1 | PCB: MAX98307 EVALUATION KIT                                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## Procedure

The EV kit is fully assembled and tested. Follow the steps listed below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1)  Install a shunt on pins 1-2 on jumper JU1 (EV kit on).
- 2)  Verify  that  a  shunt  is  not  installed  on  jumper  JU2 (differential input mode)
- 3)  Connect  the  8 I speaker  across  the  FOUT-  and FOUT+ PCB pads.
- 4)  Connect the positive terminal of the power supply to the  PVDD  PCB  pad  and  the  ground  terminal  to  the PGND PCB pad.
- 5)  Connect the audio source output to the IN RCA jack.
- 6)  Connect the ground terminal of the audio source to the PGND PCB pad.
- 7)  Turn on the audio source.
- 8)  Turn on the power supply.

## Detailed Description of Hardware

The MAX98307 EV kit features the MAX98307 filterless Class DG amplifier IC, designed to drive an 8 I speaker in  portable  audio  applications.  The  EV  kit  comes  with a  MAX98307  IC  in  a  16-pin  TQFN  package  with  an exposed pad. The EV kit operates from a DC power supply that provides 2.6V to 5.25V and 2A of current. The EV kit  accepts differential  or  single-ended audio input and provides a fully differential output. The audio input source is amplified to drive up to 3.3W into an 8 I speaker. The device outputs, available at the OUT+, OUT- test points or  FOUT+,  FOUT-  binding  posts,  can  be  connected directly  to  a  speaker  load  without  any  filtering  and  up to  30cm  of  cable.  However,  filter  components  can  be added to ease evaluation. See the Filtered Output section for additional information.

<!-- image -->

## Customizing the Gain

The EV kit is shipped with a gain of +14.5dB. Change the resistors (R1-R4) to customize the gain of the EV kit. Refer to the MAX98307/MAX98308 IC data sheet for details.

## Filterless Output

The EV kit  is  shipped  with  filterless  outputs  by  default. The  EV  kit's  filterless  outputs,  available  at  the  OUT+, OUT-  test  points  or  the  FOUT+,  FOUT-  binding  posts, can be connected directly to a speaker load without any filtering. Use the OUT+, OUT- test points or the FOUT+, FOUT- binding posts to connect a speaker directly to the device's outputs.

## Filtered Output

Audio  analyzers  typically  cannot  accept  pulse-widthmodulated (PWM) signals at their inputs. Therefore, the EV kit provides component footprints for a lowpass filter at its outputs to ease evaluation. Cut open the PCB traces between inductor L1 and L2 pads. Install inductors L1, L2, capacitors C9-C13, and resistors R5, R6 (provided with the EV kit) and use the filtering output binding posts (FOUT- and FOUT+) to connect the filtered PWM outputs to the audio analyzer. The default lowpass filter at the EV kit outputs is optimized for an 8 I speaker.

The  IC  can  pass  CE  EN55022B  regulations  with  up  to 30cm of speaker cable and no filtering. However, ferritebead filters  can  be  used  to  achieve  further  attenuation of  radiated  emissions.  To  install  the  ferrite-bead  filters, verify  that  filter  inductors  L1  and  L2  are  not  installed. Next, replace shorting resistors R7 and R8 with 0603 or smaller  ferrite  beads  and  install  filter  capacitors  on  the C14  and  C15  pads.  The  speaker  wire  should  be  connected to the OUT- and OUT+ test points.

## Jumper Selection

## Shutdown Mode ( SHDN )

Jumper JU1 controls the shutdown pin ( SHDN )  of  the  IC. The  shutdown  pin  can  also  be  controlled  by  an  external logic  controller  connected  to  the  EV  kit SHDN PCB  pad. Remove the shunt from JU1 before connecting an external controller to the SHDN pad. See Table 1 for shunt positions.

## Input Mode (IN-)

Jumper  JU2  provides  an  option  to  select  between  a differential or single-ended input mode for the EV kit. See Table 2 for jumper JU2 configuration.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX98307 Evaluation Kit

## Evaluates: MAX98307

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Sumida Corp.                           | 847-545-6700 | www.sumida.com              |

Note:

Indicate that you are using the MAX98307 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX98307 EV kit
- 2.6V to 5.25V, 2A power supply
- Audio source (e.g., CD player, MP3 player, etc.)
- 8 I speaker

## Table 1. Shutdown Mode (JU1 Jumper Selection)

| SHUNT POSITION   | SHDN PIN CONNECTED TO     | EV KIT FUNCTION                                                                               |
|------------------|---------------------------|-----------------------------------------------------------------------------------------------|
| 1-2*             | VCC                       | EV kit enabled                                                                                |
| 2-3              | PGND                      | Shutdown mode                                                                                 |
| Not installed    | External logic controller | SHDN driven by external logic controller. Shutdown is active low and is 1.8V logic compliant. |

* Default position.

## Table 2. Input Mode (JU2 Jumper Selection)

| SHUNT POSITION   | IN- PCB PAD CONNECTED TO                 | INPUT MODE   |
|------------------|------------------------------------------|--------------|
| Installed        | PGND                                     | Single-ended |
| Not installed*   | Use-supplied negative differential input | Differential |

*Default position.

## MAX98307 Evaluation Kit Evaluates: MAX98307

<!-- image -->

Figure 1. MAX98307 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX98307 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX98307 Evaluation Kit

## Evaluates: MAX98307

Figure 3. MAX98307 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX98307 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX98307EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX98307 Evaluation Kit

## Evaluates: MAX98307

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.