<!-- lastmod 2022-08-02 -->
## MAX25410 Evaluation Kit

## General Description

The  MAX25410  evaluation  kit  (EV  kit)  demonstrates Maxim's  automotive  USB-PD  port  protector  with  integrated  V CONN   switch,  host  charger  adapter  emulation, system-level  ESD,  short-to-V BUS   protection,  and  shortto-battery protection.

The EV kit is designed to be plugged into any USB 2.0 Type-C  port,  effectively  providing  a  new  fully  protected Type-C port. The EV kit only requires one external powersupply  source  to  operate.  Protection  is  always  maintained, whether or not the input supply is present.

The MAX25410 can be used to protect any USB 2.0 interface and USB-PD controller, but also provides a Type-C compliant 1W V CONN  switch to power E-marked cables. Simply connect the V CONN  enable input pins to a USBPD controller to evaluate MAX25410 in a given system. Additionally, MAX25410 automatic fault recovery enables a seamless user experience.

The  MAX25410  also  features  integrated  host-charger port-detection circuitry that adheres to the USB-IF BC1.2 battery-charging  specification,  Apple ®   iPod/iPhone/iPad and  Samsung ®   2.0A,  and  Chinese  Telecommunication Industry Standard YD/T 1591-2009 charge emulation.

The EV kit is populated with a MAX25410AGTE/V+ (variant with active-low V CONN  enable, auto-CDP and autoDCP/Apple  2.4A  host-charger  emulation  modes).  Other variants can be used by simply replacing the IC on the EV kit.

Evaluates: MAX25410

## Features and Benefits

- USB Type-C CC1/CC2 Protection Switches
- Integrated 550mΩ V CONN FETs with 250mA Overcurrent Protection
- USB 2.0 D+/D- Protection Switches with 1GHz Bandwidth
- 24V CC and USB 2.0 Protection against Short-to-V BUS
- Automatic Fault Detection and Recovery with Industry-Compliant Reset Timings
- Integrated BC1.2, Apple and Samsung Charge Emulation
-  Supports BC1.2 CDP and DCP Modes
- Apple 2.4A, 1.0A
-  Samsung 2.0A
- China YD/T 1591-2009 Charging Specification
- Compatible with USB On-the-Go Specification and Apple CarPlay
- High ESD Protection (HVD+/HVD-, HVCC1/HVCC2)
-  ±2kV Human Body Model
- ±15kV ISO 10605 Air Gap
- ±8kV ISO 10605 Contact
- ±15kV IEC 61000-4-2 Air Gap
- ±8kV IEC 61000-4-2 Contact
- Proven PCB Layout

## Box Content

Ordering Information appears at end of data sheet.

- MAX25410 EV Kit Fully Assembled and Tested

Apple, iPod, iPhone, and iPad are registered trademarks of Apple Inc. Samsung is a registered trademark of Samsung Electronics Co., Ltd.

<!-- image -->

## MAX25410 Evaluation Kit

## Getting Started

Figure 1. EV Kit Interfaces

<!-- image -->

## Table 1. Jumper List

| JUMPER   | FUNCTION              | CONTROL                                                      |
|----------|-----------------------|--------------------------------------------------------------|
| J4       | Charge Mode Selection | Low: auto-CDP High: auto-DCP/Apple 2.4A                      |
| J5       | VCONN EN1 Control     | See VCONN switch-enable table.                               |
| J6       | VCONN EN2 Control     | Automatic Control: Connect enable input to USB-PD Controller |

Note: This  table  applies  to  the  default  IC  installed  on  the  EV  kit:  MAX25410AGTE/V+.  To  evaluate  V CONN activehigh and/or USB data pass-through mode, replace U1 with the required IC. Please refer to the Ordering Table in  the MAX25410 data sheet .

│

## MAX25410 Evaluation Kit

Table 2. Test-Point List

