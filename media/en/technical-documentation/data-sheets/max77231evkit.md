<!-- lastmod 2022-08-02 -->
## MAX77231 Evaluation Kit

## General Description

The MAX77231 evaluation kit (EV kit) is a fully assembled and tested PCB for evaluating the MAX77231 low-noise step-up  DC-DC  converter.  It  is  optimized  for  boost applications requiring very low ripple/noise and small PCB space. The EV kit is set up to provide an 11.2V output from an input voltage ranging from 2.7V to 4.8V, and can deliver up to 10mA of current. The output ripple and noise are suppressed to 35µV RMS . Other output voltages up to 16.2V can be factory set. Jumpers are provided to help evaluate features of the MAX77231 IC.

## Features

- Ultra-Small Solution Circuit Area (&lt; 7mm 2 )
- 35µVRMS Typical Output Ripple/Noise
- 2.7V to 4.8V Input Range
- 11.2V/10mA Output
- Output Factory-Trimmable from 11.2V to 16.2V
- 125µA No-Load Supply Current-Output On
- &lt; 1µA Shutdown Supply Current
- True Shutdown Load Disconnect
- Selectable Active Discharge
- Proven PCB layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX77231

## Quick Start

## Recommended Equipment

- MAX77231 EV kit
- 2.5V to 6V 100mA bench power supply (PS1)
- Two digital multimeters (DMM1, DMM2)
- 0-50mA electronic load or appropriate load resistors

## Procedure

The EV kit is a fully assembled and tested surface mount circuit board. Follow the steps below to set up and verify the IC and board operation:

- 1) Verify that the jumpers on the EV kit are configured as shown in Table 1.
- 2) If using an electronic load, set it to 6mA and turn it off. Alternately, obtain a 2kΩ resistor (values from 1.8kΩ to 2.4kΩ are also acceptable).
- 3) Set the power supply to 3.6V and turn it off.
- 4) Connect the MAX77231 evaluation board, bench power supply and DMMs as shown in Figure 1.
- 5) Turn on the power supply.
- 6) Verify that voltage read by DMM1 is 3.6V.
- 7) Verify that voltage read by DMM2 is 11.2V.
- 8) Sweep the power supply down to 2.7V.
- 9) Verify that voltage read by DMM2 is 11.2V.
- 10)  Sweep the power supply up to 4.8V.
- 11)  Verify that voltage read by DMM2 is 11.2V.
- 12)  Disconnect RL (or electronic load).
- 13)  Verify that voltage read by DMM2 is 11.2V.

## Table 1. Default Jumper Settings

| JUMPER   | DEFAULT SHUNT POSITION   | MODE                 |
|----------|--------------------------|----------------------|
| JU1      | 1-2                      | Active Discharge Off |
| JU2      | 1-2                      | Power On             |

<!-- image -->

## MAX77231 Evaluation Kit

## Evaluates: MAX77231

Figure 1. Quick-Start Connection Diagram

<!-- image -->

## Detailed Description

The  MAX77231  EV  kit  evaluates  the  MAX77231  lownoise boost DC-DC converter IC. The IC utilizes a highfrequency  PFM  boost  followed  by  a  low-noise  pMOS linear LDO regulator that reduces output noise and ripple to 35µV RMS  in a 1MHz BW at V OUT .

The step-up converter output is 11.7V at V BST , and 11.2V at V OUT  from an input voltage range from 2.7V to 4.8V. Other  output  voltages  up  to  16.2V  are  available  after replacing U1. Contact the factory for other ICs.

## Enable/Active Discharge

The  MAX77231  can  be  disabled  with/without  active discharge. See Table 2 for ENM and ENS control logic for active discharge.

## Table 2. MAX77231 Enable Truth Table

| JU1             | JU1   | JU2             | JU2   | POWER STATE   | ACTIVE    |
|-----------------|-------|-----------------|-------|---------------|-----------|
| JUMPER POSITION | ENM   | JUMPER POSITION | ENS   |               | DISCHARGE |
| 2-3             | 0     | X               | X     | Power Down    | ON        |
| 1-2             | 1     | 2-3             | 0     | Power Down    | OFF       |
| 1-2             | 1     | 1-2             | 1     | Active        | OFF       |

│

## Overload and Short Circuit Protection

The MAX77231 is fully protected against output short circuits. In the case of a short circuit, off time is lengthened to prevent inductor  current  from  climbing.  The  device  will  source current  into  the  short  indefinitely,  without  damage,  until the short is removed.

Note, however, that only OUT (and not BST) is overload protected. A short at V BST  to ground may cause inductor and LX current to rise above guaranteed operating levels.

