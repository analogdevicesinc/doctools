<!-- lastmod 2022-08-03 -->
## MAX25210 Evaluation Kit

## General Description

The MAX25210 ultra-low quiescent current, high-voltage linear regulator family is ideal for use in automotive and battery-operated  systems.  The  device  operates  from  a 3.5V to 36V input voltage, delivers up to 300mA of load current, and consumes only 10μA of typical quiescent cur -rent at no load. The device consumes only 1.6μA current when in shutdown. The input is 40V transient tolerant and is designed to operate under load-dump conditions. The MAX25210 EV kit can be configured as either fixed output voltage (3.3V or 5V) or adjustable output voltage using an external resistive voltage divider.

The MAX25210 features an open-drain, active-low RESET output with fixed thresholds offered at 93.5% and 87.5% of the output voltage. The RESET output remains low for a  fixed  period  of  60μs  after  the  output  voltage  exceeds its threshold. The RESET delay can be extended with an external capacitor.

The MAX25210 includes an enable input, short-circuit protection,  and  thermal  shutdown. The MAX25210 operates over the -40°C to +125°C automotive temperature range.

The regulators are available in a space-saving, thermally enhanced, 3mm x 3mm, 8-pin TDFN, 2mm x 2mm, 8-pin TDFN, and 5mm x 4mm, 8-pin SO packages.

Ordering Information appears at end of data sheet.

Evaluates: MAX25210

## Benefits and Features

- Enables System Designers to Meet Stringent Module Requirements for 100μA Quiescent Current
- Low 10μA Quiescent Current
- 300mA Output-Current Capability (300mA, 200mA, 100mA, and 50mA Variants)
- User-Selectable Output Voltage (3.3V or 5V Fixed and 0.6V to 11V Adjustable with External Resistive voltage Divider)
- Tiny Output Capacitors Reduce Board Space and BOM Cost
- Stable Operation with 2.2μF Output Capacitor
- Accurate RESET Output with Adjustable Delay Eliminates Need for Separate Reset IC
- Open-Drain RESET Output with Adjustable Delay
- Fixed-Reset Threshold Options: 87.5% or 93.5%
- Operates Through Cold-Crank Conditions
- Low-Dropout Voltage of 280mV at 200mA
- 3.5V to 36V Wide Input Voltage Range, 40V LoadDump Tolerant
- Robust Performance in Automotive Environment
- Thermal and Short-Circuit Protection
- High-Voltage Enable Input (40V Load-Dump Tolerant)
- Operating -40°C to +125°C Temperature Range
- Automotive Qualified AEC-Q100

<!-- image -->

## Quick Start

## Required Equipment

- MAX25210 EV kit
- 5V to 40V, 300mA DC power supply
- Passive or electronic load capable of sinking 300mA
- Digital multimeter (DMM)

## Procedure

The EV kit is fully assembled and tested. To verify board operation, follow the steps:

- 1) Verify that shunts are installed across jumpers. For V OUT TDFN 3X3: J1 (1-2), J2 (2-3), and J13 (DNI). For V OUT  SO: J3 (1-2), J4 (2-3), and J18 (DNI). For V OUT TDFN 2X2: J23 (1-2), J24 (2-3), and J33 (DNI).
- 2) Set the DC power supply output to 14V and disable the output. Connect the positive and negative terminals of power supply connections to V IN  and GND respectively.
- 3) Connect the positive input of the DMM to the ap -propriate output pad on the EV kit, and the negative input of the DMM to the GND PCB pad on the EV kit to measure the output voltage.
- 4) Connect the passive or electronic load between the OUTPUT and GND pads. Set the load from 0mA&lt; I LOAD &lt; 300mA.
- 5) Enable the DC power-supply output.
- 6) Verify that the output voltage is 5V.

## Detailed Description of Hardware

