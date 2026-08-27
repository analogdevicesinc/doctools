<!-- lastmod 2022-08-02 -->
## MAX20047 Evaluation Kit

## General Description

The MAX20047 evaluation kit (EV kit) demonstrates the MAX20047 IC in an integrated and small package format.

The  EV  kit  is  configured  for  400kHz  operation,  with  a 3A  (min)  per-port  current  limit.  There  are  two  Type  A receptacles that can be used to demonstrate the charger emulation capabilities.

## Features

- Configurable Charge-Detection Modes
-  USB-IF BC 1.2 Dedicated Charging Port (DCP)
- -Apple® 2.4A, 2.1A, 1.0A, and Samsung® Termination Resistors
- Integrated, High-Efficiency, DC-DC Converter (440kHz to 2.2MHz)
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Apple is a registered trademark of Apple Inc.

Samsung is a registered trademark of Samsung Electronics Co., Ltd.

## Quick Start

## Test Points

Figure 1 depicts the connections and test points available.

<!-- image -->

Figure 1. MAX20047 Evaluation Kit Test Points

<!-- image -->

Evaluates: MAX20047

## MAX20047 Evaluation Kit

## Detailed Description

The MAX20047 EV kit comes fully assembled, tested, and installed  with  a  MAX20047AFPA/V+  IC,  which  includes a  dual-package  external  FET  added  for  short-to-battery protection.

## EV Kit Interface

## HVEN Terminal

The  HVEN  terminal  connects  to  the  IC's  HVEN  pin through header J3. The HVEN pin is compatible with a wide range of input voltages, from +2.4V (logic-level high) to +40V (automotive battery level).

## Header/Jumper (J3)

The  J3  header/jumper  selects  the  input  source  for  the HVEN  pin.  Installing  a  jumper  connects  the  HVEN  pin directly  to  the  VBAT  terminal.  With  this  selection,  apply -ing a voltage ≥ 5.8V enables the IC. Note: There is a 2s delay before the BUS voltage appears at the HVBUS1 and HVBUS2 terminals. See Table 1 for J3 jumper selections.

Alternatively, removing the jumper connects the HVEN pin to the HVEN test point. The HVEN test point is lightly pulled to ground with a 100kΩ resistor (R5). With this selection, the  IC  is  disabled.  With  the  jumper  on  J3  removed,  a

Evaluates: MAX20047

logic-level signal ≥ 2.4V connected to the HVEN test point enables the IC. A source voltage ≥ 5.8V must be applied to the VBAT terminal. This configuration permits an MCU GPIO signal to control the IC's HVEN pin.

## VBAT/PGND Terminals

Connect  the  battery  voltage  input  between  VBAT  and PGND. The IC's DC-DC converter output voltage can be measured on the VOUT test point (see Figure 1).

## HVBUS1/HVBUS2 Terminals

The BUS output voltage for each USB port can be measured on the test points HVBUS1/HVBUS2, respectively.

## Basic Evaluation Procedures

## Testing HVBUS1/HVBUS2 Voltage

Figure 2 shows the test setup to evaluate the IC's VBUS port voltages:

## Table 1. Jumper Selections (J3)

Figure 2. Test Setup for Testing HVBUS1/HVBUS2

| REFERENCE DESIGNATOR   | INSTALLED                  | REMOVED                                                 |
|------------------------|----------------------------|---------------------------------------------------------|
| J3                     | HVEN pin connected to VBAT | HVEN pin pulled to PGND through a 100k Ω resistor ( R5) |

<!-- image -->

│

## MAX20047 Evaluation Kit

## Equipment Required for Test

- One bench supply (12V/3A)
- Two multimeters (M1, M2)

## Procedure

- 1) With the EV kit connected (see Figure 2 ), set PS1 to 12.000V and enable the power-supply output.
- 2) Wait at least 3s for the IC's port control logic to validate a successful startup condition
- 3) Observe that multimeters M1 and M2 indicate ≈ 5.2V.

## Testing DCP Charger Detection (iPhone ® )