| TESTPOINT    | FUNCTION                                                                                                                                                                          |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CC1, CC2     | Low-voltage, unprotected CC channels from upstream USB-PD controller. Input to the MAX25410's CC pass-through switches.                                                           |
| HVCC1, HVCC2 | Protected CC channels and VCONN outputs. The CC pass-through switches are always closed whenever PGOOD is illuminated and no fault has occurred. Test points for monitoring only. |
| V BUS        | Upstream V BUS . Can also be forced externally if the Type-C plug is left unconnected.                                                                                            |
| FAULT        | Fault indicator output - See Fault Table in the MAX25410 data sheet                                                                                                               |
| VCC          | Regulated 5V/0.6A output from MAX20075 Automotive Buck Converter. Provides power to MAX25410.                                                                                     |
| BIAS         | Internal MAX25410 LDO output. Test point for monitoring only.                                                                                                                     |
| V BAT        | Main EV kit input power. Connect to 14V power supply or car battery.                                                                                                              |
| GND          | Ground. Connect power supply negative terminal and all probe references to the GND test point.                                                                                    |
| DP/DM        | Test pads to monitor low-voltage USB 2.0 D+/D- signals from upstream transceiver. Note: These signals are routed with 90Ω differential impedance.                                 |
| HVDP/HVDM    | Test pads to monitor high-voltage-protected USB 2.0 signals and charge emulation. Note: These signals are routed with 90Ω differential impedance.                                 |

Important: High-voltage events (ie. short-to-V BUS ) must be applied only through the Type-C receptacle and not directly to these test points in order to avoid damage to the ICs.

## Table 3. VCONN Switch-Enable Table (Default IC on EV Kit)

| PGOOD   | V CONN_EN1   | V CONN_EN2   | CC1/CC2 PASS-THROUGH   | HVCC1 V CONN SWITCH   | HVCC2 V CONN SWITCH   |
|---------|--------------|--------------|------------------------|-----------------------|-----------------------|
| No      | x            | x            | Off                    | Off                   | Off                   |
| Yes     | High         | High         | On                     | Off                   | Off                   |
| Yes     | Low          | High         | On                     | On                    | Off                   |
| Yes     | High         | Low          | On                     | Off                   | On                    |
| Yes     | Low          | Low          | On                     | Off                   | Off                   |

│

Evaluates: MAX25410

## MAX25410 Evaluation Kit

## A) CC Short-to-VBUS Protection

The  following  procedure  demonstrates  MAX25410's response  to  a  CC  short-to-V BUS   event  through  the USB-C connector.

## Required Equipment

- MAX25410 EV kit
- 14V/1A DC power supply or car battery (V BAT )
- 24V/1A DC power supply
- USB-C breakout board plug (USB3.1-CM-BO-V2A or equivalent)
- Oscilloscope with four analog channels, one digital channel, and a current probe

## Step-by-step

- 1) Verify that both V CONN selection jumpers are set to 'H' (no V CONN  is being sourced).
- 2) Set the V BAT  power supply to 14V output, 1A current limit. Turn the output off. Connect the negative lead to the GND test loop on the EV kit. Connect the positive lead to  the V BAT  test point on the EV kit.
- 3) Turn  the  V BAT   power-supply  output  on.  The  green PGOOD LED should turn on.
- 4) Plug the USB-C breakout board plug into the EV kit receptacle.
- 5) Connect the oscilloscope probes as shown in Figure 2.
- 6) Verify that V CC is at 5.0V and FAULT is logic-high.
- 7) Set the V BUS  power supply to 24V output, 1A current limit. Turn the output off. Connect the negative lead to the GND test loop on the EV kit. Connect the positive lead to  the V BUS  test point on the EV kit.
- 8) Turn the V BUS  power-supply output on.
- 9) Use  a  wire  to  short  V BUS   to  CC1  on  the  breakout board. Do not short V BUS  directly to the HVCC1 test point.
- 10)  Observe  that  MAX25410  protects  the  low-voltage CC1 node to a safe amplitude and duration (6V and less than 50ns) thanks to its fast response to over -voltage events. Note that FAULT is being asserted to signal the USB-PD controller. Once the overvoltage condition  is  removed,  MAX25410  will  recover  automatically and release FAULT after 16ms.

