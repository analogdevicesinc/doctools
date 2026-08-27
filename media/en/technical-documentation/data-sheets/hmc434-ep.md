<!-- lastmod 2019-03-19 -->
<!-- image -->

## Enhanced Product

## FEATURES

Ultralow SSB phase noise: -150 dBc/Hz typical Single-ended input/outputs RF output power: -2 dBm typical Single-supply operation: 3 V Ultrasmall, surface-mount, 2.90 mm × 2.80 mm, 6-lead SOT-23 package

## ENHANCED PRODUCT FEATURES

Supports defense and aerospace applications (AQEC standard)

Extended industrial temperature range: -55°C to +105°C Controlled manufacturing baseline 1 assembly/test site 1 fabrication site Product change notification Qualification data available upon request

## APPLICATIONS

DC to C band PLL prescalers Very small aperture terminal (VSAT) radios Unlicensed national information infrastructure (UNII) and

point to point radios

IEEE 802.11a and high performance radio local area network

(HiperLAN) WLAN

Fiber optics Cellular/3G infrastructure

## GENERAL DESCRIPTION

The HMC434-EP is a low noise, static, divide by 8 prescaler monolithic microwave integrated circuit (MMIC) utilizing indium gallium phosphide/gallium arsenide (InGaP/GaAs) heterojunction bipolar transistor (HBT) technology in an ultrasmall surface-mount 6-lead SOT-23 package.

The HMC434-EP operates from near dc (square wave) or 0.2 GHz (sine wave) to 8 GHz input frequency with a single 3 V dc supply.

## 0.2 GHz to 8 GHz, GaAs, HBT MMIC, Divide by 8 Prescaler

