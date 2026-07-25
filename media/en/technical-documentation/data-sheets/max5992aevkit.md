<!-- lastmod 2022-08-03 -->
## MAX5992A Evaluation Kit

## General Description

The MAX5992A/B evaluation kit (EV kit) is a fully assembled  and  tested  surface-mount  circuit  board  featuring the  MAX5992A/B  IEEE ®   802.3af/at-compliant  network powered  device  (PD)  interface  controller  IC,  which  pro vides PD detection signature, PD classification signature, inrush  current  control,  undervoltage  lockout  (UVLO), and  active  FET-bridge  driver.  The  EV  kit  is  a  compact and low-cost design used in power-over-Ethernet (PoE) applications requiring DC  power  from  an  Ethernet network  port  for  PDs,  such  as  fiber-to-the-femotocell/ picocell/microcell,  fiber-to-the-home/fiber-to-the-building (FTTH/FTTB),  IP  phones,  wireless  access  nodes,  and security cameras.

The EV kit features a 2x2P PD or multi-PD redundancy configuration using the ICs. The 2x2P powers a galvani -cally isolated 100W, 250kHz switching-frequency, activeclamped, synchronous-rectified forward DC-DC converter using  the  MAX5974D.  The  device  circuit  achieves  high efficiency by using a forward DC-DC converter topology. The  surface-mount  transformer  provides  up  to  +1500V galvanic isolation for the output. The EV kit output voltage is configured for +12V and provides up to 8.4A load current.

Note: In the multi-PD redundancy mode, the total output power must be reduced to 50W, which is limited by the LAN transformer on board. Its port current must be limited to 1.2A per 2 pair.

The EV kit circuit receives its power from IEEE 802.3af/ at-compliant power-sourcing equipment (PSE). The PSE provides  the  required  -44V  to  -57V  DC  power  over  a twisted-pair Ethernet network cable to the EV kit's RJ45 connectors. The EV kit features an active FET bridge for separating  the  DC  power  provided  by  an  end-span  or mid-span Ethernet system.

Warning: The EV kit is designed to operate with high voltages. Dangerous voltages are present on this EV kit and on equipment connected to it. Users who power up this EV kit, or power the sources connected to it, must be careful to follow safety procedures appropriately to work with high-voltage electrical equipment.

Under severe fault or failure conditions, this EV kit may dissipate large amounts of power, which could result in the mechanical ejection of a component or of component debris at high velocity. Operate this kit with care to avoid possible personal injury.

<!-- image -->

## Features

- IEEE 802.3af/at-Compliant PD Interface Circuit
- -39V to -57V Startup Input Voltage Range
- Active FET Bridge
- Demonstrates 2x2P PD and Multi-PD Redundancy Configurations
- Demonstrates an Isolated 100W Active-Clamped, Synchronous-Rectified Forward DC-DC Converter
- Isolated +12V Output at 8.4A
- PD Detection and Configurable Classification Signatures
- Internal UVLO at +38.6V
- Evaluates End Span and Midspan Ethernet Systems
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX5992A

MAX5992B

## MAX5992A Evaluation Kit

## Quick Start

## Required Equipment

- MAX5992A/B EV kit
- MAX5980 EV kit
- IEEE 802.3af/at-compliant PSE and Category 5e Ethernet network cable
- Two -54V, 15A-capable DC power supply
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Use one of the following methods to power the EV kit:
- a) If network connectivity is required: Connect a Category 5e ethernet network cable from the EV kit input port's RJ45 connectors (J1\_POWER, J2\_POWER) to the corresponding PSE ethernet LAN connections, which provide power to the EV kit. Two modular RJ45 jacks (J1\_DATA, J2\_DATA) provide an interface with the ethernet data signals only.
- b) If network connectivity is not required: Connect a -54V DC power supply between the -54V1, -V54V2, and GND PCB pads on the EV kit. Connect the power-supply positive terminal to the V+ PCB pad and the negative terminal to the V- PCB pad.
- 2) Activate the PSE power supply or turn on the external DC power supply.
- 3) Using a voltmeter, verify that the EV kit provides +12V across the V OUT  and RTN PCB pads.

