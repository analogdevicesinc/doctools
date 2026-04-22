<!-- lastmod 2024-01-18 -->
<!-- image -->

## 1.1 Scope.

This specification covers the detail requirements for a high accuracy, resistor programmable, precision monolithic instrumentation amplifier. The AD620 requires only a single external resistor for gain selection.

## 1.2 Part Number.

The complete part number per Table 1 of this specification is as follows:

Device

Part Number

-1

AD620S(Q)/883B

## 1.2.3 Case Outline.

See Appendix 1 of General Specification ADI-M-1000: package outline:

- (X) PackageDescription

- Q Q-8 8-Pin Ceramic DIP Package

## 1.3 Absolute Maximum Ratings. (TA = +25°C unless otherwise noted)

| Supply Voltage .... .                         | ...±18V      |
|-----------------------------------------------|--------------|
| Internal Power Dissipation                    | ...650 mW    |
| Input Common-Mode Voltage, Range              | ....±Vs      |
| Differential Input Voltage.........           | ...±25V      |
| Rated OperatingTemperatureRange               | -55℃to+125°℃ |
| Storage Temperature Range ....... .           | -65℃to+150℃  |
| Lead Temperature Range (Soldering 10 seconds) | ..+300℃      |

## NOTE

Maximum internal power dissipation is specified so that T, does not exceed +175°C at an ambient temperature of +25°℃. Fortemperaturesabove+25°C,derate theQ-8package@6.7mW/C.

## 1.5 Thermal Characteristics.

Thermal Resistance:

8-Pin Ceramic DIP Package: 0JA = 110°C/W

0jc = 22℃/W

## Precision Instrumentation Amplifier

AD620

OneTechnologyWay,P.0.Box9106,Norwood,MA02062-9106,U.S.A.

Tel:617/329-4700

Fax:617/326-8703

TwX:710/394-6577

## AD620——SPECIFICATIONS

Table 1.

| Test                   | Symbol   |   Device | Design Limit @-55°℃ &+125℃   | Sub Group 1   | Sub Group 2,3   | Test Conditions1            | Unit    |
|------------------------|----------|----------|------------------------------|---------------|-----------------|-----------------------------|---------|
| Gain Error, G = 1      | GE       |       -1 |                              | 0.1           | 0.6             | G = 1, V。 = ±10 V           | ±% max  |
| Gain Error, G = 100    | GE100    |       -1 |                              | 0.3           | 0.8             | G =100,V。= ±10 V            | ±% max  |
| Gain Error, G = 1000   | GE1000   |       -1 | 1.2                          |               |                 | G =1000,V。= ±10 V           | xw %+   |
| Input Offset Voltage   | VosI     |       -1 |                              | 125           | 225             | VIN +O V                    | ±μV max |
| Output Offset Voltage  | Voso     |       -1 |                              | 1000          | 2000            | VIN = 0 V                   | ±μV max |
| Input Bias Current     | IB       |       -1 |                              | 2             | 4               | G=1                         | ±nA max |
| Input Offset Current   | Ios      |       -1 |                              | 1             | 2               | G=1                         | ±nA max |
| Common-Mode Rejection  | +CMRR    |       -1 |                              | 73            | 73              | G = 1, VIn = 0 V to +10 V   | dBmin   |
| Common-Mode Rejection  | -CMRR,   |       -1 |                              | 73            | 73              | G = 1, Vn = 0 V to -10 V    | dB min  |
| Common-Mode Rejection  | +CMRR100 |       -1 |                              | 110           | 110             | G = 100, VIN = 0 V to +10 V | dB min  |
| Common-Mode Rejection  | -CMRR100 |       -1 |                              | 110           | 110             | G = 100,VIN= 0 V to-10 V    | dB min  |
| Power Supply Current   | Icc      |       -1 |                              | 1.3           | 1.6             | G = 1,Vs = ±15 V            | mA max  |
| Power Supply Rejection | PSRR1    |       -1 |                              | 80            | 70              | G=1,Vs=±2.3Vto±18V          | dBmin   |
| Power Supply Rejection | PSRR100  |       -1 |                              | 110           | 100             | G=100,Vs=±2.3Vto±18V        | dBmin   |

## NOTE

IVs = ±15 V, R, = 2 kQΩ, unless otherwise noted.

## 3.2.1 Simplified Schematic andPackage Pinout.

<!-- image -->

## 3.2.4 Microcircuit Technology Group.

This microcircuit is covered by technology group (49).

<!-- image -->

## 4.2.1LifeTest/Burn-InCircuit.

Steady state life test is per MIL-STD-883 Method 1005. Burn-in is per MIL-STD-883 Method 1015 test condition (B).

<!-- image -->

## ESD Susceptibility

ESD (electrostatic discharge) sensitive device. Electrostatic charges as high as 4000 volts, which readily accumulate onthehumanbody and on test equipment,can dischargewithout detection.Although the AD620 features proprietary ESD protection circuitry, permanent damage may still occur on these devices if they are subjected to high energy electrostatic discharges. Therefore, proper ESD precautions are recommendedtoavoid anyperformancedegradationorlossoffunctionality.

-15V

## OUTLINEDIMENSIONS

## 8-Lead Cerdip Package

<!-- image -->

|        | INCHES    | INCHES    | MILLIMETERS   | MILLIMETERS   |       |
|--------|-----------|-----------|---------------|---------------|-------|
| SYMBOL | MIN       | MAX       | MIN           | MAX           | NOTES |
| A      |           | 0.200     |               | 5.08          |       |
| b      | 0.014     | 0.023     | 0.36          | 0.58          | 7     |
| b1     | 0.038     | 0.065     | 0.96          | 1.65          | 2, 7  |
| C      | 0.008     | 0.015     | 0.20          | 0.38          | 7     |
| D      |           | 0.405     |               | 10.29         | 4     |
| E      | 0.220     | 0.310     | 5.59          | 7.87          | 4     |
| E1     | 0.290     | 0.320     | 7.37          | 8.13          | 6     |
| e      | 0.100 BSC | 0.100 BSC | 2.54 BSC      | 2.54 BSC      | 8     |
| L      | 0.125     | 0.200     | 3.18          | 5.08          |       |
| L      | 0.150     |           | 3.81          |               |       |
| Q      | 0.015     | 0.060     | 0.38          | 1.52          | 3     |
| S      |           | 0.055     |               | 1.35          | 5     |
| S1     | 0.005     |           | 0.13          |               | 5     |
| α      | 0°        | 15°       | 0°            | 15°           |       |

## NOTES

- 1.Indexarea;a notchor a leadoneidentificationmark is located adjacent toleadone.
- 2.The minimumlimitfordimensionb,maybe 0.023" (0.58mm)forallfourcornerleadsonly.
- 3.DimensionQshallbemeasuredfromtheseatingplane to the base plane.
4. This dimension allows for off-center lid, meniscus and glass overrun.
- 5.Applies to all four corners.
- 6.Lead centerwhen α is 0.E,shall be measured at the centerlineoftheleads.
- 7.Allleads-increasemaximumlimitby0.003"(0.08mm) measured atthecenterof theflat,whenhotsolderdip leadfinishis applied.
8. Six spaces.