[HMC434-EP](http://www.analog.com/HMC434?doc=HMC434-EP.pdf)

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

The HMC434-EP features single-ended inputs and outputs for reduced component count and cost. The low additive single sideband (SSB) phase noise of -150 dBc/Hz at 100 kHz offset helps the user maintain optimal system noise performance.

Additional application and technical information can be found in the HMC434 data sheet.

## HMC434-EP

## TABLE OF CONTENTS

| Features .............................................................................................. 1                                                                           |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enhanced Product Features ............................................................ 1                                                                                            |
| Applications....................................................................................... 1                                                                               |
| Functional Block Diagram .............................................................. 1                                                                                           |
| General Description......................................................................... 1                                                                                      |
| Revision History........................................................................... 2                                                                                       |
| Specifications..................................................................................... 3                                                                               |
| Absolute Maximum Ratings............................................................ 4                                                                                              |
| REVISION HISTORY 3/2019-Rev. Ato Rev. B Changes to Figure 11........................................................................ 6                                              |
| 8/2017-Rev. 0 to Rev.A Changes to Features Section and General Description Section...... 1 Added Endnote 2 to Table 1............................................................ 3 |

3/2017-Revision 0: Initial Version

| Thermal Resistance.......................................................................4      |
|-------------------------------------------------------------------------------------------------|
| ESD Caution...................................................................................4 |
| Pin Configuration and Function Descriptions..............................5                      |
| Interface Schematics .....................................................................5     |
| Typical Performance Characteristics ..............................................6             |
| Outline Dimensions..........................................................................7   |
| Ordering Guide .............................................................................7   |

## SPECIFICATIONS

VCC = 3 V, TA = 25°C, 50 Ω system, unless otherwise noted. PIN is input power.

## Table 1.

| Parameter                  |   Min |   Typ |   Max | Unit   | Test Conditions / Comments                       |
|----------------------------|-------|-------|-------|--------|--------------------------------------------------|
| RADIO FREQUENCY (RF) INPUT |       |       |       |        |                                                  |
| Frequency 1, 2             |   0.2 |       |     8 | GHz    | Sine wave input                                  |
| Power                      |   -10 |     0 |   +10 | dBm    | f IN = 1.0 GHz to 3.0 GHz                        |
|                            |     0 |     0 |    10 | dBm    | f IN = 3.0 GHz to 8.0 GHz                        |
| RF OUTPUT                  |       |       |       |        |                                                  |
| SSB Phase Noise            |       |  -150 |       | dBc/Hz | 100 kHz offset, P IN = 0 dBm, f IN =4.0 GHz      |
| Power                      |    -5 |    -2 |       | dBm    | f IN = 1.0 GHz to 8.0 GHz                        |
| REVERSE LEAKAGE            |       |   -25 |       | dBm    | P IN = 0 dBm, f IN = 4.0 GHz , output terminated |
| SUPPLY                     |       |       |       |        |                                                  |
| Voltage (V CC )            |  2.85 |     3 |  3.15 | V      |                                                  |
| Current (I CC )            |       |    62 |    83 | mA     |                                                  |

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                  | Rating          |
|----------------------------|-----------------|
| Supply Voltage (V CC )     | -0.3 V to +3.5V |
| RF Input Power (V CC = 3V) | 13dBm           |
| Temperature                |                 |
| Operating                  | -55°C to +105°C |
| Storage                    | -65°C to +125°C |
| Junction, T J              | 135°C           |
| Nominal (T A = 105°C)      | 119°C           |
| Reflow                     | 260°C           |
| ESD Sensitivity            |                 |
| Human Body Model (HBM)     | Class 0         |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θJA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure. θJC is the junction to case thermal resistance.

## Table 3. Thermal Resistance

| PackageType   |   θ JA 1 |   θ JC 2 | Unit   |
|---------------|----------|----------|--------|
| RJ-6          |      359 |       70 | °C/W   |

1  Simulated values per JEDEC JESD51-12 standards.

2  Junction to GND package pin.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

NOTES 1. NOT INTERNALLY CONNECTED. THESE PINS CAN BE CONNECTED TO RF AND DC GROUND WITHOUT AFFECTING PERFORMANCE. THE NIC PINS ARE TYPICALLY TIED TO GND FOR ENHANCED THERMAL PERFORMANCE (BUT NOT REQUIRED).

Figure 2. Pin Configuration

Table 4. Pin Function Descriptions

| Pin No.   | Mnemonic   | Description                                                                                                                                                                                         |
|-----------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 4      | NIC        | Not Internally Connected. These pins can be connected to RF and dc ground without affecting performance. The NIC pins are typically tied to GNDfor enhanced thermal performance (but not required). |
| 2         | GND        | Ground. This pin must be connected to both RF and dc ground.                                                                                                                                        |
| 3         | IN         | RF Input. This pin must be dc blocked.                                                                                                                                                              |
| 5         | VCC        | Supply Voltage (3 V).                                                                                                                                                                               |
| 6         | OUT        | RF Output. This pin must be dc blocked.                                                                                                                                                             |

## INTERFACE SCHEMATICS

Figure 3. GND Interface Schematic

<!-- image -->

Figure 4. IN Interface Schematic

<!-- image -->

15647-002

Figure 5. OUT Interface Schematic

<!-- image -->

Figure 6. VCC Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

In Figure 9, PFEEDTHROUGH is the power of the output spectrum at the input frequency.

<!-- image -->

Figure 7. Input Sensitivity Window

<!-- image -->

Figure 8. Output Power vs. Frequency at Various Temperatures

Figure 9. Output Harmonic Content (PIN = 0 dBm)

<!-- image -->

Figure 10. Input Sensitivity Window at Various Temperatures

<!-- image -->

15647-011

Figure 11. SSB Phase Noise (PIN = 0 dBm)

<!-- image -->

Figure 12. Reverse Leakage (PIN = 0 dBm)

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

12-16-2008-A

Figure 13. 6-Lead Small Outline Transistor Package [SOT-23] (RJ-6)

Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1          | Temperature Range   | Package Description                              | Package Option   | Marking Code   |
|------------------|---------------------|--------------------------------------------------|------------------|----------------|
| HMC434SRJZ-EP-PT | -55°C to +105°C     | 6-Lead Small Outline Transistor Package [SOT-23] | RJ-6             | 34P            |
| HMC434SRJZ-EP-R7 | -55°C to +105°C     | 6-Lead Small Outline Transistor Package [SOT-23] | RJ-6             | 34P            |

<!-- image -->