The MAX25210 EV kit is a fully assembled and tested PCB for  evaluating the MAX25210 300mA LDO regulator. The EV kit accommodates TDFN 3mm x 3mm, TDFN 2mm x 2mm, and SO 5mm x 4mm package version of the product. The EV kit operates from 3.5V to 36V and requires 300mA current. The LDO regulator has a fixed 3.3V or 5V output, however, it can also be configured between 0.6V and 11V using  an  external  resistive  feedback  divider  network. An open-drain RESET output changes from low to high whenever the OUTPUT voltage rises to 93.5% of its regulated output. When TIMEOUT is loaded with a 1000pF capacitor and OUTPUT exceeds its rising threshold voltage, RESET remains low for the 1.25ms reset timeout period and then goes high. A dedicated SMB jack (50Ω) is used for each package type to monitor the output and input voltage.

## Enable (J1)

Jumpers J1, J3, and J23 configure the EV kit's respective EN inputs for turn-on/off control. Install a shunt across pins 1-2 to enable the circuit output. Install a shunt across pins 2-3 to disable the outputs. The outputs can also be exter -nally controlled by placing an independent voltage source at the ENABLE PCB pad when a shunt is not installed at J1, J3, and J23. See Table 1 for proper configuration.

## Output Voltage Selection

Jumpers J2, J33, J4, J18, J24, and J33 configure the EV kit circuit to operate in fixed output-voltage or adjustable output-voltage  mode.  In  fixed  output-voltage  mode,  the output voltage is set to 3.3V or 5V using jumper J13, J18, J33. To configure the EV kit circuit for fixed output mode, install  a  shunt  across  pins  2-3  on  jumper  J2,  J4,  J24. Place a shunt across pins 1-2 on J13, J18, J33 for the 5V preset output. Place a shunt across pins 2-3 for the 3.3V preset output, see Table 2.

In  adjustable  output-voltage  mode,  the  output  voltage is  set  using  a  resistor  voltage  divider  network  from  the OUTPUT  to  SETOV  pins.  To  configure  the  circuit  for adjustable  output-voltage  mode,  install  a  shunt  across pins  1-2  on  jumper  J2,  J4,  J24  and  remove  the  shunt at  jumper J13, J18, J33. The output voltage can be set between 0.6V to 11V using surface-mount 0402 resistors R3 and R4, R5 and R6, R10 and R11. To set the output voltages, select R4, R6, R11 to be ≤100kΩ and use the following equation to compute R3, R5, R10:

<!-- formula-not-decoded -->

where  V OUT is  the  desired  output  voltage,  V SETOV is 0.6V, and R3, R10, R5 is in kΩ.

See Table 2 for proper jumper configurations when operating the EV kit circuit in fixed or adjustable output voltage mode.

Table 1. Enable Control (J1, J3, J23)

| SHUNT POSITION   | ENABLE PIN        | OUTPUT   |
|------------------|-------------------|----------|
| 1-2              | Connected to V IN | Enabled  |
| 2-3              | Connected to GND  | Disabled |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25210EVKIT# | EVKIT  |

# Denotes RoHS compliant.

Table 2. Output Voltage Configuration (J2, J13, J4, J18, J24, J33)

| SHUNT POSITION   | SHUNT POSITION   | OUTPUT VOLTAGE                                             |
|------------------|------------------|------------------------------------------------------------|
| J2, J4, J24      | J13, J18, J33    | OUTPUT VOLTAGE                                             |
| 1-2              | Not Installed    | Set by External Feedback Resistor R3, R4, R5, R6, R10, R11 |
| 2-3              | 1-2              | 5V                                                         |
| 2-3              | 2-3              | 3.3V                                                       |

## MAX25210 EV Kit Bill of Materials

