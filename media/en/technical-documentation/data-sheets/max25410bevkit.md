<!-- lastmod 2022-08-02 -->
## MAX25410B Evaluation Kit

## General Description

The  MAX25410B  evaluation  kit  (EV  kit)  demonstrates Maxim's  automotive  USB-PD  port  protector  with  host charger  adapter  emulation,  system-level  ESD,  short-toVBUS protection, and short-to-battery protection.

The EV kit is designed to be plugged into any USB 2.0 Type-C  port,  effectively  providing  a  new  fully  protected Type-C port. The EV kit only requires one external powersupply  source  to  operate.  Protection  is  always  maintained, whether or not the input supply is present.

The MAX25410B can be used to protect any USB 2.0 interface  and  USB-PD  controller.  Additionally,  MAX25410B automatic fault recovery enables a seamless user experi -ence.

The MAX25410B also features an integrated host-charger port-detection circuitry that adheres to the USB-IF BC1.2 battery-charging  specification,  Apple ®   iPod/iPhone/iPad and  Samsung ®   2.0A,  and  Chinese  Telecommunication Industry Standard YD/T 1591-2009 charge emulation.

The EV kit is populated with a MAX25410BGTE/V+ (variant with auto-CDP and auto DCP/Apple 2.4A host-charger emulation modes). Other variants can be used by simply replacing the IC on the EV kit.

Evaluates: MAX25410

## Features and Benefits

- USB Type-C CC1/CC2 Protection Switches
- USB 2.0 D+/D- Protection Switches with 1GHz Bandwidth
- 24V CC and USB 2.0 Protection against Short-to-VBUS
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

- MAX25410B EV Kit Fully Assembled and Tested

Apple, iPod, iPhone, and iPad are registered trademarks of Apple Inc. Samsung is a registered trademark of Samsung Electronics Co., Ltd.

<!-- image -->

## Getting Started

Figure 1. EV Kit Interfaces

<!-- image -->

## Table 1. Jumper List

| JUMPER   | FUNCTION              | CONTROL       | CONTROL                   |
|----------|-----------------------|---------------|---------------------------|
| J4       | Charge Mode Selection | Low: auto-CDP | High: auto-DCP/Apple 2.4A |

Note: This  table  applies  to  the  default  IC  installed  on  the  EV  kit:  MAX25410BGTE/V+. To  evaluate  USB  data  passthrough mode, replace U1 with the required IC. Refer to the Ordering Information in the MAX25410 data sheet.

## Table 2. Test-Point List

| TEST POINT      | FUNCTION                                                                                                                                                        |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CC1, CC2        | Low-voltage, unprotected CC channels from upstream USB-PD controller. Input to the MAX25410B's CC pass-through switches.                                        |
| HVCC1, HVCC2    | Protected CC channels. The CC pass-through switches are always closed whenever PGOOD is illuminated and no fault has occurred. Test points for monitoring only. |
| VBUS            | Upstream VBUS. Can also be forced externally if the Type-C plug is left unconnected.                                                                            |
| FAULTB or FAULT | Fault indicator output - Refer to the Fault Table in the MAX25410 data sheet.                                                                                   |
| VCC             | Regulated 5V/0.6A output from MAX20075 Automotive Buck Converter. Provides power to MAX25410B.                                                                  |
| BIAS            | Internal MAX25410B LDO output. Test point for monitoring only.                                                                                                  |
| VBAT            | Main EV kit input power. Connect to 14V power supply or car battery.                                                                                            |
| GND             | Ground. Connect power supply negative terminal and all probe references to the GND test point.                                                                  |
| DP/DM           | Test pads to monitor low-voltage USB 2.0 D+/D- signals from upstream transceiver. Note: These signals are routed with 90Ω differential impedance.               |
| HVDP/HVDM       | Test pads to monitor high-voltage-protected USB 2.0 signals and charge emulation. Note: These signals are routed with 90Ω differential impedance.               |

Important: High-voltage events (i.e., short-to-VBUS) must be applied only through the Type-C receptacle and not directly to these test points in order to avoid damage to the ICs.

│

Evaluates: MAX25410

## MAX25410B Evaluation Kit

## A) CC Short-to-VBUS Protection

The  following  procedure  demonstrates  MAX25410B's response  to  a  CC  short-to-VBUS  event  through  the USB-C connector.

## Required Equipment

- MAX25410B EV kit
- 14V/1A DC power supply or car battery (VBAT)
- 24V/1A DC power supply
- USB-C breakout board plug (USB3.1-CM-BO-V2A or equivalent)
- Oscilloscope with four analog channels, one digital channel, and a current probe