Figure 2. CC Short-to-V BUS  Setup

<!-- image -->

## Evaluates: MAX25410

│

Figure 3. HVCC Short-to-V BUS  Response

<!-- image -->

## B) VCONN Switch Evaluation and Short-to-Ground

The  following  procedure  demonstrates  how  to  enable/ disable V CONN  and MAX25410's response to a V CONN short-to-ground event.

## Required Equipment

- MAX25410 EV kit
- 14V/1A DC power supply or car battery (V BAT )
- USB-C breakout board plug (USB3.1-CM-BO-V2A or equivalent)
- Oscilloscope with four analog channels, one digital channel, and a current probe

## Step-by-step

- 1) Verify that PGOOD LED is on and both VCONN selection  jumpers  are  set  to  'H'  (no VCONN  is  being sourced).
- 2) Plug the USB-C breakout board plug into the EV kit receptacle.
- 3) Connect the oscilloscope probes as shown in Figure 2.
- 4) Verify that V CC is at 5.0V and FAULT is logic-high.
- 5) Set the J5 jumper to 'L' to enable VCONN on HVCC1. Verify that HVCC1 is now at 5.0V.
- 6) Use  a  wire  to  short  GND  to  CC1  on  the  breakout board.
- 7) Observe the response. MAX25410 prevents the V CC node from drooping to less than 4.65V thanks to its fast  UV  comparator.  Note  that FAULT is  being  asserted to signal the USB-PD controller. To avoid dissipating heat unnecessarily, MAX25410 does not restart  V CONN  unless the short-to-ground condition is removed and 16ms have expired.

│

Evaluates: MAX25410

Figure 4. V CONN  Short-to-Ground Setup

<!-- image -->

Figure 5. V CONN  Short-to-Ground Response

<!-- image -->

│

## MAX25410 Evaluation Kit

## C) Automatic VCONN Control

The  following  procedure  demonstrates  how  to  connect the EV kit to an external USB-PD controller.

## Required Equipment

- MAX25410 EV kit
- 14V/1A DC power supply or car battery (V BAT )
- 2 Dupont jumper wires female-female: V CONN\_EN1, VCONN\_EN2
- Any USB-PD controller with two spare 3.3V or 5.0V active-low logic level outputs. For active-high, swap U1 with MAX25410GTE/V+.

## Evaluates: MAX25410

## Step-by-step Procedure

- 1) Verify  that  the  PGOOD  LED  is  illuminated,  and  re -move both V CONN jumper shorts on J5 and J6.
- 2) Connect Dupont wires to the EV kit and to the USB controller V CONN  enable signals as shown in Figure 2.
- 3) Connect  the  MAX25410  EV  kit  to  the  USB-PD development kit.
- 4) The  MAX25410  will  now  provide  V CONN  automatically every time the PD-controller detects an Rd and an Ra on the CC channels.

Figure 6. External V CONN  Control

<!-- image -->

│

## MAX25410 Evaluation Kit

## D) Charge Emulation - Auto-CDP

The  following  procedure  demonstrates  how  to  evaluate MAX25410's auto-CDP mode.

## Required Equipment

- MAX25410 EV kit
- 14V/1A DC power supply or car battery (V BAT )
- USB-C amperage meter (plugable USBC-VAMETER or equivalent)
- USB-C device (smartphone recommended)
- Laptop with a 1.5A or greater Type-C or Type-A downstream port. If Type-A, an A-to-C adapter and extension cable (1m or shorter) are needed. See the two example setups in Figure 7 and Figure 8.

## Evaluates: MAX25410

Figure 7. Auto-CDP Setup (Type-C Downstream Port)