Figure 3 shows the test setup to evaluate the IC's VBUS port voltages.

Figure 3. Test Setup for Verifying DCP Charger Detection with an iPhone

<!-- image -->

iPhone is a registered trademark of Apple Inc.

## Equipment Required for Test

- Bench supply (12V/3A)
- In-line USB voltage/current meter (DROK or similar)
- iPhone

## Procedure

- 1) Connect  the  equipment  (see  Figure  3 ),  set  PS1  to 12.000V, and enable the power supply output.
- 2) Wait at least 3s for the IC's port control logic to validate a successful startup condition. Observe that M1 and M2 indicate ≈ 5.2V.

│

## MAX20047 Evaluation Kit

## Testing DCP Charger Detection (iPad ® )

Figure 4 shows the test setup to evaluate the IC's VBUS port voltages:

## Equipment Required for Test

- Bench supply (12V/3A),
- In-line USB voltage/current meter (DROK or similar), and an iPad.

Figure 4. Test Setup for Verifying DCP Charger Detection with an iPad

<!-- image -->

iPad is a registered trademark of Apple Inc.

## Procedure

- 1) Connect  the  equipment  (see  Figure  4 ),  set  PS1  to 12.000V, and enable the power-supply output.
- 2) Wait at least 3s for the IC's port control logic to validate a successful startup condition. Observe that M1 and M2 indicate ≈ 5.2V.

Evaluates: MAX20047

│

## MAX20047 Evaluation Kit

## Advanced Evaluation Procedures

## Testing the VBUS Current Limit

The  VBUS  current  limit  for  both  USB  ports  are  factory configured  for  3.3A,  which  can  be  changed  to  2.75A, 2.41A, or 2.1A by selecting a different R ILIM  resistor. See the Other Configurations section for details on making this selection. Figure 5 shows the test setup to evaluate the IC's VBUS current limit:

## Equipment Required

- Bench supply (12V/3A)
- Two multimeters (current measurement up to 5A)
- Electronic load (up to 5A)

## Procedure

- 1) Connect  the  equipment  (see Figure  5),  set  PS1  to
2. 12.000V, and enable the power-supply output.
- 2) Wait at least 3s for the IC's port control logic to com -plete a successful startup. Observe that M2 indicates ≈  5.2V.
- 3) Slowly ramp the electronic load sink current from 0.0A to  3.5A.  Observe  the  current  indicated  on  M1  and voltage on M2.
- 4) At some point between the 3.1A and 3.3A sink current, the  current-limit  threshold  is  exceeded,  and  the  IC's VBUS voltage to the port is shut down. The voltage in -dicated on M2 should fall to zero, and the current flow indicated on M1 should also fall to zero.
- 5) Reduce the electronic load sink current below 3.0A.
- 6) After 3s the VBUS voltage should return, and the port again sources current to the electronic load.

Evaluates: MAX20047

6

Figure 5. Test Setup for Testing DCP Current Limit

<!-- image -->

│

## MAX20047 Evaluation Kit

## Testing Short-to-Ground Fault

The  IC  independently  protects  the  HVBUS1/HVBUS2 channels against shorts to ground. Figure 6 shows the test setup to evaluate VBUS short-to-ground fault protection.

## Equipment Required

- Bench supply (12V/3A)
- Multimeter
- Short jumper wire (18AWG)

## Procedure

- 1) Connect  the  equipment  (see  Figure  6 ),  set  PS1  to 12.000V, and enable the power-supply output.
- 2) Wait at least 3s for the IC's port control logic to com -plete a successful startup. Observe that M1 indicates ≈ 5.2V.
- 3) Connect  a  jumper  wire  between  the  PGND  and HVBUS2 terminals.
- 4) Observe that HVBUS1 voltage falls to zero, indicat -ing that the IC's short-to-ground protection has been triggered. After ≈ approximately 3s, the 5.2V on the HVBUS1 terminal should return.
- 5) Remove  the  short  between  HVBUS2  and  PGND, observing no change in the HVBUS1 voltage.
- 6) After ≈ 3s, the 5.2V on the HVBUS2 terminal should return.

