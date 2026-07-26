<!-- lastmod 2019-01-24 -->
<!-- image -->

## Enhanced Product

## FEATURES

2.3 A peak output current (typical)

2.5 V to 6.5 V input

7.5 V to 35 V output

Undervoltage lockout (UVLO) at 2.5 V VDD1 and 7.5 V VDD2 Precise timing characteristics

53 ns maximum isolator and driver propagation delay CMOS input logic levels

High common-mode transient immunity: &gt;150 kV/µs High junction temperature operation: 125°C

Default low output

Internal Miller clamp

[Safety and regulatory approvals (pending)](https://www.analog.com/icouplersafety?doc=ADuM4121-1-EP.pdf)

UL recognition per UL 1577 5 kV rms for 1-minute withstand CSA Component Acceptance Notice 5A VDE certificate of conformity (pending) DIN V VDE V 0884-10 (VDE V 0884-10): 2006-12 VIORM = 849 V peak

Wide-body, 8-lead SOIC

## ENHANCED PRODUCT FEATURES

Supports defense and aerospace applications (AQEC standard) Military temperature range (-55°C to +125°C) Controlled manufacturing baseline 1 assembly/test site 1 fabrication site Product change notification Qualification data available on request

## APPLICATIONS

Missiles and munitions Avionics Unmanned systems

Isolated IGBT/MOSFET gate drives

## High Voltage, Isolated Gate Driver with Internal Miller Clamp, 2.3 A Output

[ADuM4121-1-EP](https://www.analog.com/adum4121-1?doc=adum4121-1-ep.pdf)

## GENERAL DESCRIPTION

The ADuM4121-1-EP 1  is a 2.3 A isolated, single-channel driver that employ Analog Devices, Inc., i Coupler® technology to provide precision isolation. The ADuM4121-1-EP provides 5 kV rms isolation in the wide-body, 8-lead SOIC package. Combining high speed CMOS and monolithic transformer technology, this isolation component provides outstanding performance characteristics superior to alternatives such as the combination of pulse transformers and gate drivers.

The ADuM4121-1-EP operates with an input supply ranging from 2.5 V to 6.5 V, providing compatibility with lower voltage systems. In comparison to gate drivers that employ high voltage level translation methodologies, the ADuM4121-1-EP offers the benefit of true, galvanic isolation between the input and the output.

The ADuM4121-1-EP includes an internal Miller clamp that activates at 2 V on the falling edge of the gate drive output, supplying the driven gate with a lower impedance path to reduce the chance of Miller capacitance induced turn on.

The ADuM4121-1-EP provides reliable control over the switching characteristics of insulated gate bipolar transistor (IGBT)/metal oxide semiconductor field effect transistor (MOSFET) configurations over a wide range of switching voltages.

Additional application and technical information can be found in the ADuM4121-1 data sheet.

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

Figure 1.

1 Protected by U.S. Patents 5,952,849; 6,873,065; and 7,075,329. Other patents pending.

[Document Feedback](https://form.analog.com/Form_Pages/feedback/documentfeedback.aspx?doc=ADuM4121-1-EP.pdf&product=ADuM4121-1-EP&rev=0)

## [ADuM4121-1-EP](https://www.analog.com/adum4121-1?doc=adum4121-1-ep.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Enhanced Product Features ............................................................ 1                    |
| Applications....................................................................................... 1       |
| General Description......................................................................... 1              |
| Functional Block Diagram .............................................................. 1                   |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| Electrical Characteristics............................................................. 3                   |
| Regulatory Information............................................................... 4                     |
| Package Characteristics ............................................................... 4                   |
| Insulation and Safety Related Specifications ............................ 5                                 |

## REVISION HISTORY

1/2019-Revision 0: Initial Version

| DINVVDEV0884-10 (VDEV 0884-10) Insulation                                                        |
|--------------------------------------------------------------------------------------------------|
| Characteristics ...............................................................................5 |
| Recommended Operating Conditions .......................................5                        |
| Absolute Maximum Ratings ............................................................6           |
| Thermal Resistance.......................................................................6       |
| ESD Caution...................................................................................6  |
| Pin Configuration and Function Descriptions..............................7                       |
| Typical Performance Characteristics ..............................................8              |
| Outline Dimensions..........................................................................9    |
| Ordering Guide .............................................................................9    |

## SPECIFICATIONS ELECTRICAL CHARACTERISTICS

Low-side voltages referenced to GND1. High side voltages referenced to GND2; 2.5 V ≤ VDD1 ≤ 6.5 V; 7.5 V ≤ VDD2 ≤ 35 V, TJ = -55°C to +125°C. All minimum/maximum specifications apply over the entire recommended operating range, unless otherwise noted. All typical specifications are at TJ = 25°C, VDD1 = 5.0 V , VDD2 = 15 V .

Table 1.

| Parameter                          | Symbol        | Min           |   Typ | Max           | Unit   | TestConditions/Comments                   |
|------------------------------------|---------------|---------------|-------|---------------|--------|-------------------------------------------|
| DC SPECIFICATIONS                  |               |               |       |               |        |                                           |
| High Side Power Supply             |               |               |       |               |        |                                           |
| V DD2 Input Voltage                | V DD2         | 7.5           |       | 35            | V      |                                           |
| V DD2 Input Current, Quiescent     | I DD2(Q)      |               |   2.3 | 2.7           | mA     |                                           |
| Logic Supply                       |               |               |       |               |        |                                           |
| V DD1 Input Voltage                | V DD1         | 2.5           |       | 6.5           | V      |                                           |
| Input Current                      | I DD1         |               |   3.6 | 5             | mA     | V I + = high,V I - = low                  |
| Logic Inputs (V I +,V I -)         |               |               |       |               |        |                                           |
| Input Current                      | I I +, I I -  | -1            |  0.01 | +1            | µA     |                                           |
| Input Voltage                      |               |               |       |               |        |                                           |
| Logic High                         | V IH          | 0.7×V DD1 3.5 |       |               | V V    | 2.5V≤V DD1 ≤ 5 V V DD1 > 5 V              |
| Logic Low                          | V IL          |               |       | 0.3×V DD1 1.5 | V V    | 2.5V≤V DD1 ≤ 5 V V DD1 > 5 V              |
| UVLO                               |               |               |       |               |        |                                           |
| V DD1                              |               |               |       |               |        |                                           |
| Positive Going Threshold           | V VDD1UV+     |               |  2.45 | 2.5           | V      |                                           |
| Negative Going Threshold           | V VDD1UV-     | 2.3           |  2.35 |               | V      |                                           |
| Hysteresis                         | V VDD1UVH     |               |   0.1 |               | V      |                                           |
| V DD2                              |               |               |       |               |        |                                           |
| Positive Going Threshold           | V VDD2UV+     |               |   7.3 | 7.5           | V      |                                           |
| Negative Going Threshold           | V VDD2UV-     | 6.9           |   7.1 |               | V      |                                           |
| Hysteresis                         | V VDD2UVH     |               |   0.2 |               | V      |                                           |
| Internal NMOSGate Resistance       | R DSON_N      |               |   0.6 | 1.6           | Ω      | Tested at 250 mA,V DD2 = 15V              |
|                                    |               |               |   0.6 | 1.6           | Ω      | Tested at 1 A,V DD2 = 15V                 |
| Internal PMOS Gate Resistance      | R DSON_P      |               |   0.8 | 1.8           | Ω      | Tested at 250 mA,V DD2 = 15V              |
|                                    |               |               |   0.8 | 1.8           | Ω      | Tested at 1 A,V DD2 = 15V                 |
| Internal Miller Clamp Resistance   | R DSON_MILLER |               |   0.8 | 2             | Ω      | Tested at 200 mA,V DD2 = 15V              |
| Miller ClampVoltage Threshold      | V CLP_TH      | 1.75          |     2 | 2.25          | V      | Referenced toGND 2 ,V DD2 = 15V           |
| Peak Current                       | I PK          |               |   2.3 |               | A      | V DD2 = 12V, 4 Ωgate resistance           |
| SWITCHING SPECIFICATIONS           |               |               |       |               |        |                                           |
| Pulse Width                        | PW            | 50            |       |               | ns     | C L =2nF,V DD2 =15V,R GON 1 =R GOFF 1 =5Ω |
| Propagation Delay                  |               |               |       |               |        |                                           |
| Rising Edge 2                      | t DLH         | 22            |    32 | 42            | ns     | C L =2nF,V DD2 =15V,R GON =R GOFF =5Ω     |
| Falling Edge 2                     | t DHL         | 30            |    38 | 53            | ns     | C L =2nF,V DD2 =15V,R GON =R GOFF =5Ω     |
| Skew 3                             | t PSK         |               |       | 22            | ns     | C L =2nF,V DD2 =15V,R GON =R GOFF =5Ω     |
| Falling Edge 4                     | t PSKHL       |               |       | 12            | ns     | C L =2nF,V DD2 =15V,R GON =R GOFF =5Ω     |
| Rising Edge 5                      | t PSKLH       |               |       | 15            | ns     | C L =2nF,V DD2 =15V,R GON =R GOFF =5Ω     |
| Pulse Width Distortion             | t PWD         |               |     7 | 13            | ns     | C L =2nF,V DD2 =15V,R GON =R GOFF =5Ω     |
| Output Rise/Fall Time (10% to 90%) | t R /t F      | 11            |    18 | 26            | ns     | C L =2nF,V DD2 =15V,R GON =R GOFF =5Ω     |

## [ADuM4121-1-EP](https://www.analog.com/adum4121-1?doc=adum4121-1-ep.pdf)

| Parameter                                       | Symbol         |   Min | Typ   | Max   | Unit   | TestConditions/Comments   |
|-------------------------------------------------|----------------|-------|-------|-------|--------|---------------------------|
| Common-ModeTransientImmunity(CMTI) StaticCMTI 6 | &#124;CM&#124; |       |       |       |        |                           |
|                                                 |                |   150 |       |       | kV/µs  | V CM = 1500V              |
| DynamicCMTI 7                                   |                |   150 |       |       | kV/µs  | V CM = 1500V              |

## REGULATORY INFORMATION

The ADuM4121-1-EP is pending approval by the organizations listed in Table 2.

## Table 2.

| UL(Pending)                                     | CSA (Pending)                                                                                                                                                                                                                                                                                                                                                                                                                                                             | VDE(Pending)                                                                                                                                   | CQC(Pending)                                                                                |
|-------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| UL1577 Component Recognition Program            | Approved under CSA Component Acceptance Notice 5A CSA 60950-1-07+A1+A2 and IEC second edition, +A1+A2: Basic insulation at 800 V rms (1131 V peak) Reinforced insulation at 400 V rms (565 V peak) IEC 60601-1 Edition 3.1: Basic insulation(1meansofpatient protection(MOPP)),500Vrms(707Vpeak) Reinforced insulation (2 MOPP), 250 V rms (1414 V peak) CSA 61010-1-12 and IEC 61010-1 third edition Basic insulation at: 600 V rms mains, 800 V secondary (1089 V peak) | DIN V VDE V 0884-10 (VDE V 0884-10):2006-12 Reinforced insulation, 849 V peak, V IOSM = 10 kV peak Basic insulation 849Vpeak, V IOSM =16kVpeak | Certified under CQC11- 471543-2012 GB4943.1-2011 Basic (1131Vpeak) Reinforced insulation at |
| Single Protection, 5000 V rms Isolation Voltage | 60950-1,                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                |                                                                                             |
|                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                | insulationat800Vrms                                                                         |
|                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                | 400 V rms (565 V peak)                                                                      |
|                                                 | Reinforced insulation at: 300 V rms mains, 400 V secondary (565 V peak)                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                |                                                                                             |
| File E214100                                    | File 205078                                                                                                                                                                                                                                                                                                                                                                                                                                                               | File 2471900-4880-0001                                                                                                                         | File (pending)                                                                              |

## PACKAGE CHARACTERISTICS

Table 3.

| Parameter                                      | Symbol   | Min   | Typ   | Max   | Unit   |
|------------------------------------------------|----------|-------|-------|-------|--------|
| Resistance (Input Side to High-Side Output) 1  | R I-O    |       | 10 12 |       | Ω      |
| Capacitance (Input Side to High-Side Output) 1 | C I-O    |       | 2.0   |       | pF     |
| Input Capacitance                              | C I      |       | 4.0   |       | pF     |

## INSULATION AND SAFETY RELATED SPECIFICATIONS

Table 4.

| Parameter                                                                   | Symbol   | Value    | Unit   | Conditions                                                                                                                 |
|-----------------------------------------------------------------------------|----------|----------|--------|----------------------------------------------------------------------------------------------------------------------------|
| Rated Dielectric Insulation Voltage                                         |          | 5000     | V rms  | 1-minute duration                                                                                                          |
| Minimum External Air Gap (Clearance)                                        | L(I01)   | 8 min    | mm     | Measured from input terminals to output terminals, shortest distance through air                                           |
| Minimum External Tracking (Creepage)                                        | L(I02)   | 8 min    | mm     | Measured from input terminals to output terminals, shortest distance path along body                                       |
| Minimum Clearance in the Plane of the Printed Circuit Board (PCB Clearance) | L (PCB)  | 8.3 min  | mm     | Measured from input terminals to output terminals, shortest distance through air, line of sight, in the PCB mounting plane |
| Minimum Internal Gap (Internal Clearance)                                   |          | 25.5 min | µm     | Minimum distance through insulation                                                                                        |
| Tracking Resistance (Comparative Tracking Index)                            | CTI      | >400     | V      | DIN IEC 112/VDE 0303 Part 3                                                                                                |
| Isolation Group                                                             |          | II       |        | Material Group (DIN VDE 0110, 1/89, Table 1)                                                                               |

## DIN V VDE V 0884-10 (VDE V 0884-10) INSULATION CHARACTERISTICS

This isolator is suitable for reinforced isolation only within the safety limit data. Maintenance of the safety data is ensured by protective circuits.

## Table 5. VDE Characteristics

Figure 2. Thermal Derating Curve, Dependence of Safety Limiting Values on Ambient Temperature, per DIN V VDE V 0884-10

| Description                                                                 | Test Conditions/Comments                                                                        | Symbol   | Characteristic   | Unit   |
|-----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|----------|------------------|--------|
| InstallationClassificationperDINVDE0110 For Rated Mains Voltage ≤ 600 V rms |                                                                                                 |          |                  |        |
|                                                                             |                                                                                                 |          | I to IV          |        |
| Climatic Classification                                                     |                                                                                                 |          | 40/105/21        |        |
| Pollution Degree per DIN VDE0110, Table 1                                   |                                                                                                 |          | 2                |        |
| Maximum Working Insulation Voltage                                          |                                                                                                 | V IORM   | 849              | Vpeak  |
| Input to Output Test Voltage,MethodB1                                       | V IORM × 1.875 = V pd (m) , 100% production test, t ini = t m = 1 sec, partial discharge < 5 pC | V pd (m) | 1592             | Vpeak  |
| Input to Output TestVoltage,MethodA                                         |                                                                                                 |          |                  |        |
| After Environmental TestsSubgroup1                                          | V IORM ×1.5=V pd(m) , t ini =60sec,t m =10sec, partial discharge<5pC                            | V pd (m) | 1274             | Vpeak  |
| AfterInput and/orSafetyTestSubgroup2 andSubgroup3                           | V IORM ×1.2=V pd(m) , t ini =60sec,t m =10sec, partial discharge<5pC                            | V pd (m) | 1019             | Vpeak  |
| Highest Allowable Overvoltage                                               |                                                                                                 | V IOTM   | 7000             | Vpeak  |
| Surge Isolation Voltage Basic                                               | VPEAK = 16 kV, 1.2 µs rise time, 50 µs, 50% fall time                                           | V IOSM   | 16,000           | Vpeak  |
| Surge Isolation Voltage Reinforced                                          | VPEAK = 16 kV, 1.2 µs rise time, 50 µs, 50% fall time                                           | V IOSM   | 10,000           | Vpeak  |
| Safety Limiting Values                                                      | Maximumvalueallowed in the event ofa failure (see Figure 2)                                     |          |                  |        |
| Maximum Junction Temperature                                                |                                                                                                 | T S      | 150              | °C     |
| Safety Total Dissipated Power                                               |                                                                                                 | P S      | 1.2              | W      |
| Insulation Resistance at T S                                                | V IO = 500 V                                                                                    | R S      | >10 9            | Ω      |

<!-- image -->

## RECOMMENDED OPERATING CONDITIONS

| Table 6.                           | Value           |
|------------------------------------|-----------------|
| Operating Temperature Range (T J ) | -55°C to +125°C |
| Supply Voltages                    |                 |
| V DD1 toGND 1                      | 2.5 V to 6.5V   |
| V DD2 toGND 2                      | 7.5 V to 35V    |

## ABSOLUTE MAXIMUM RATINGS

Ambient temperature = 25°C, unless otherwise noted.

Table 7.

| Parameter                                 | Rating                  |
|-------------------------------------------|-------------------------|
| Storage Temperature Range (T ST )         | -55°C to +150°C         |
| Junction OperatingTemperature Range(T J ) | -55°C to +125°C         |
| Supply Voltages                           |                         |
| V DD1 toGND 1                             | -0.3V to +7 V           |
| V DD2 toGND 2                             | -0.3V to +40 V          |
| Input Voltages                            |                         |
| V I +,V I - 1                             | -0.3Vto+7V              |
| V CLAMP 2                                 | -0.3VtoV DD2 +0.3V      |
| Output Voltages                           |                         |
| V OUT 2                                   | -0.3VtoV DD2 +0.3V      |
| Common-ModeTransients (&#124;CM&#124;) 3  | -200 kV/µs to +200kV/µs |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

Table 9. Maximum Continuous Working Voltage 1

| Parameter             |   Rating | Unit   | Constraint                                                                            |
|-----------------------|----------|--------|---------------------------------------------------------------------------------------|
| ACVoltage             |          |        |                                                                                       |
| Basic Insulation      |      849 | V peak | 50-year minimum insulation lifetime                                                   |
| Reinforced Insulation |      789 | V peak | Lifetime limited by package creepage maximum approved working voltage per IEC 60950-1 |
| Unipolar Waveform     |          |        |                                                                                       |
| Basic Insulation      |     1698 | V peak | 50-year minimum insulation lifetime                                                   |
| Reinforced Insulation |      849 | V peak | 50-year minimum insulation lifetime                                                   |
| DCVoltage             |          |        |                                                                                       |
| Basic Insulation      |     1118 | V peak | Lifetime limited by package creepage maximum approved working voltage per IEC 60950-1 |
| Reinforced Insulation |      558 | V peak | Lifetime limited by package creepage maximum approved working voltage per IEC 60950-1 |

## Table 10. Truth Table

| V I -      | V I +      | V DD1 State   | V DD2 State   | V OUT Output   |
|------------|------------|---------------|---------------|----------------|
| Don't care | Low        | Powered       | Powered       | Low            |
| Low        | High       | Powered       | Powered       | High           |
| High       | Don't care | Powered       | Powered       | Low            |
| Don't care | Don't care | Unpowered     | Powered       | Low            |
| Don't care | Don't care | Powered       | Unpowered     | Low 1          |

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θJA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure.

## Table 8. Thermal Resistance

| PackageType   |   θ JA | Unit   |
|---------------|--------|--------|
| RI-8-1 1      |  104.2 | °C/W   |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

ADuM4121-1-EP

- [ ] 1 VDD1

- [ ] 2 VI +

- [ ] 3 VI -

- [x] 4 GND1

- [ ] 8 VDD2

- [ ] 7 VOUT

- [ ] 6 CLAMP

- [ ] 5 GND2

TOP VIEW

(Not to Scale)

Figure 3. Pin Configuration

Table 11. Pin Function Descriptions

|   Pin No. | Mnemonic   | Description                                                                                       |
|-----------|------------|---------------------------------------------------------------------------------------------------|
|         1 | V DD1      | Supply Voltage for Isolator Side 1.                                                               |
|         2 | V I +      | Noninverting Gate Drive Logic Input.                                                              |
|         3 | V I -      | Inverting Gate Drive Logic Input.                                                                 |
|         4 | GND 1      | Ground 1. This pin is the ground reference for Isolator Side 1.                                   |
|         5 | GND 2      | Ground 2. This pin is the ground reference for Isolator Side 2.                                   |
|         6 | CLAMP      | Miller Clamp and Gate Voltage Sense. Connect this pin directly to the gate being driven.          |
|         7 | V OUT      | Gate Drive Output. Connect this pin to the gate being driven through an external series resistor. |
|         8 | V DD2      | Supply Voltage for Isolator Side 2.                                                               |

17322-003

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 4. Propagation Delay vs. Temperature, 2 nF Load

<!-- image -->

Figure 5. Output Resistance (RDSON) vs. Temperature, VDD2 = 15 V

<!-- image -->

## OUTLINE DIMENSIONS

Figure 6. 8-Lead Standard Small Outline Package, with Increased Creepage [SOIC\_IC] Wide Body

<!-- image -->

(RI-8-1)

Dimensions shown in millimeters

| Model 1            |   No. of Channels |   OutputPeak Current(A) | Thermal Shutdown   |   MinimumOutput Voltage(V) | Temperature Range   | Package Description   | Package Option   |
|--------------------|-------------------|-------------------------|--------------------|----------------------------|---------------------|-----------------------|------------------|
| ADUM4121-1TRIZ-EP  |                 1 |                       2 | No                 |                        7.5 | -55°C to +125°C     | 8-Lead SOIC_IC        | RI-8-1           |
| ADUM4121-1TRIZ-EPR |                 1 |                       2 | No                 |                        7.5 | -55°C to +125°C     | 8-Lead SOIC_IC        | RI-8-1           |

## ORDERING GUIDE

1  Z = RoHS Compliant Part.

<!-- image -->