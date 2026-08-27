<!-- lastmod 2022-08-03 -->
<!-- image -->

## Evaluates: MAX20480/ MAX20481

## General Description

The MAX20480 evaluation kit (EV kit) is a fully assembled and  tested  application  circuit  for  the  MAX20480  seveninput  automotive  power  supply  monitor.  The  test  point taps allow for routing to other subsystems for monitoring. Connectors are provided for I 2 C communication.

The MAX20480 EV kit can also evaluate the MAX20481 IC.  Simply  replace  the  installed  MAX20480  with  the MAX20481 IC.

The MAX20481 does not have an I 2 C interface, so there is no requirement for the MINIQUSB+.

## Benefits and Features

- Easy access inputs
- IN1-IN5 provided
- IN6, IN7 provided, with INM pin for remote ground connection
- ADDR pin and jumper for different address settings
- EN0, EN1 jumpers added for easy interface connections
- RC footprints on monitoring pins
- I 2 C connector

Ordering Information appears at end of data sheet.

## Quick Start

## Required Equipment

- MAX20480 EV kit
- MINIQUSB EV kit
- Latest version of the MINIQUSB command module firmware (optional, USB cable included) available from www.maximintegrated.com/evkitsoftware
- Latest version of the MAX20480 EV kit software, available from www.maximintegrated.com/evkitsoftware
- Two adjustable DC supplies
- Digital multimeter (DMM)
- Oscilloscope

## MAX20480 Evaluation Kit

## Procedure

The EV kit is fully assembled and tested. Contact the factory for detailed testing.

## Detailed Description

## Register Settings

Register details are found in the MAX20480 or MAX20481 data sheet .

## Address Setting

Address details are found in the MAX20480 or MAX20481 data sheet .

## Table 1. MAX20480 EV Kit Default Jumper Settings

| JUMPER   | DEFAULT SHUNT POSITION   | FUNCTION                                 |
|----------|--------------------------|------------------------------------------|
| J6       | Shunt on pin 1 to pin 2  | EN0 remains available for testing        |
| J7       | Shunt on pin 1 to pin 2  | EN1 remains available for testing        |
| J10      | Shunt on pin 2 to pin 3  | ShortsADDR to ground for default address |
| J11      | Shunt installed          | Bypass the series 100kΩ on theADDR pin   |
| J16      | Shunt installed          | Connects INM to PCB Ground               |

## Ordering Information

| PART           | TYPE           |
|----------------|----------------|
| MAX20480EVKIT# | EV Kit         |
| MINIQUSB+      | Comm Interface |

#Denotes RoHS compliant

## MAX20480 EV Kit Bill of Materials

|   QTY | REF DES                                             | VALUE             | DESCRIPTION                                                                                                                                                                                 | MFG PART #                            | MANUFACTURER              |
|-------|-----------------------------------------------------|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|---------------------------|
|     1 | C1                                                  | 4.7µF             | Capacitor; SMT (0603); Ceramic; 4.7µF; 10V; Tol = 10%; Model = CGA Series; TG = -55°C TO +125°C; TC = X7R                                                                                   | CGA4J3X7R1A475K125AB                  | TDK                       |
|     1 | C2                                                  | 0.1µF             | Capacitor; SMT (0402); Ceramic Chip; 0.1µF; 10V; Tol = 10%; TG = -55°C to +125°C; TC = X7R                                                                                                  | C0402X7R500-392KNE; GRM155R71H392KA01 | VENKEL LTD./ MURATA       |
|     2 | J1, J2                                              | MAXIMPAD          | EV Kit Parts; MAXIM Pad; Wire; Natural; Solid; Weico Wire; Soft Drawn Bus Type-S; 20AWG                                                                                                     | 9020 BUSS                             | WEICO WIRE                |
|     2 | J11, J16                                            | PCC03SAAN         | Header; Male; Through Hole; Breakaway; Straight Angle; 2-Pin                                                                                                                                | PCC03SAAN                             | SULLINS ELECTRONICS CORP  |
|     1 | J12                                                 | SSW-110-02-S-D-RA | Connector; Through Hole; SSW Series; Dual Row; Right Angle; 20-Pin; -55°C to +105°C                                                                                                         | SSW_100-02-S-D-RA                     | SAMTEC                    |
|     3 | J6, J7, J10                                         | PCC03SAAN         | Header; Male; Through Hole; Breakaway; Straight Angle; 3-Pin                                                                                                                                | PCC03SAAN                             | SULLINS ELECTRONICS CORP. |
|    11 | J8, J9, J14, J15, J17, J18, J19, J20, J21, J22, J23 | N/A               | Test Point; Pin Dia = 0.015in; Total Length = 0.35in; Total Length = 0.063in; White; Phosphor Bronze Wire Silver Plate Finish; Recommended For Board Thickness = 0.062in; Not for Cold Test | 5007                                  | KEYSTONE                  |
|     1 | R1                                                  | 100k              | Resistor; 0603; 100kΩ; 1%; 100ppm; 0.1W; Thick Film                                                                                                                                         | CRCW0603100KFKE                       | VISHAY DALE               |
|     2 | R12, R13                                            | 10k               | Resistor; 0603; 10kΩ; 1%; 100ppm; 0.1W; Thick Film                                                                                                                                          | RC0603FR-0710KL                       | YAGEO                     |
|     2 | R2, R3                                              | 2k                | Resistor; 0603; 2kΩ; 1%; 100ppm; 0.1W; Thick Film                                                                                                                                           | CRCW06032K00FK                        | VISHAY DALE               |
|     1 | R4                                                  | 20k               | Resistor; 0606; 20kΩ; 1%; 100ppm; 0.1W; Thick Film                                                                                                                                          | CRCW060320K0FKE                       | VISHAY DALE               |
|     1 | U1                                                  | MAX20480          | EV Kit Part-IC; Seven-Input Automotive Power-System Monitor Family; QFN16-EP; Package Code: T1633Y+5                                                                                        | MAX20480DATEA/VY+                     | MAXIM                     |

Evaluates: MAX2048/

MAX20481

## MAX20480 Evaluation Kit

## MAX20480 EV Kit Schematic

<!-- image -->

Evaluates: MAX2048/

## MAX20480 Evaluation Kit

## MAX20480 EV Kit PCB Layouts

MAX20480 EV Kit Component Placement Guide - Top

<!-- image -->

Evaluates: MAX2048/

│

## MAX20480 EV Kit PCB Layouts (continued)

<!-- image -->

MAX20480 EV Kit Component Placement Guide - Silkscreen

Evaluates: MAX2048/

│

## MAX20480 EV Kit PCB Layouts (continued)

<!-- image -->

MAX20480 EV Kit Component Placement Guide - Bottom

Evaluates: MAX2048/

│

## MAX20480 EV Kit PCB Layouts (continued)

<!-- image -->

MAX20480 EV Kit Component Placement Guide - Internal 2

Evaluates: MAX2048/

│

## MAX20480 EV Kit PCB Layouts (continued)

MAX20480 EV Kit Component Placement Guide - Internal 3

<!-- image -->

Evaluates: MAX2048/

│

## MAX20480 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                   | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------|-----------------|
|                 0 | 3/19            | Initial release                                                                               | -               |
|                 1 | 4/19            | Updated Ordering Information and MAX20480 EV Kit Bill of Materials                            | 2               |
|                 2 | 9/21            | Updated title, General Description , Detailed Description , MAX20480 EV Kit Bill of Materials | 1, 2            |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX2048/

MAX20481