Evaluates: MAX20047

Figure 6. Test Setup for Verifying VBUS Short-to-Ground Protection

<!-- image -->

│

## MAX20047 Evaluation Kit

## Testing Short-to-Battery Fault

The IC independently protects the HVBUS1 and HVBUS2 channels against shorts to battery. Figure 7 shows the test setup to evaluate VBUS short-to-battery fault protection.

## Equipment Required

- Bench supply (12V/3A)
- One multimeter (M1)
- Short jumper wire (18AWG)

## Procedure

- 1) Connect  the  equipment  (see  Figure  7 ),  set  PS1  to 12.000V, and enable the power-supply output.
- 2) Wait at least 3s for the IC's port control logic to com -plete a successful startup. Observe that M1 indicates ≈ 5.2V.
- 3) Connect  a  jumper  wire  between  the  VBAT  and HVBUS2 terminals.
- 4) Observe that HVBUS1 voltage falls to zero, indicat -ing that the IC's short-to-battery protection has been triggered.
- 5) Remove the shorting jumper wire. Observe M1. When the overvoltage charge on the HVBUS1 output capac -itor decays enough, the IC's protection logic initiates a recovery cycle, and after ≈ 5.200V, returns to the HVBUS1 and HVBUS2 terminals.

Evaluates: MAX20047

Figure 7. Test Setup for Verifying VBUS Short-to-Battery Protection

<!-- image -->

│

## Other Configurations

## FOSC Resistor Selection (RFOSC)

The  switching  frequency  of  the  IC's  DC-DC  is  set  by connecting a resistor between the FOSC pin and AGND. The  internal  oscillator  can  be  tuned  across  a  wide  fre -quency range, providing greater system design flexibility. The graph shown in Figure 8 plots frequency vs. R FOSC resistance.  See  Table  2  for  resistor  values  for  selected switching frequencies.

## CONFIG Resistor Selection (RCONFIG)

During device boot, the hold configuration is loaded with a value depends on decoding/reading the external CONFIG resistor. For more details regarding the value loaded as a function of resistors connected (see Table 3).

## Setting the VBUS Current Limit (RILIM)

ILIM is a multi-functional pin that can be used to program the VBUS current limit, Apple divider-current, and foldbackcurrent threshold. Table 4 lists configuration options for the ILIM pin.

Evaluates: MAX20047

Figure 8. Frequency vs. R FOSC  Resistance

<!-- image -->

## Table 2. RFOSC Resistor Values for Selected Switching Frequency

| FOSC (kHz)   |   224,320 |   300,840 |   380,500 |   493,100 |   595,800 |   756,000 |   1,000,500 |   1,479,000 |   2,237,000 |
|--------------|-----------|-----------|-----------|-----------|-----------|-----------|-------------|-------------|-------------|
| R FOSC (kΩ)  |       133 |      97.6 |      73.2 |        59 |      48.7 |      38.3 |        28.7 |        19.1 |        12.7 |

## Table 3. Configuration Pin Options

| CONFIGURATION PIN CONNECTION   | LEVEL (at 50µA)   | HOLD MODE   | HOLD TIME (MINUTES)   |
|--------------------------------|-------------------|-------------|-----------------------|
| Connect toAGND                 | Ground            | Disabled    | N/A                   |
| 24,900Ω toAGND                 | 1.25V             | Enabled     | 30                    |
| Connect to BIAS                | VBIAS             | Enabled     | 60                    |

## Table 4. ILIM Pin Options

| ILIM PIN CONNECTION   |   APPLE DIVIDER-CURRENT (A) |   ILIMIT (A) | FOLDBACK (A)   |
|-----------------------|-----------------------------|--------------|----------------|
| Connect toAGND        |                         2.4 |          3.3 | None           |
| 8,870Ω toAGND         |                         2.4 |          3.3 | 2.41           |
| 15,800Ω toAGND        |                         2.4 |          3.3 | 2.1            |
| 24,900Ω toAGND        |                         2.4 |         2.75 | 2.1            |
| 35,700Ω toAGND        |                         2.4 |         2.75 | None           |
| 49,900Ω toAGND        |                         2.1 |         2.41 | None           |
| 68,100Ω toAGND        |                         2.1 |         2.41 | 2.1            |
| Connect to BIAS       |                         1.0 |          2.1 | None           |