## Detailed Description of Hardware (or Software)

The MAX5992A/B EV kit is a fully assembled and tested surface-mount circuit board that evaluates the MAX5992A/B IEEE 802.3af/at-compliant network PD interface controller. The EV kit features two powered Ethernet ports, two dataonly  Ethernet  ports,  and  a  MAX5974D  active-clamped, current-mode PWM controller IC.

## Evaluates: MAX5992A MAX5992B

The  EV  kit  is  a  2x2P  PD  configuration  PoE  using  the PD  controller  IC.  The  2x2P  PD  interface  powers  a galvanically  isolated  100W  DC-DC  converter  using  the MAX5974D active-clamped, current-mode PWM controller IC  in  a  forward-feedback  topology.  The  EV  kit  receives power from two IEEE 802.3af/at-compliant PSEs and two UTP cables connected to the EV kit's RJ45 connectors. The EV kit accepts power from an endspan or midspan PSE  network  con  figuration.  The  EV  kit  also  provides Ethernet jacks J1\_DATA and J2\_DATA for interfacing to the Ethernet data signals. PCB pads -54V1, -54V2, and GND  are  available  for  powering  the  EV  kit,  if  network connectivity is not required.

The  EV  kit  output  voltage  is  configured  for  +12V  and provides up to 8.4A output current. The EV kit circuit use MOSFETs N1 and N2 for synchronous rectification on the secondary  side.  Transformer  T1  provides  up  to  1500V galvanic isolation for the output. Isolated feedback voltage is achieved using optocoupler U4 and voltage reference U5. Current-sense resistors R45 and R46 limit the peak current through transistor N7 and primary transformer T1. Capacitor  C14  and  transistor  N12  form  a  clamping net-work that protects transformer T1 against saturation due to reverse current, by monitoring the voltage across the MAX5974D's CS input during auxiliary driver N4 off-time.

The  EV  kit  accommodates  mainly  two  applications  to exercise:  2x2P  and  multi-PD  redundancy. As  a  default, the EV kit is set to 2x2P . Besides these two configurations, single  PD  operation  can  be  configured,  but  power  is limited  by  the  current  capability  of  the  LAN  transformer, which supports up to 1.2A per 2P.

In the 2x2P application, there are sets of PoE power lines. Each PSE has its own PD. The PSEs are all connected to the same power supply. The two PoE sets share the same Ethernet cable. Figure 1 is the system-level diagram. To test  the  EV  kit  in  2x2P ,  the  MAX5980A  EV  kit  needs  to reconfigured  into  2x2P  mode  accordingly.  Refer  to  the MAX5980 EV kit data sheet for more details.

In multi-PD redundancy mode, the PSEs are independent. The input  voltages  of  each  PSE  can  be  different.  Each PSE  is  connected  to  its  PD  through  an  independent ethernet cable (see Figure 1).

## Evaluates: MAX5992A MAX5992B

Figure 1. 2x2P Application, Multi-PD Redundancy

<!-- image -->

│

## MAX5992A Evaluation Kit

## 2x2P PD Configuration

Jumper JU1 sets the 2x2P PD configuration of the devic -es. See Table 1 for shunt positions.

## Power Good (PG)

Jumper JU2 sets the PG output for 2x2P PD and multi-PD configurations. See Table 2 for shunt positions.

## Multi-PD Redundancy Configuration

The EV kit provides an option to configure for multi-PD redundancy  operation.  Set  jumpers  JU1,  JU2  accordingly  and  remove  resistors  R116,  R117  for  redundancy configuration.

## Table 1. JU1 Jumper Selection (SIG\_OK)