<!-- image -->

Figure 8. Auto-CDP Setup (Type-A Downstream Port)

<!-- image -->

│

## MAX25410 Evaluation Kit

## Step-by-step

- 1) Verify that the PGOOD LED is illuminated. Verify that J4 is in the 'L' position (auto-CDP).
- 2) Connect the adapters, cables, and phone per the figures. Check that the phone is charging at approximately 1.5A and is recognized by the computer.
- 3) Note the CDP handshake on the HVDP and HVDM pins, which indicates to the phone that it may pull up to 1.5A of load and can enter USB high-speed data transfer after enumeration (see Figure 9).

Figure 9. Auto-CDP Response

<!-- image -->

Note: Oscilloscope probes not shown in figures for simplicity.

│

## MAX25410 Evaluation Kit

## E) Charge Emulation - Auto-DCP

The  following  procedure  demonstrates  how  to  evaluate MAX25410's auto-DCP mode.

## Required Equipment

- MAX25410 EV kit
- 14V/1A DC power supply or car battery (V BAT )
- USB-C amperage meter (plugable USBC-VAMETER or equivalent)
- USB-C device (smartphone recommended)
- 1.5A or greater Type-C or Type-A downstream port. If Type-A,  an A-to-C  adapter  and  extension  cable  (1m or  shorter)  are  needed.  See  the  example  setups  in Figure 10 and Figure 11.

## Evaluates: MAX25410

Figure 10. Auto-DCP Setup (Type-C Downstream Port)

<!-- image -->

Figure 11. Auto-DCP Setup (Type-A Downstream Port)

<!-- image -->

│

## MAX25410 Evaluation Kit

## Step-by-step

- 4) Verify that the PGOOD LED is illuminated. Verify that J4 is in the 'H' position (auto-DCP).
- 5) Connect the adapters, cables and phone per the picture. Check that the phone is now charging at up to 1.5A.
- 6) For an Android phone, note the DCP handshake on the HVDP and HVDM pins which indicates to the phone that it may pull up to 1.5A of load ( Figure 12 below). For an Apple phone, the HVDP and HVDM will stay at 2.7V and will indicate to the phone it may pull up to 2.4A of current ( Figure 13 below).

Figure 12. Auto-DCP Response with an Android phone

<!-- image -->

Figure 13. Auto-DCP Response with an Apple phone

<!-- image -->

│

## USB Type-C &amp; Legacy Apple/Samsung/USB DCP Charging

- The amperage meter should display USB current as the device charges.
- Note that for most devices, maximum charging rate occurs between approximately 20% and 80% battery level.
- Certain USB type-C devices may prefer to follow the Type-C port current advertisement and ignore BC1.2 handshake. Source current advertisements can be any of the following:
-  0.5A
-  1.5A
-  3.0A
- For non-native USB type-C devices (Apple 30-pin/lightning and USB mini/micro-b):
- Apple devices may consume up to 2.4A maximum.
- BC 1.2-compatible or Samsung devices will consume up to 1.5A or 2A, respectively.
- Note that some USB devices are compatible with multiple handshakes and may prefer one over the other, depending on many factors such as battery level and phone workload. The USB charging behavior can also depend on the ver -sion of software installed on the user's device, which can change over time as updates are released.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25410EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX25410 EV Kit Bill of Materials