│

## PCB Layout Guidelines

Good  PCB  layout  is  critical  to  proper  system  perfor -mance. The loop area of the DC-DC conversion circuitry must be minimized as much as possible. Place the input capacitor, power inductor, and output capacitor very close to the IC. Shorter traces should be prioritized over wider traces. Similarly,  the  COMP network should be close to the IC and connect directly to AGND. The BIAS capacitor should be close to the IC and connect directly to PGND or via down to a layer 2 ground plane.

A low-impedance ground connection between the input and output capacitors is necessary (route through the ground pour). Treat the SUP and PGND pins the same as you would an exposed pad. Place multiple vias in the pad and connect to all other ground layers for proper heat dissipa -tion; failure to perform this step can result in the IC repeatedly  reaching  thermal  shutdown.  Prioritize  the  use  of  a large, single ground as opposed to multiground schemes; high-frequency  return  currents  flow  directly  under  the corresponding traces.

Proper thermal dissipation  is  critical  for  this  application. Maximize ground pour and keep a single continuous pour on the top and bottom layers; do not isolate pours. Most heat  radiates  from  PGND  and  SUP,  so  adding  internal and  bottom-layer  SUP  pours  can  be  beneficial.  Do  not place noncritical traces and components near the IC footprint (on any layer). This allows for wide/large copper pour near the PGND and SUP vias. Contact the Maxim appli -cations team for layout reviews and recommendations.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20047EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX20047 EV Kit Bill of Materials