| SHUNT POSITION   | SIG_OK PINS                         | 2x2PPDCONFIGURATION   |
|------------------|-------------------------------------|-----------------------|
| Installed*       | U1 SIG_OK connects to U2 SIG_OK     | Enabled               |
| Not installed    | U1 SIG_OK and U2 SIG_OK unconnected | Disabled              |

## Table 2. JU2 Jumper Selection (PG)

| SHUNT POSITION   | PG PINS                     | 2x2P PD AND MULTI-PD CONFIGURATION   |
|------------------|-----------------------------|--------------------------------------|
| Installed*       | U1 PG connects to U2 PG     | 2x2 PD and multi-PD                  |
| Not installed    | U1 PG and U2 PG unconnected | Operate with U1 only                 |

## Table 3. JU3 Jumper Selection (RDCY\_SEL of U1)

| SHUNT POSITION   | RDCY_SEL PIN (U1)   | MULTI-PDREDUNDANCYCONFIGURATION   |
|------------------|---------------------|-----------------------------------|
| Installed        | Forced to -54V1     | Enabled                           |
| Not installed*   | Unconnected         | Disabled                          |

## Table 4. JU4 Jumper Selection (RDCY\_SEL of U2)

| SHUNT POSITION   | RDCY_SEL PIN (U1)   | MULTI-PDREDUNDANCYCONFIGURATION   |
|------------------|---------------------|-----------------------------------|
| Installed        | Forced to -54V2     | Enabled                           |
| Not installed*   | Unconnected         | Disabled                          |

## Table 5. PD Classification Signature Selection

|   CLASS | MAXIMUM POWER USED BY PD (W)   |   RESISTORS R51, R56 (Ω) |
|---------|--------------------------------|--------------------------|
|       0 | 0.44 to 12.95                  |                      615 |
|       1 | 0.44 to 3.84                   |                      118 |
|       2 | 3.84 to 6.49                   |                     69.8 |
|       3 | 6.49 to 12.95                  |                     45.3 |
|       4 | 12.95 to 25.5                  |                     30.9 |
|       5 | > 25.5                         |                     21.5 |

│

Evaluates: MAX5992A

MAX5992B

Jumper JU3 sets the multi-PD redundancy configuration of U1. See Table 3 for shunt positions.

Jumper JU4 sets the multi-PD redundancy configuration of U2. See Table 4 for shunt positions.

## PD Classification Signature

The  EV  kit  is  configured  for  a  Class  5  (&gt;  25.5W)  PD classification  by  resistors  R51  and  R56. To  reconfig-ure the  PD  classification,  replace  the  surface-mount  0805 resistors, R51 and R56. Table 5 lists the PD classification options.

## Component Suppliers

| SUPPLIER                               | WEBSITE                     |
|----------------------------------------|-----------------------------|
| Coilcraft, Inc.                        | www.coilcraft.com           |
| Diodes Incorporated                    | www.diodes.com              |
| Fairchild Semiconductor                | www.fairchildsemi.com       |
| Johanson Dielectrics                   | www.johansondielectrics.com |
| KEMET Corp                             | www.kemet.com               |
| Murata Electronics North America, Inc. | www.murata-northamerica.com |
| NEC Corp.                              | www.nec.com                 |
| Panasonic Corp                         | www.panasonic.com           |
| Pulse Engineering                      | www.pulseeng.com            |
| SANYO Electric Co., Ltd.               | www.sanyo.com               |
| Sumida Corp.                           | www.sumida.com              |
| TDK Corp.                              | www.component.tdk.com       |
| Texas Instruments Inc.                 | www.ti.com                  |
| Vishay                                 | www.vishay                  |

Note:

Indicate that you are using the MAX5992A when contacting these component suppliers.

## Ordering Information

| PAR T          | TYPE   |
|----------------|--------|
| MAX5992AEVKIT# | EV Kit |

#Denotes an RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

Evaluates: MAX5992A MAX5992B

## MAX5992A Evaluation Kit

## MAX5992A EV Kit Bill of Materials