Figure 2. CC Short-to-VBUS Setup

<!-- image -->

## Evaluates: MAX25410

│

## MAX25410B Evaluation Kit

## Step-by-Step

- 1) Set the VBAT power supply to 14V output, 1A current limit. Turn the output off. Connect the negative lead to the GND test loop on the EV kit. Connect the positive lead to the VBAT test point on the EV kit.
- 2) Turn  the  VBAT  power-supply  output  on.  The  green PGOOD LED should turn on.
- 3) Plug the USB-C breakout board plug to the EV kit receptacle.
- 4) Connect the oscilloscope probes as shown in Figure 2.
- 5) Verify that VCC is at 5V and FAULT (FAULTB) is logic high.
- 6) Set  the  VBUS  power  supply  to  24V  output,  1A current limit. Turn the output off. Connect the nega -
7. tive lead to the GND test loop on the EV kit. Connect the positive lead to the VBUS test point on the EV kit.
- 7) Turn the VBUS power-supply output on.
- 8) Use a wire to short  VBUS to CC1 on the breakout board. Do not short VBUS directly to the HVCC1 test point.
- 9) Observe  that  MAX25410B  protects  the  low-voltage CC1 node to a safe amplitude and duration (6V and less than 50ns) thanks to its fast response to overvolt -age events. Note that FAULT is being asserted to signal the USB-PD controller or host upstream. Once the overvoltage  condition  is  removed,  MAX25410B  recovers automatically and release FAULT after 16ms.

Figure 3. HVCC Short-to-VBUS Response

<!-- image -->

Evaluates: MAX25410

│

## MAX25410B Evaluation Kit

## B) Charge Emulation - Auto-CDP

The  following  procedure  demonstrates  how  to  evaluate MAX25410B's auto-CDP mode.

## Required Equipment

- MAX25410B EV kit
- 14V/1A DC power supply or car battery (VBAT)
- USB-C amperage meter (plugable USBC-VAMETER or equivalent)
- USB-C device (smartphone recommended)
- Laptop with 1.5A or greater Type-C or Type-A downstream port. If Type-A, an A-to-C adapter and extension cable (1m or shorter) are needed. See the example setups shown in Figure 4 and Figure 5.

## Evaluates: MAX25410

Figure 4. Auto-CDP Setup (Type-C Downstream Port)

<!-- image -->

Figure 5. Auto-CDP Setup (Type-A Downstream Port)

<!-- image -->

│

## MAX25410B Evaluation Kit

## Step-by-Step

- 1) Verify PGOOD LED is illuminated. Verify J4 is in the 'L' position (auto-CDP).
- 2) Connect  the  adapters,  cables,  and  phone  per  the figures. Check that the phone is charging at approxi -
3. mately 1.5A and is recognized by the computer.
- 3) Note the CDP handshake on the HVDP and HVDM pins, which indicates to the phone that it may pull up to 1.5A of load and can enter USB high-speed data transfer after enumeration (see Figure 6).

Evaluates: MAX25410

Figure 6. Auto-CDP Response

<!-- image -->

Note: Oscilloscope probes not shown on figures for simplicity.

│

## MAX25410B Evaluation Kit

## C) Charge Emulation - Auto-DCP

The  following  procedure  demonstrates  how  to  evaluate MAX25410B's auto-DCP mode.

## Required Equipment

- MAX25410B EV kit
- 14V/1A DC power supply or car battery (VBAT)
- USB-C amperage meter (plugable USBC-VAMETER or equivalent)
- USB-C device (smartphone recommended)
- 1.5A or greater Type-C or Type-A downstream port. If Type-A, an A-to-C adapter and extension cable (1m or shorter) are needed. See the example setups shown in Figure 7 and Figure 8.

## Evaluates: MAX25410

Figure 7. Auto-DCP Setup (Type-C Downstream Port)

<!-- image -->

Figure 8. Auto-DCP Setup (Type-A Downstream Port)

<!-- image -->

│

## MAX25410B Evaluation Kit

## Step-by-Step

- 1) Verify PGOOD LED is illuminated. Verify J4 is in the 'H' position (auto-DCP).
- 2) Connect the adapters, cables and phone per the fig -ures. Check that the phone is now charging at up to 1.5A.
- 3) For  an  Android  phone,  note  the  DCP  handshake on  the  HVDP  and  HVDM  pins,  which  indicates  to the  phone  that  it  can  pull  up  to  1.5A  of  load  (see Figure 9). For an Apple phone, the HVDP and HVDM stays at 2.7V and indicates to the phone it can pull up to 2.4A of current (see Figure 10).