| ITEM   | REF_DES                      | DNI/DNP   |   QTY | MFG PART #                                                                                                                                   | MANUFACTURER                                | VALUE           | DESCRIPTION                                                                                                                                                                 |
|--------|------------------------------|-----------|-------|----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | BIAS, FAULTB                 | -         |     2 | 5004                                                                                                                                         | KEYSTONE                                    | N/A             | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                   |
| 2      | C1, C2                       | -         |     2 | C0402C105K8PAC; CC0402KRX5R6BB105                                                                                                            | KEMET;YAGEO                                 | 1µF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 1µF; 10V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                                                                     |
| 3      | C3                           | -         |     1 | C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K080AC; EMK107B7105KA; GCM188R71C105KA64; CGA3E1X7R1C105K080AC                               | KEMET;MURATA; TDK;TAIYO YUDEN; MURATA;TDK   | 1µF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 16V; TOL = 10%; MODEL = ; TG = -55°C TO +125°C; TC = X7R                                                                          |
| 4      | C4                           | -         |     1 | C1206C475K3RAC                                                                                                                               | KEMET                                       | 4.7µF           | CAPACITOR;1206; 4.7µF;25V; 10%;; X7R; -55°C TO +125°C                                                                                                                       |
| 5      | C5                           | -         |     1 | CGA2B3X7R1H104K050BB; C1005X7R1H104K050BB; GRM155R71H104KE14; GCM155R71H104KE02; C1005X7R1H104K050BE; UMK105B7104KV-FR; CGA2B3X7R1H104K050BE | TDK;TDK;MURATA; MURATA;TDK; TAIYO YUDEN;TDK | 0.1µF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                                                  |
| 6      | C6                           | -         |     1 | C2012X7S1A226M125AC                                                                                                                          | TDK                                         | 22µF            | CAP; SMT (0805); 22µF; 20%; 10V; X7S; CERAMIC CHIP                                                                                                                          |
| 7      | C9                           | -         |     1 | GRM32ER71E226KE15; CL32B226KAJNFN; CL32B226KAJNNW; TMK325B7226KM                                                                             | MURATA; SAMSUNG ELECTRO-MECHANICS;TA        | 22µF            | CAPACITOR; SMT (1210); CERAMIC CHIP; 22µF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                                                   |
| 8      | CC1, CC2, HVCC1, HVCC2       | -         |     4 | 5007                                                                                                                                         | KEYSTONE                                    | N/A             | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                |
| 9      | D1                           | -         |     1 | SDM20U40                                                                                                                                     | DIODES INCORPORATED                         | SDM20U40        | DIODE; SCH; SCHOTTKY BARRIER DIODE; SMT (SOD-523); PIV = 40V; IF = 0.25A                                                                                                    |
| 10     | DM, DP, EN1, EN2, HVDM, HVDP | -         |     6 | ANY                                                                                                                                          | ANY                                         | MICRO_TP        | TEST POINT; MICRO_TP; PAD DIA: 0.8128 MM(32MILS) SOLDERMASK: 0.9144 MM(36MILS) THERMAL RELIEF/ANTIPAD: 1.574MM(62MILS); SMD                                                 |
| 11     | DS1                          | -         |     1 | APT1608LZGCK                                                                                                                                 | KINGBRIGHT                                  | APT1608LZGCK    | DIODE; LED; GREEN WATER CLEAR; GREEN; SMT (0603); VF = 2.65V; IF = 0.002A                                                                                                   |
| 12     | J1                           | -         |     1 | DX07P024MJ1                                                                                                                                  | JAE ELECTRONIC INDUSTRY                     | DX07P024MJ1     | CONNECTOR; FEMALE; SMT; USB 3.1; SUPERSPEED; RIGHT ANGLE; 24PINS                                                                                                            |
| 13     | J2                           | -         |     1 | 2012670005                                                                                                                                   | MOLEX                                       | 2012670005      | CONNECTOR; FEMALE; SMT; USB TYPE C RECEPTACLE; RIGHT ANGLE; 24PINS                                                                                                          |
| 14     | J4-J6                        | -         |     3 | TSW-103-23-G-S                                                                                                                               | SAMTEC                                      | TSW-103-23-G-S  | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS; -55°C TO +125°C                                                                                                       |
| 15     | L1                           | -         |     1 | LQM21PZ4R7MGR                                                                                                                                | MURATA                                      | 4.7µH           | INDUCTOR; SMT (0805); FERRITE; 4.7µH; 20%; 0.8A                                                                                                                             |
| 16     | R1                           | -         |     1 | CRCW0402100KJN                                                                                                                               | VISHAY DALE                                 | 100K            | RESISTOR; 0402; 100K Ω ; 5%; 200PPM; 0.063W; THICK FILM                                                                                                                     |
| 17     | R2                           | -         |     1 | ERJ-2RKF5102                                                                                                                                 | PANASONIC                                   | 51K             | RESISTOR; 0402; 51KΩ; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                          |
| 18     | R3                           | -         |     1 | CRCW040240K2FK                                                                                                                               | VISHAY DALE                                 | 40.2K           | RESISTOR; 0402; 40.2KΩ; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                      |
| 19     | R4, R5                       | -         |     2 | ERJ-2RKF1002                                                                                                                                 | PANASONIC                                   | 10K             | RESISTOR; 0402; 10KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                         |
| 20     | R6                           | -         |     1 | CRCW06030000Z0                                                                                                                               | VISHAY DALE                                 | 0               | RESISTOR; 0603; 0Ω; 0%; JUMPER; 0.1W; THICK FILM                                                                                                                            |
| 21     | SHUNT_ J4-SHUNT_J6           | -         |     3 | QPC02SXGN-RC                                                                                                                                 | SULLINS ELECTRONICS CORP.                   | QPC02SXGN-RC    | CONNECTOR; FEMALE; 0.100IN CC; OPEN TOP; JUMPER; STRAIGHT; 2PINS                                                                                                            |
| 22     | U1                           | -         |     1 | MAX25410AGTE/V+                                                                                                                              | MAXIM                                       | MAX25410AGTE/V+ | EVKIT PART - IC; PROT; AUTOMOTIVE USB POWER DELIVERY PORT PROTECTION/ PROTECTOR; PACKAGE OUTLINE DRAWING: 21-0139; PACKAGE CODE: T1644+4C; LAND PATTERN: 90-0070; TQFN16-EP |
| 23     | U2                           | -         |     1 | MAX20075ATCA                                                                                                                                 | MAXIM                                       | MAX20075ATCA    | IC; CONV; 36V 1A MINI BUCK CONVERTER WITH 5µA IQ; TDFN12-EP                                                                                                                 |
| 24     | VBAT, VBUS, VCC              | -         |     3 | 5005                                                                                                                                         | KEYSTONE                                    | N/A             | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                  |
| 25     | PCB                          | -         |     1 | MAX25410                                                                                                                                     | MAXIM                                       | PCB             | PCB:MAX25410                                                                                                                                                                |
| 26     | C7, C8                       | DNP       |     0 | C0402C0G500-391JNE; GRM1555C1H391JA01;                                                                                                       | VENKEL LTD.;                                | 390PF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 390PF; 50V; TOL = 5%; MODEL = ; TG = -55°C TO +125°C; TC =                                                                             |
| TOTAL  |                              |           |    42 | CGA2B2C0G1H391J050BA                                                                                                                         | MURATA;TDK                                  |                 | C0G                                                                                                                                                                         |

## MAX25410 EV Kit Schematic Diagram

<!-- image -->

│

## MAX25410 EV Kit PCB Layout Diagrams

MAX25410 EV Kit PCB Layout - Top Silkscreen

<!-- image -->

MAX25410 EV Kit PCB Layout - Layer 2

<!-- image -->

MAX25410 EV Kit PCB Layout - Top Layer

<!-- image -->

MAX25410 EV Kit PCB Layout - Layer 3

<!-- image -->

│

## MAX25410 EV Kit PCB Layout Diagrams (continued)

MAX25410 EV Kit PCB Layout - Bottom Layer

<!-- image -->

MAX25410 EV Kit PCB Layout - Bottom Silkscreen

<!-- image -->

│

## MAX25410 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------|-----------------|
|                 0 | 1/20            | Initial release                    | -               |
|                 1 | 1/20            | Removed MAX25410A from page header | 1-17            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX25410