## Component Suppliers

| SUPPLIER    | WEBSITE         |
|-------------|-----------------|
| Taiyo Yuden | www.t-yuden.com |
| Cyntec      | www.cyntec.com  |

Note: Indicate that you are ordering the MAX77231 EV kit when contacting these suppliers.

## Component List, PCB Layout, and Schematic

See the following links for component information, PCB layout diagrams, and schematics.

- MAX77231 EV BOM
- MAX77231 EV PCB Layout
- MAX77231 EV Schematic
- MAX77231 EV Minimal Component Schematic

Evaluates: MAX77231

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77231EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX77231 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,ntegrated reserves the right to change the circuitry and specifications Zithout notice at any time.

│

Evaluates: MAX77231

| TITLE: Bill of Materials                                | TITLE: Bill of Materials                                | TITLE: Bill of Materials                                | TITLE: Bill of Materials                                | TITLE: Bill of Materials                                | TITLE: Bill of Materials                                | TITLE: Bill of Materials                                | TITLE: Bill of Materials                                                                                         | TITLE: Bill of Materials                                |
|---------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| DATE: 12/11/2015                                        | DATE: 12/11/2015                                        | DATE: 12/11/2015                                        | DATE: 12/11/2015                                        | DATE: 12/11/2015                                        | DATE: 12/11/2015                                        | DATE: 12/11/2015                                        | DATE: 12/11/2015                                                                                                 | DATE: 12/11/2015                                        |
| DESIGN: max77231_evkit_b                                | DESIGN: max77231_evkit_b                                | DESIGN: max77231_evkit_b                                | DESIGN: max77231_evkit_b                                | DESIGN: max77231_evkit_b                                | DESIGN: max77231_evkit_b                                | DESIGN: max77231_evkit_b                                | DESIGN: max77231_evkit_b                                                                                         | DESIGN: max77231_evkit_b                                |
| NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE                                                          | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE |
| ITEM                                                    | REF_DES                                                 | DNI/DNP                                                 | QTY                                                     | MFG PART #                                              | MANUFACTURER                                            | VALUE                                                   | DESCRIPTION                                                                                                      | COMMENTS                                                |
| 1                                                       | C1                                                      | -                                                       | 1                                                       | LMK107BJ225KA                                           | TAIYO YUDEN                                             | 2.2UF                                                   | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 10V; TOL=10%; TG= - 55 DEGC TO +85 DEGC; TC=X5R                      |                                                         |
| 2                                                       | C2, C3                                                  | -                                                       | 2                                                       | C1608X5R1E225K; TMK107ABJ225KA - T; TMK107BJ225KA       | TDK/TAIYO YUDEN                                         | 2.2UF                                                   | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; MODEL=; TG= - 55 DEGC TO +85 DEGC; TC=X5R              |                                                         |
| 3                                                       | ENM, ENS, VBST                                          | -                                                       | 3                                                       | 5000                                                    | KEYSTONE                                                | N/A                                                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |                                                         |
| 4                                                       | GND, VIN, PGND, VOUT                                    | -                                                       | 4                                                       | 9020 BUSS                                               | WEICO WIRE                                              | MAXIMPAD                                                | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE - S; 20AWG                       |                                                         |
| 5                                                       | JU1, JU2                                                | -                                                       | 2                                                       | PEC03SAAN                                               | SULLINS                                                 | PEC03SAAN                                               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                        |                                                         |
| 6                                                       | L1                                                      | -                                                       | 1                                                       | PSB12101T - 1R0MSD                                      | CYNTEC                                                  | 1UH                                                     | INDUCTOR; SMT; MAGNETICALLY SHIELDED; 1UH; TOL=+/ - 20%; 1.12A                                                   |                                                         |
| 7                                                       | U1                                                      | -                                                       | 1                                                       | MAX77231EZL+                                            | MAXIM                                                   | MAX77231EZL +                                           | IC; VREG; ULTRA LOW NOISE BOOST REGULATOR; WLP9                                                                  |                                                         |
| 8                                                       | H1                                                      | DNP                                                     | 0                                                       | PEC06SAAN                                               | SULLINS ELECTRONICS CORP.                               | PEC06SAAN                                               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS                                                        |                                                         |
| 9                                                       | PCB                                                     | -                                                       | 1                                                       | MAX77231                                                | MAXIM                                                   | PCB                                                     | PCB Board:MAX77231 EVALUATION KIT                                                                                |                                                         |
| TOTAL                                                   |                                                         |                                                         | 15                                                      |                                                         |                                                         |                                                         |                                                                                                                  |                                                         |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->