| DESIGNATION        |   QTY | DESCRIPTION                                                                              |
|--------------------|-------|------------------------------------------------------------------------------------------|
| C1                 |     1 | 1µF±10%,16VX7Rceramic capacitor (0805) MurataGRM21BR71C105KTDK C2012X7R1C105K            |
| C11, C31, C36      |     4 | 100pF±5%,50VC0Gceramic capacitors (0603) Murata GRM1885C1H101J                           |
| C5, C10            |     3 | 0.047µF,50VX7Rceramic capacitors (0603) Murata GRM188R71H473K                            |
| C4, C32            |     2 | 0.01µF,50VX7Rceramic capacitors (0603) Murata GRM188R71H103K                             |
| C6                 |     1 | 1µF±10%,16VX7Rceramic capacitor (0603) MurataGRM188R71C105KTDK C1608X7R1C105K            |
| C7, C8, C13        |     3 | 2.2µF ±10%, 100V ceramic capacitors (1210) TDK C3225X7R2A225K Murata GRM32ER72A225K      |
| C9, C25, C23       |     3 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K                      |
| C12, C15           |     2 | 0.1µF ±10%, 100V X7R ceramic capacitors (1206) KEMET C1206C104K1RACTU                    |
| C14                |     1 | 0.047µF ±10%, 250V X7R ceramic capacitor (1206) Murata GRM31CR72E473K TDK C3216X7R2E473K |
| C19                |     1 | 220pF ±10%, 250V X7R ceramic capacitor (0603) Murata GRM188R72E221K                      |
| C26                |     1 | 100µF, 16V polymer tantalum capacitor SANYO 16TQC100M KEMET T521D107M016ATE050           |
| C27-C30, C34       |     5 | 22µF ±10%, 16V X5R ceramic capacitors ( 1206) Murata GRM31CR61C226K                      |
| C35, C40, C42, C43 |     0 | Not installed, ceramic capacitors (0603)                                                 |

Evaluates: MAX5992A

MAX5992B

| DESIGNATION                          |   QTY | DESCRIPTION                                                                       |
|--------------------------------------|-------|-----------------------------------------------------------------------------------|
| C38                                  |     1 | 33µF, 100V aluminum electrolytic capacitor (8.3mm x 8.3mm) Panasonic EEE-FK2A330P |
| C39                                  |     1 | 4700pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H472K               |
| C41                                  |     1 | 2200pF ±10%, 50V X7R ceramic capacitor 0603 Murata GRM188R71H222K                 |
| C45                                  |     1 | 2200pF, 2000V X7R ceramic capacitor (1808) Johanson 202R29W222KV4                 |
| C50-C53, C56-C59 C80-C87             |    16 | 0.01µF, 100V X7R ceramic capacitors (0805) Murata GRM21BR72A103K                  |
| C54, C55, C60, C88-C90               |     6 | 1000pF ±10% 250V X7R ceramic capacitors (1808) Murata GA352QR7GF102K              |
| D1                                   |     1 | 10V zener diode (SOD323) Diodes Inc. BZT52C10S-7-F                                |
| D2, D6                               |     2 | 16V zener diodes (SOD323) Diodes Inc. BZT52C16S-7-F                               |
| D3, D4, D8, D10                      |     4 | 250V, 200mAdiodes (SOD323) Diodes Inc. BAV21WS-7-F                                |
| D5, D9                               |     2 | 75V, 200mAdiodes (SOD323) Diodes Inc. BAV16WS-7-F                                 |
| D7                                   |     1 | 120V, 400W TVS diode Diodes Inc. SMAJ120A-13-F                                    |
| D13, D14                             |     2 | Transient voltage suppressors (SMB) Diodes Inc. SMBJ58A (Top Mark: NG)            |
| D15, D16                             |     2 | 100V, 2Adiodes (SMB) Fairchild S2B                                                |
| J1_Data, J1_Power, J2_Data, J2_Power |     4 | 8-position, side-entry modular jack assemblies                                    |
| JU1-JU4                              |     4 | 2-pin headers                                                                     |
| L1                                   |     1 | 1000µH, 100mAinductor (4mm x 4mm) Coilcraft LPS4018-105ML_                        |
| L2                                   |     1 | 2.3µH, 7Ainductor (6.8mm x 6.8mm) Pulse PG0083.232                                |