| ITEM                                                                                      | QTY                                                                                       | REF DES                                                                                   | MAXINV                                                                                    | MFG PART #                                                                                  | MANUFACTURER                                                                              | VALUE                                                                                     | DESCRIPTION                                                                                                                                                                                                       | COMMENTS                                                                                  |
|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| 1                                                                                         | 2                                                                                         | C1, C13                                                                                   | 20-0033U-FA21                                                                             | EEH-ZC1H330XP                                                                               | PANASONIC                                                                                 | 33UF                                                                                      | CAP; SMT (CASE_D8); 33UF; 20%; 50V; ALUMINUM-ELECTROLYTIC                                                                                                                                                         |                                                                                           |
| 2                                                                                         | 3                                                                                         | C3, C4, C14                                                                               | 20-0001U-04                                                                               | GRM21BR71H105KA12; CL21B105KBFNNN; C2012X7R1H105K085AC; UMK212B7105KG; CGA4J3X7R1H105K125AB | MURATA;SAMSUNG ELECTRONICS;TDK;TAIY                                                       | 1UF                                                                                       | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                          |                                                                                           |
| 3                                                                                         | 3                                                                                         | C5, C7, C15                                                                               | 20-1000P-B68                                                                              | C0402C0G250-102KNP                                                                          | VENKEL LTD.                                                                               | 1000PF                                                                                    | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 25V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+; NOT RECOMMENDED FOR NEWDESIGN USE - 20-1000p-E7                                                             |                                                                                           |
| 4                                                                                         | 3                                                                                         | C6, C9, C16                                                                               | 20-002U2-CA95                                                                             | 08053C225KAT2A; TMK212B7225KG; GRM21BR71E225KA73; GRT21BR71E225KE13                         | AVX;TAIYO YUDEN;MURATA; MURATA                                                            | 2.2UF                                                                                     | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                        |                                                                                           |
| 5                                                                                         | 3                                                                                         | C8, C10, C17                                                                              | 20-0010U-A4                                                                               | GRM31CR71E106KA12; CL31B106KAHNNN                                                           | MURATA;SAMSUNG ELECTRONICS                                                                | 10UF                                                                                      | CAPACITOR; SMT (1206); CERAMIC CHIP; 10UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                         |                                                                                           |
| 6                                                                                         | 3                                                                                         | C11, C12, C18                                                                             | 20-0100P-26                                                                               | C0402C101K5GAC; C1005C0G1H101K050BA                                                         | KEMET;TDK                                                                                 | 100PF                                                                                     | CAPACITOR; SMT; 0402; CERAMIC; 100pF; 50V; 10%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC                                                                                                                        |                                                                                           |
| 7                                                                                         | 9                                                                                         | J1-J4, J13, J18, J23, J24, J33                                                            | 01-PBC03SAAN3P-21                                                                         | PBC03SAAN                                                                                   | SULLINS                                                                                   | PBC03SAAN                                                                                 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                                                                                                  |                                                                                           |
| 8                                                                                         | 14                                                                                        | J5, J6, J11, J12, J16, J17, J21, J22, J25, J29, J30, J32, J36, J37                        | 01-9020BUSS20AWG-00                                                                       | 9020 BUSS                                                                                   | WEICO WIRE                                                                                | MAXIMPAD                                                                                  | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                                                          |                                                                                           |
| 9                                                                                         | 6                                                                                         | J7-J10, J28, J31                                                                          | 01-13137012615P-01                                                                        | 131-3701-261                                                                                | JOHNSON COMPONENTS                                                                        | 131-3701-261                                                                              | CONNECTOR; MALE; THROUGH HOLE; 50OHM SMB PC MOUNT; JACK RECEPTACLE; STRAIGHT; 5PINS                                                                                                                               |                                                                                           |
| 10                                                                                        | 8                                                                                         | J14, J15, J19, J20, J26, J27, J34, J35                                                    | 01-32671P-80                                                                              |                                                                                             | 3267 POMONA ELECTRONICS                                                                   |                                                                                           | 3267 CONNECTOR; MALE; PANELMOUNT; STANDARD UNINSULATED BANANA JACK; STRAIGHT; 1PIN                                                                                                                                |                                                                                           |
| 11                                                                                        | 4                                                                                         | MH1-MH4                                                                                   | 02-SOM35016H-00                                                                           |                                                                                             | 9032 KEYSTONE                                                                             |                                                                                           | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                                                    |                                                                                           |
| 12                                                                                        | 9                                                                                         | R1-R6, R9-R11                                                                             | 80-0010K-23                                                                               | CRCW040210K0FK; RC0402FR-0710KL                                                             | VISHAY DALE;YAGEO PHICOMP                                                                 | 10K                                                                                       | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                                              |                                                                                           |
| 13                                                                                        | 3                                                                                         | R7, R8, R12                                                                               | 80-0000R-26A                                                                              | ERJ-2GE0R00                                                                                 | PANASONIC                                                                                 |                                                                                           | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                                            |                                                                                           |
| 14                                                                                        | 1                                                                                         | U1                                                                                        | 00-SAMPLE-01                                                                              | MAX25210ATAA9/V+                                                                            | MAXIM                                                                                     | MAX25210ATAA9/V+                                                                          | EVKIT PART -IC; VREG; AUTOMOTIVE ULTRA LOW QUIESCENT CURRENT LINEAR REGULATOR FAMILY; TDFN8-EP 3MMx3MM; PACKAGE CODE: T833+3C; PACKAGE OUTLINE DRAWING: 21-0137; LAND PATTERN NUMBER: 90-0059                     |                                                                                           |
| 15                                                                                        | 1                                                                                         | U2                                                                                        | 00-SAMPLE-02                                                                              | MAX25210ASAA9/V+                                                                            | MAXIM                                                                                     | MAX25210ASAA9/V+                                                                          | EVKIT PART -IC; VREG; AUTOMOTIVE ULTRA LOW QUIESCENT CURRENT LINEAR REGULATOR FAMILY; NSOIC8 150MIL; PACKAGE CODE: S8E+12; PACKAGE OUTLINE DRAWING: 21-0111; LAND PATTERN NUMBER: 90-0150                         |                                                                                           |
| 16                                                                                        | 1                                                                                         | U3                                                                                        | 00-SAMPLE-03                                                                              | MAX25211ATAB9/V+                                                                            | MAXIM                                                                                     | MAX25211ATAB9/V+                                                                          | EVKIT PART -IC; VREG; AUTOMOTIVE ULTRA LOW QUIESCENT CURRENT LINEAR REGULATOR FAMILY; TDFN8-EP 2MMx2MM; SIDE WETTABLE; PACKAGE CODE: T822Y+3C; PACKAGE OUTLINE DRAWING: 21-100185; LAND PATTERN NUMBER: 90-100070 |                                                                                           |
| 17 TOTAL                                                                                  | 1 74                                                                                      | PCB                                                                                       | EPCB25210                                                                                 | MAX25210                                                                                    | MAXIM                                                                                     | PCB                                                                                       | PCB:MAX25210 -                                                                                                                                                                                                    |                                                                                           |
| DO NOT ITEM                                                                               | PURCHASE(DNP) QTY                                                                         | REF DES                                                                                   | MAXINV                                                                                    | MFG PART #                                                                                  | MANUFACTURER                                                                              | VALUE                                                                                     | DESCRIPTION                                                                                                                                                                                                       | COMMENTS                                                                                  |
| PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)                                                                                                                         | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) |
| ITEM TOTAL                                                                                | QTY 0                                                                                     | REF DES                                                                                   | MAXINV                                                                                    | MFG PART #                                                                                  | MANUFACTURER                                                                              | VALUE                                                                                     | DESCRIPTION                                                                                                                                                                                                       | COMMENTS                                                                                  |

## MAX25210 EV Kit Schematics

<!-- image -->

## MAX25210 EV Kit PCB Layouts

MAX25210 EV Kit PCB Layout-Top Silk Screen

<!-- image -->

MAX25210 EV Kit PCB Layout-Top Side

<!-- image -->

Evaluates: MAX25210

MAX25210 EV Kit PCB Layout-Bottom Side

<!-- image -->

MAX25210 EV Kit PCB Layout-Bottom Silk Screen

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5 /20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX25210