| REFERENCE DESIGNATOR   |   QTY. | NAME                    | DESCRIPTION                                                  | MFG. PART NUMER      | MANUFACTURER            |
|------------------------|--------|-------------------------|--------------------------------------------------------------|----------------------|-------------------------|
| C1,C2                  |      2 | C_OUT                   | Ceramic Capacitor (1210) 47uF 10V X7R                        | GRM32ER71A476KE15L   | Murata                  |
| C3                     |      1 | C_IN                    | Electrolytic Capacitor( 8x6.2mm) 47uF 20% 35V SMD            | EEEFC1V470P          | Panasonic               |
| C4                     |      1 | C_SUPSW                 | Ceramic Capacitor (1206) 10uF 35V X7R                        | CGA5L1X7R1V106K160AC | TDK                     |
| C5, C6                 |      2 | C_SDMOS1/2              | Ceramic Capacitor (0805) 1uF 16V X7R                         | GCM219R71C105KA37J   | Murata                  |
| C7,C8,C12              |      3 | C_FILT_OUT, C_BST       | Ceramic Capacitor (0402) 0.1uF 50V X7R                       | CGA2B3X7R1H104K050BB | TDK                     |
| C9                     |      1 | C_COMP_P                | Ceramic Capacitor (0402) 3pF 50V C0G                         | CGA2B2C0G1H3R3C050BA | TDK                     |
| C10                    |      1 | C_COMP_S - 400kHz       | Ceramic Capacitor (0402) 2200pF 50V X7R                      | GCM155R71H222KA37D   | Murata                  |
| C11                    |      1 | C_BIAS                  | Ceramic Capacitor (0805) 2.2uF 16V X7R 0805                  | CGA4J3X7R1C225K125AB | TDK                     |
| C13,C14                |      2 | C_FILT_IN               | Ceramic Capacitor (0402) 2200pF 50V X7R                      | GCM155R71H222KA37D   | Murata                  |
| C15                    |      1 | CSUP_FILT               | Ceramic Capacitor (0603) 0.1uF 50V X7R                       | CGA3E2X7R1H104K080AA | TDK                     |
| C16,C17                |      2 | C_FILT_OUT              | Ceramic Capacitor (0402) 0.22uF 35V X7R                      | CGA2B1X7R1V224KC     | TDK                     |
| C18, C19               |      2 | C_HVBUS1/2              | Ceramic Capacitor (1206) 10uF 25V X7R                        | CGA5L1X7R1E106M160AC | TDK                     |
| FB1-3                  |      3 | Input/Output Ferrite    | Ferrite Bead (1806) Automotive Grade, 6 Amp Max, 9 mOhms DCR | BLM41PG600SZ1L       | Murata                  |
| GND1/2                 |      2 | Multipurpose Test Point | Black Test Point                                             | 5011                 | Keystone                |
| HVBUS1/2               |      2 | Multipurpose Test Point | Red Test Point                                               | 5010                 | Keystone                |
| HVEN                   |      1 | Multipurpose Test Point | Yellow Test Point                                            | 5014                 | Any (Keystone)          |
| J1,J2                  |      2 | FCI_73725_USB_Rec       | Type A USB Receptacle, Through Hole, Right Angle             | 73725                | Amphenol FCI            |
| J3                     |      1 | HVEN_VBAT               | 2 Pos. 0.100" Header                                         | 4-103327-0           | Any (TE)                |
| L1                     |      1 | L - 400kHz              | 4.7uH Molded Inductor, 10.5A Isat                            | XAL6060-472MEB       | Coilcraft               |
| OUT                    |      1 | Miniature Test Point    | DNP                                                          | DNP                  | -                       |
| PGND, VBAT             |      2 | Test Point              | Wire Loop (18 guage uncoated bus bar)                        |                      | Any (Belden)            |
| Q1                     |      1 | External FETs           | Dual N-Channel Mosfet (8SOIC) 30V 4.9A                       | NTMD4820N            | On Semi                 |
| R1                     |      1 | R_COMP_S - 400kHz       | Resistor (0402) 16.2kΩ 1% 1/16W                              | CRCW040216K2FKED     | Vishay Dale             |
| R2                     |      1 | R_ILIM                  | Resistor (0402) SHORT                                        | CRCW04020000Z0ED     | Vishay Dale             |
| R3                     |      1 | R_FOSC                  | Resistor (0402)73.2k 1% 1/16W                                | CRCW040273K2FKED     | Vishay Dale             |
| R4                     |      1 | R_CONFIG                | Resistor (0402) SHORT                                        | CRCW04020000Z0ED     |                         |
| R5                     |      1 | R_HVEN                  | Resistor (0402) 100kΩ 5% 1/16W                               | CRCW0402100KJNED     | Vishay Dale Vishay Dale |
| R6, R7                 |      2 | R_HVBUS1/2              | Resistor (0603) 1Ω ±5% 1/10W                                 | CRCW06031R00JNEA     | Vishay Dale             |
|                        |      1 | Maxim Device            | Dual DCP Charging Port                                       | MAX20047AFPA/V+      | Maxim Integrated        |
| U1 -                   |      1 | -                       | PCB: MAX20047 Evaluation Kit                                 | MAX20047EVKIT#       | Maxim Integrated        |

## MAX20047 EV Kit Schematic

<!-- image -->

MAX20047 EV Kit Schematic

Evaluates: MAX20047

│

## MAX20047 EV Kit PCB Layouts

MAX20047 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Evaluates: MAX20047

│

## MAX20047 EV Kit PCB Layouts (continued)

<!-- image -->

MAX20047 EV Kit PCB Layout-Top Layer

│

## MAX20047 EV Kit PCB Layouts (continued)

MAX20047 EV Kit PCB Layout-Layer 2

<!-- image -->

│

## MAX20047 EV Kit PCB Layouts (continued)

MAX20047 EV Kit PCB Layout-Layer 3

<!-- image -->

│

## MAX20047 EV Kit PCB Layouts (continued)

MAX20047 EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX20047 EV Kit PCB Layouts (continued)

MAX20047 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX20047 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX20047