│

## MAX5992A Evaluation Kit

## MAX5992A EV Kit Bill of Materials (continued)

| DESIGNATION                         |   QTY | DESCRIPTION                                                                      |
|-------------------------------------|-------|----------------------------------------------------------------------------------|
| L3                                  |     1 | 4.7µH, 15A inductor (14.9mm x 14.9mm) Sumida CDEP147NP-4R7MC-95                  |
| N1-N4                               |     4 | 80V, 4.3A/2.8A n-/p-channel MOSFETs (4 DPAK) Fairchild FDD3510H                  |
| N5, N6                              |     2 | 100V, 7An-channelMOSFETs (8 SO) Fairchild FDS86141                               |
| N7                                  |     1 | 150V, 7.2An-channelMOSFET (PowerPak, 8 SO) Vishay SI7430DP or Fairchild FDMS2572 |
| N8, N10, N13                        |     0 | Not installed, MOSFETs (PowerPak, 8 SO)                                          |
| N9, N11                             |     2 | 100V, 17.6An-channel MOSFETs (PowerPak, 8 SO) Vishay SiR882DP                    |
| N12                                 |     1 | 150V, -1.9Ap-channelMOSFET (PowerPak, 1212-8) Vishay Si7115DN                    |
| Q1                                  |     1 | 80V, 1Anpn transistor Diodes Inc. BCX56                                          |
| Q2                                  |     1 | 40V, 600mApnp transistor Diodes Inc. MMBT4403-7-F                                |
| R1                                  |     1 | 316kΩ ±1% resistor (0805)                                                        |
| R2                                  |     1 | 100kΩ ±1% resistor (0805)                                                        |
| R3                                  |     1 | 1.5kΩ ±1% resistor (0603)                                                        |
| R4, R14, R31, R33, R39              |     1 | 10kΩ ±1% resistors (0603)                                                        |
| R5, R36                             |     2 | 75kΩ ±1% resistors (0603)                                                        |
| R6, R12, R47, R48, R52-R54, R57-R59 |     0 | Not installed, resistors (0603)                                                  |
| R7                                  |     1 | 30kΩ ±1% resistor (0603)                                                         |
| R8                                  |     1 | 0Ω ±5% resistor (0603)                                                           |
| R10                                 |     1 | 51kΩ ±1% resistor (0805)                                                         |
| R13, R41-R43                        |     4 | 3Ω ±5% resistor (0603)                                                           |
| R16                                 |     1 | 3.6kΩ ±1% resistor (0603)                                                        |
| R17, R30                            |     2 | 1kΩ ±1% resistors (0603)                                                         |
| R18                                 |     1 | 42.2kΩ ±1% resistor (0603)                                                       |
| R19                                 |     1 | 200kΩ ±1% resistor (0603)                                                        |