## Evaluates: MAX25410

Figure 9. Auto-DCP Response with an Android Phone

<!-- image -->

Figure 10. Auto-DCP Response with an Apple Phone

<!-- image -->

## MAX25410B Evaluation Kit

## USB Type-C and Legacy Apple/Samsung/USB DCP Charging

- The amperage meter should display USB current as the device charges. Note that for most devices, maximum charging rate occurs between approximately 20% and 80% battery level.
- Certain USB Type-C devices may prefer to follow the Type-C port current advertisement and ignore BC1.2 handshake. Source current advertisements can be any of the following:
- 0.5A
-  1.5A
-  3.0A

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX25410BEVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX25410

- For non-native USB Type-C devices (Apple 30-pin/ lightning and USB mini/micro-b):
- Apple devices can consume up to 2.4A maximum.
- BC 1.2-compatible or Samsung devices consume up to 1.5A or 2A, respectively.
- Note that some USB devices are compatible with multiple handshakes and may prefer one over the other, depending on many factors such as bat -tery level and phone workload. The USB charging behavior can also depend on the version of software installed on the user's device, which can change over time as updates are released.

│

## MAX25410B EV Kit Bill of Materials

|   ITEM | REF_DES                | DNI/DNP   |   QTY | MFG PART #                                                                                               | MANUFACTURER                          | VALUE           | DESCRIPTION                                                                                                                                                                | COMMENTS   |
|--------|------------------------|-----------|-------|----------------------------------------------------------------------------------------------------------|---------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | BIAS, FAULTB           | -         |     2 | 5004 KEYSTONE                                                                                            | 5004 KEYSTONE                         | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                        |            |
|      2 | C1, C2                 | -         |     2 | C0402C105K8PAC;CC0402KRX5R6BB105                                                                         | KEMET;YAGEO                           | 1UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                    |            |
|      3 | C3                     | -         |     1 | C0603C105K4RAC;GRM188R71C105KA12; C1608X7R1C105K080AC;EMK107B7105KA; CGA3E1X7R1C105K080AC;0603YC105KAT2A | KEMET;MURATA;TDK; TAIYO YUDEN;TDK;AVX | 1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                           |            |
|      4 | C4                     | -         |     1 | C1206C475K3RAC                                                                                           | KEMET                                 | 4.7UF           | CAPACITOR;1206; 4.7UF;25V; 10%;; X7R;-55DEGC TO +125DEGC                                                                                                                   |            |
|      5 | C5                     | -         |     1 | C1005X7R1H104K050BB;GRM155R71H104KE14; C1005X7R1H104K050BE;UMK105B7104KV-FR                              | TDK;MURATA;TDK;TAIYO YUDEN            | 0.1UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                 |            |
|      6 | C6                     | -         |     1 | C2012X7S1A226M125AC                                                                                      | TDK                                   | 22UF            | CAP; SMT (0805); 22UF; 20%; 10V; X7S; CERAMIC CHIP                                                                                                                         |            |
|      7 | C9                     | -         |     1 | GRM32ER71E226KE15; CL32B226KAJNFN; CL32B226KAJNNW;TMK325B7226KM                                          | MURATA;SAMSUNG ELECTRO-MECHANICS;TA   | 22UF            | CAPACITOR; SMT (1210); CERAMIC CHIP; 22UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                  |            |
|      8 | CC1, CC2, HVCC1, HVCC2 | -         |     4 | 5007 KEYSTONE                                                                                            | 5007 KEYSTONE                         | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                     |            |
|      9 | D1                     | -         |     1 | SE10FD-M3/H                                                                                              | Vishay Semiconductors                 | SE10FD-M3/H     | DIODE; RECT; SMT (SOD-123F); PIV=200V; IF=1A ;                                                                                                                             |            |
|     10 | DM, DP, HVDM, HVDP     | -         |     4 | ANY                                                                                                      | ANY                                   | MICRO_TP        | TEST POINT; MICRO_TP; PAD DIA: 0.8128 MM(32MILS) SOLDERMASK: 0.9144 MM(36MILS) THERMAL RELIEF/ANTIPAD: 1.574MM(62MILS); SMD                                                |            |
|     11 | DS1                    | -         |     1 | APT1608LZGCK                                                                                             | KINGBRIGHT                            | APT1608LZGCK    | DIODE; LED; GREEN WATER CLEAR; GREEN; SMT (0603); VF=2.65V; IF=0.002A                                                                                                      |            |
|     12 | GND                    | -         |     1 |                                                                                                          | 5020 KEYSTONE                         | MAXIMPAD        | EVKIT PART - MAXIM PAD; TEST POINT; PIN DIA=0.094IN; TOTAL LENGTH=0.350IN; BOARD HOLE=0.040IN; NONE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                             |            |
|     13 | J1                     | -         |     1 | DX07P024MJ1                                                                                              | JAE ELECTRONIC INDUSTRY               | DX07P024MJ1     | CONNECTOR; FEMALE; SMT; USB 3.1; SUPERSPEED; RIGHT ANGLE; 24PINS                                                                                                           |            |
|     14 | J2                     | -         |     1 |                                                                                                          | 2012670005 MOLEX                      | 2012670005      | CONNECTOR; FEMALE; SMT; USB TYPE C RECEPTACLE; RIGHT ANGLE; 24PINS                                                                                                         |            |
|     15 | J4                     | -         |     1 | TSW-103-23-G-S                                                                                           | SAMTEC                                | TSW-103-23-G-S  | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS; -55 DEGC TO +125 DEGC                                                                                                |            |
|     16 | L1                     | -         |     1 | LQM21PZ4R7MGR                                                                                            | MURATA                                | 4.7UH           | INDUCTOR; SMT (0805); FERRITE; 4.7UH; 20%; 0.8A                                                                                                                            |            |
|     17 | R1                     | -         |     1 | CRCW0402100KJN                                                                                           | VISHAY DALE                           | 100K            | RESISTOR; 0402; 100K OHM; 5%; 200PPM; 0.063W; THICK FILM                                                                                                                   |            |
|     18 | R2                     | -         |     1 | ERJ-2RKF5102                                                                                             | PANASONIC                             | 51K             | RESISTOR; 0402; 51K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                      |            |
|     19 | R3                     | -         |     1 | CRCW040240K2FK                                                                                           | VISHAY DALE                           | 40.2K           | RESISTOR; 0402; 40.2K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                  |            |
|     20 | R4, R5                 | -         |     2 | ERJ-2RKF1002                                                                                             | PANASONIC                             | 10K             | RESISTOR; 0402; 10K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                     |            |
|     21 | R6                     | -         |     1 | CRCW06030000Z0                                                                                           | VISHAY DALE                           |                 | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                                                                      |            |
|     22 | SHUNT_J4               | -         |     1 | QPC02SXGN-RC                                                                                             | SULLINS ELECTRONICS CORP.             | QPC02SXGN-RC    | CONNECTOR; FEMALE; 0.100IN CC; OPEN TOP; JUMPER; STRAIGHT; 2PINS                                                                                                           |            |
|     23 | U1                     | -         |     1 | MAX25410BGTE/V+                                                                                          | MAXIM                                 | MAX25410BGTE/V+ | EVKIT PART - IC; PROT; AUTOMOTIVE USB POWER DELIVERY PORT PROTECTION/PROTECTOR; PACKAGE OUTLINE DRAWING: 21-0139; PACKAGE CODE: T1644+4C; LAND PATTERN: 90-0070; TQFN16-EP |            |
|     24 | U2                     | -         |     1 | MAX20075ATCA                                                                                             | MAXIM                                 | MAX20075ATCA    | IC; CONV; 36V 1A MINI BUCK CONVERTER WITH 5UA IQ; TDFN12-EP                                                                                                                |            |
|     25 | VBAT, VBUS, VCC        | -         |     3 |                                                                                                          | 5005 KEYSTONE                         | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                       |            |
|     26 | PCB                    | -         |     1 | MAX25410B                                                                                                | MAXIM                                 | PCB             | PCB:MAX25410B                                                                                                                                                              | -          |
|     27 | C7, C8                 | DNP       |     0 | C0402C0G500-391JNE;GRM1555C1H391JA01; CGA2B2C0G1H391J050BA                                               | VENKEL LTD.;MURATA;TDK                | 390PF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 390PF; 50V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                          |            |

## MAX25410B EV Kit Schematic

<!-- image -->

## MAX25410B EV Kit PCB Layouts

<!-- image -->

MAX25410B EV Kit PCB Layout-Top Silkscreen

MAX25410B EV Kit PCB Layout-Top Layer

<!-- image -->

MAX25410B EV Kit PCB Layout-Layer 2

<!-- image -->

<!-- image -->

MAX25410B EV Kit PCB Layout-Layer 3

MAX25410B EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX25410B EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX25410B Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                   | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------|-----------------|
|                 0 | 7/20            | Release for intro.                                            | -               |
|                 1 | 8/20            | Change part number in header (Evaluates) to root part number. | All             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX25410