| DESIGNATION                                                                 |   QTY | DESCRIPTION                                                                 |
|-----------------------------------------------------------------------------|-------|-----------------------------------------------------------------------------|
| R20                                                                         |     1 | 510Ω ±1% resistor (0603)                                                    |
| R24                                                                         |     1 | 200Ω ±1% resistor (1206)                                                    |
| R25, R29                                                                    |     2 | 200Ω ±1% resistors (0603)                                                   |
| R26                                                                         |     1 | 120kΩ ±1% resistor (0603)                                                   |
| R32                                                                         |     1 | 2kΩ ±1% resistor (0603)                                                     |
| R34                                                                         |     1 | 3.3kΩ ±1% resistor (0603)                                                   |
| R35                                                                         |     1 | 13kΩ ±1% resistor (0603)                                                    |
| R37                                                                         |     1 | 10Ω ±1% resistor (0603)                                                     |
| R45, R46                                                                    |     2 | 40mΩ ±1%, 1/2W resistors (1206) TT Electronics LR1206-R04FW                 |
| R55                                                                         |     2 | 25.5kΩ ±1% resistors (0603)                                                 |
| R56                                                                         |     2 | 21.5Ω ±1% resistors (0805)                                                  |
| R60, R61                                                                    |     2 | 0.1Ω ±1%, 1/2W resistors (1206) Panasonic-ECG ERJ- 8BWFR100V                |
| R63-R66, R74-R77, R108-R115                                                 |    16 | 75Ω ±5% resistors (0805)                                                    |
| R70-R73                                                                     |     4 | 1kΩ ±5% resistors (0603)                                                    |
| T2                                                                          |     1 | LAN transformer Sumida CLP176                                               |
| TP1                                                                         |     1 | Red test point                                                              |
| TP2                                                                         |     1 | Black test point                                                            |
| U1_EN. U1_ GEN,U1_LED, U1_SL, U1_/2EC, U2_EN, U2_GEN, U2_LED,U2_SL, U2_/2EC |     0 | Not installed, test points                                                  |
| U1, U2                                                                      |     2 | High-power PDcontrollers (24 TQFN-EP*) Maxim MAX5992A/BETG+                 |
| U3                                                                          |     1 | Active-clamped, current-mode PWMcontroller (16 TQFN-EP*) Maxim MAX5974DETE+ |
| U4                                                                          |     1 | Optocoupler (4SSOP)NEC PS2801-1-F4-A-L                                      |
| U5                                                                          |     1 | 2.5V voltage reference (SOT23) TI TL432BIDBZ                                |
| -                                                                           |     1 | PCB: MAX5992A/B EVALUATION KIT                                              |

│

Evaluates: MAX5992A

MAX5992B

1

REVISION  RECORD

ECO  NO:

## MAX5992A Evaluation Kit LTR

## MAX5992A EV Kit Schematics

2

3

4

5

<!-- image -->

6

│

COMPANY:

maxim

1

2

3

4

5

6

REVISION  RECORD

ECO  NO:

## MAX5992A EV Kit Schematics (continued)

<!-- image -->

│

COMPANY:

i  ntegratedTM

maxim

1

2

3

4

5

6

APPROVED:

## MAX5992A EV Kit Schematics (continued) REVISION  RECORD NO:

REV:

PCB  PART  NO:

<!-- image -->

D

C

B

A

EPCB5992A

C

DATED:

QUALITY  CONTROL:

DATED:

RELEASED:

3 OF  4

SHEET

SCALE:

D

C

## MAX5992A EV Kit Schematics (continued) DATE:

O

REV:

A

<!-- image -->

C

B

B

## MAX5992A EV Kit PCB Layout Diagrams

MAX5992 EV Kit-Top Layer

<!-- image -->

│

## MAX5992A EV Kit PCB Layout Diagrams (continued)

MAX5992 EV Kit-Layer 2 GND

<!-- image -->

│

## MAX5992A EV Kit PCB Layout Diagrams (continued)

MAX5992 EV Kit-Layer 3 Power

<!-- image -->

│

## MAX5992A EV Kit PCB Layout Diagrams (continued)

MAX5992 EV Kit-Bottom Layer

<!-- image -->

│

## MAX5992A EV Kit PCB Layout Diagrams (continued)

MAX5992 EV Kit-Top Silkscreen

<!-- image -->

│

## MAX5992A EV Kit PCB Layout Diagrams (continued)

MAX5992 EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX5992A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                           | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------|-----------------|
|                 0 | 6/19            | Initial release                       | -               |
|                 1 | 6/19            | Removed MAX5992B from title of EV kit | 1-18            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX5992A

MAX5992B