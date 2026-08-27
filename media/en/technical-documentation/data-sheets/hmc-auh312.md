<!-- lastmod 2019-11-04 -->
<!-- image -->

Data Sheet

## FEATURES

Small signal gain: &gt;8 dB 80 GHz distributed amplifier Configurable with or without bias tees for VDD and VGG1 bias Low power dissipation 300 mW with bias tee at VDD = 5 V 360 mW without bias tee at VDD = 6 V 480 mW without bias tee at VDD = 8 V Die size: 1.2 mm × 1.0 mm × 0.1 mm

## APPLICATIONS

Fiber optic modulator drivers Fiber optic photoreceiver postamplifiers Low noise amplifier for test and measurement equipment Point to point and point to multipoint radios Wideband communication and surveillance systems Radar warning receivers

## GENERAL DESCRIPTION

The HMC-AUH312 is a gallium arsenide (GaAs), monolithic microwave integrated circuit (MMIC), HEMT, low noise, wideband amplifier die that operates between 500 MHz and 80 GHz, providing a typical 3 dB bandwidth of 80 GHz. The amplifier provides 10 dB of small signal gain and a maximum output amplitude of 2.5 V p-p, which makes it ideal for use in broadband wireless, fiber optic communications, and test equipment applications.

## 0.5 GHz to 80 GHz, GaAs, HEMT, MMIC,

## Low Noise Wideband Amplifier

[HMC-AUH312](http://www.analog.com/HMC-AUH312?doc=HMC-AUH312.pdf)

## FUNCTIONAL BLOCK DIAGRAM

13476-001

Figure 1.

<!-- image -->

The amplifier die occupies 1.2 mm × 1.0 mm, facilitating easy integration into a multichip module (MCM). The HMC-AUH312 can be used with or without a bias tee, and requires off-chip blocking components and bypass capacitors for the dc supply lines. Adjustable gate voltages allow for gain adjustment.

## HMC-AUH312

## TABLE OF CONTENTS

| Features ..............................................................................................                                                                                                            | 1                                             |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| Applications.......................................................................................                                                                                                                | 1                                             |
| Functional Block Diagram ..............................................................                                                                                                                            | 1                                             |
| General Description.........................................................................                                                                                                                       | 1                                             |
| Revision History ...............................................................................                                                                                                                   | 2                                             |
| Specifications.....................................................................................                                                                                                                | 3                                             |
| 0.5 GHz to 60 GHz Frequency Range........................................                                                                                                                                          | 3                                             |
| 60 GHz to 80 GHz Frequency Range.........................................                                                                                                                                          | 3                                             |
| Recommended Operating Conditions                                                                                                                                                                                   | ...................................... 3      |
| Absolute Maximum Ratings............................................................                                                                                                                               | 5                                             |
| ESD Caution..................................................................................                                                                                                                      | 5                                             |
| Pin Configuration and Function Descriptions.............................                                                                                                                                           | 6                                             |
| Interface Schematics.....................................................................                                                                                                                          | 7                                             |
| Typical Performance Characteristics .............................................                                                                                                                                  | 8                                             |
| REVISION HISTORY 11/2019-Rev. E to Rev. F Change to Voltage Parameter, Table 4                                                                                                                                     | ........................................... 4 |
| 11/2015-v04.0615 to Rev. E                                                                                                                                                                                         |                                               |
| This Hittite Microwave Products data sheet has been reformatted to meet the styles and standards of Analog Devices, Inc. Updated Format..................................................................Universal | 1                                             |
| Changes to Title of Data Sheet............................................... Page Change Vg1 to V GG 1, Vg2 toV GG 2, Vd toV DD , RFIN to RFIN/V GG 1, and RFOUT to RFOUT/V DD ..................Throughout       |                                               |
| Changes to General Description Section ......................................                                                                                                                                      | 1                                             |
| Changes to Gain Parameter, Table 2 .............................................. Changes to Power Dissipation Parameter and Operating                                                                             | 3                                             |
| Temperature Parameter, Table 3.....................................................                                                                                                                                | 3                                             |
| Changes to Power Dissipation Parameter and Operating Temperature Parameter, Table 4..................................................... Changes to Table                                                          | 4                                             |
| 5............................................................................ Added Figure 2, Renumbered Sequentially ..................................                                                           | 5 6                                           |

Theory of Operation ...................................................................... 11

Applications Information .............................................................. 12

Applications Overview .............................................................. 12

Device Mounting  ........................................................................ 14

Device Operation ....................................................................... 14

Mounting and Bonding Techniques for Millimeterwave GaAs

MMICs ............................................................................................. 15

Handling Guidelines for ESD Protection of GaAs MMICs ........  15

Handling Precautions ................................................................ 15

Mounting Techniques ................................................................ 16

Wire Bonding  .............................................................................. 16

Outline Dimensions ....................................................................... 17

Ordering Guide .......................................................................... 17

Changes to Table 6  .............................................................................  6

Added Interface Schematics Section  ...............................................  7

Changes to Figure 3  ...........................................................................  7

Changes to Figure 14, Figure 16, and Figure 19  ............................  9

Changes to Figure 20...................................................................... 10

Added Theory of Operation Section and Figure 21 .................. 11

Added Applications Information Section and Applications

Overview Section............................................................................ 12

Changes to Figure 24 and Figure 25 ............................................ 13

Changes to Device Power-Up Instructions Section and Device

Power-Down Instructions Section ............................................... 14

Added Handling Guidelines for ESD Protection of GaAs MMICs

Section and Opening the Protective Packaging Section ................ 15

Changes to Handling Precautions Section  .................................. 15

Changes to Mounting Techniques Section ................................. 16

Updated Outline Dimensions ....................................................... 17

Changes to Ordering Guide .......................................................... 17

## SPECIFICATIONS

TA = 25°C, VDD = 8 V, VGG2 = 1.8 V, IDD = 60 mA, unless otherwise noted.

## 0.5 GHz to 60 GHz FREQUENCY RANGE

Table 1.

| Parameter                         | Symbol   |   Typ |   Max | Unit   | Test Conditions/Comments                                                   |
|-----------------------------------|----------|-------|-------|--------|----------------------------------------------------------------------------|
| FREQUENCY RANGE                   |          |       |    60 | GHz    |                                                                            |
| GAIN                              |          |    10 |       | dB     |                                                                            |
| RETURN LOSS                       |          |       |       |        |                                                                            |
| Input                             |          |       |    15 | dB     |                                                                            |
| Output                            |          |    17 |       | dB     |                                                                            |
| OUTPUT                            |          |       |       |        |                                                                            |
| Output Power for 1 dB Compression | P1dB     |  13.5 |       | dBm    |                                                                            |
| Saturated Output Power            | P SAT    |    16 |       | dBm    |                                                                            |
| Output Third-Order Intercept      | IP3      |    23 |       | dBm    |                                                                            |
| NOISE FIGURE                      |          |     5 |       | dB     |                                                                            |
| SUPPLY CURRENT                    | I DD     |    60 |       | mA     | V DD = 8V, adjustV GG 1 between -2 V and 0V to achieve I DD = 60 mAtypical |

## 60 GHz TO 80 GHz FREQUENCY RANGE

Table 2.

| Parameter                         | Symbol   |   Typ |   Max | Unit   | Test Conditions/Comments                                                   |
|-----------------------------------|----------|-------|-------|--------|----------------------------------------------------------------------------|
| FREQUENCY RANGE                   |          |       |    80 | GHz    |                                                                            |
| GAIN                              |          |     9 |       | dB     |                                                                            |
| RETURN LOSS                       |          |       |       |        |                                                                            |
| Input                             |          |    10 |       | dB     |                                                                            |
| Output                            |          |    15 |       | dB     |                                                                            |
| OUTPUT                            |          |       |       |        |                                                                            |
| Output Power for 1 dB Compression | P1dB     |    13 |       | dBm    |                                                                            |
| Saturated Output Power            | P SAT    |    15 |       | dBm    |                                                                            |
| Output Third-Order Intercept      | IP3      |    22 |       | dBm    |                                                                            |
| NOISE FIGURE                      |          |       |       | dB     |                                                                            |
| SUPPLY CURRENT                    | I DD     |    60 |       | mA     | V DD = 8V, adjustV GG 1 between -2 V and 0V to achieve I DD = 60 mAtypical |

## RECOMMENDED OPERATING CONDITIONS

## Table 3. Recommended Operating Conditions with Bias Tee

| Parameter            | Symbol   |   Min |   Typ |   Max | Unit   |
|----------------------|----------|-------|-------|-------|--------|
| POSITIVE SUPPLY      |          |       |       |       |        |
| Voltage              |          |     3 |     5 |     6 | V      |
| Current              |          |       |    60 |    80 | mA     |
| GATEVOLTAGE          |          |       |       |       |        |
| Gate Voltage 1       | V GG 1   |    -1 |       |  +0.3 | V      |
| Gate Voltage 2       | V GG 2   |       |   1.8 |       | V      |
| POWER DISSIPATION    |          |       |   300 |       | mW     |
| RF INPUT POWER       |          |       |       |     4 | dBm    |
| OPERATINGTEMPERATURE |          |   -55 |   +25 |   +85 | °C     |

## HMC-AUH312

## Table 4. Recommended Operating Conditions Without Bias Tee

| Parameter            | Symbol            | Min               | Typ               | Max               | Unit              |
|----------------------|-------------------|-------------------|-------------------|-------------------|-------------------|
| POSITIVE SUPPLY      | POSITIVE SUPPLY   | POSITIVE SUPPLY   | POSITIVE SUPPLY   | POSITIVE SUPPLY   | POSITIVE SUPPLY   |
| Voltage              |                   | 6                 | 8                 | 8.25              | V                 |
| Current              |                   |                   | 60                | 65                | mA                |
| GATEVOLTAGE          | GATEVOLTAGE       | GATEVOLTAGE       | GATEVOLTAGE       | GATEVOLTAGE       | GATEVOLTAGE       |
| Gate Voltage 1       | V GG 1            | -1                |                   | +0.5              | V                 |
| Gate Voltage 2       | V GG 2            | 1                 | 1.8               |                   | V                 |
| POWER DISSIPATION    | POWER DISSIPATION | POWER DISSIPATION | POWER DISSIPATION | POWER DISSIPATION | POWER DISSIPATION |
| V DD = 6V            |                   |                   | 360               |                   | mW                |
| V DD = 8V            |                   |                   | 480               |                   | mW                |
| RF INPUT POWER       |                   |                   |                   | 4                 | dBm               |
| OPERATINGTEMPERATURE |                   | -55               | +25               | +85               | °C                |

## ABSOLUTE MAXIMUM RATINGS

## Table 5.

| Parameter                                   | Rating         |
|---------------------------------------------|----------------|
| Drain Bias Voltage with Bias Tee (V DD )    | 7V dc          |
| Drain Bias Voltage Without Bias Tee (V DD ) | 8.25V dc       |
| Gain Bias Voltage (V GG 1)                  | 0.5V           |
| Gain Bias Voltage (V GG 2)                  | 2V             |
| RF Input Power                              | 10dBm          |
| Channel Temperature                         | 180°C          |
| Storage Temperature Range                   | -40°C to +85°C |
| Operating Temperature Range                 | -55°C to +85°C |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

Data Sheet

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

- [ ] TOP VIEW

(Not to Scale)

- [ ] HMC-AUH312 RFIN/V GG 1 1

V GG 1

VGG2

VDD

- [x] RFOUT/V DD 3

4

5

2

<!-- image -->

NOTES

1. DIE BOTTOM MUST BE CONNECTED TO RF/DC GROUND.

Figure 2. Pin Configuration

## Table 6. Pin Function Descriptions

| Pin No.   | Mnemonic      | Description                                                                                                                                                                                                                                                                                                                                                                                              |
|-----------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1         | RFIN/V GG 1   | RF Input/Gate Bias for Alternate Circuit for the Input Stage. This is a multifunction pin where theV GG 1 function is used in the alternate circuit only for biasing (see Figure 23 and Figure 25 for the alternate applications circuit and alternate assembly drawings, respectively). This pin is dc-coupled and requires a dc block. See Figure 3 for the interface schematic.                       |
| 2, 4      | V GG 1,V GG 2 | Gate Control for Amplifier. For more information about assembly and required assembly components, see Figure 24. See Figure 4 for the interface schematic.                                                                                                                                                                                                                                               |
| 3         | RFOUT/V DD    | RF Output/DC Bias for Alternate Application Circuit for the Output Stage. This is a multifunction pin where the V DD function is used in the alternate application circuit only for biasing (see Figure 23 and Figure 25 for the alternate applications circuit and alternate assembly diagram, respectively). This pin is dc-coupled and requires a dc block. See Figure 5 for the interface schematic. |
| 5         | V DD          | Supply Voltage for Application Circuit. See Figure 22 and Figure 24 for the external components. See Figure 6 for the interface schematic.                                                                                                                                                                                                                                                               |
|           | GND           | Die Bottom (Ground).The die bottom must be connected to RF/dc ground. See Figure 7 for the interface schematic.                                                                                                                                                                                                                                                                                          |

13476-002

## INTERFACE SCHEMATICS

<!-- image -->

Figure 3. RFIN/VGG1 Interface

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

13476-008

<!-- image -->

Figure 8. Gain and Return Loss

<!-- image -->

Figure 9. Input Return Loss at Various Temperatures

<!-- image -->

Figure 10. P1dB vs. Frequency at Various Temperatures

<!-- image -->

Figure 11. Gain vs. Frequency at Various Temperatures

Figure 12. Output Return Loss at Various Temperatures

<!-- image -->

Figure 13. PSAT vs. Frequency at Various Temperatures

<!-- image -->

## Data Sheet

<!-- image -->

Figure 14. Noise Figure

<!-- image -->

Figure 15. Reverse Isolation vs. Frequency at Various Temperatures

<!-- image -->

Figure 16. Second-Order Harmonic vs. vs. Frequency at Various Temperatures, POUT = 2 dBm

Figure 17. Output IP3 vs. Frequency at Various Temperatures, POUT = 0 dBm per Tone

<!-- image -->

Figure 18. Power Dissipation at 85°C

<!-- image -->

Figure 19. Second-Order Harmonic vs. Frequency at Various Supplies (VDD), POUT = 2 dBm

<!-- image -->

Figure 20. Second-Order Harmonic vs. Frequency at Various POUT Levels

<!-- image -->

## THEORY OF OPERATION

HMC-AUH312 is a GaAs MMIC HEMT cascode distributed, low noise, wideband amplifier. The cascode distributed amplifier uses a fundamental cell of two field effect transistors (FETs) in series, source to drain. This fundamental cell then duplicates a number of times.

The major benefit of this architecture is an increase in the operation bandwidth. The basic schematic for a fundamental cell is shown in Figure 21, which shows the RFIN and RFOUT functions of the RFIN/VGG1 and RFOUT/VDD pins.

## HMC-AUH312

Figure 21. Fundamental Cell Schematic

<!-- image -->

To obtain the best performance from the HMC-AUH312 and not damage the device, follow the recommended biasing sequence outlined in the Device Operation section.

## APPLICATIONS INFORMATION

## APPLICATIONS OVERVIEW

The HMC-AUH312 has single-ended input and output ports whose impedances are nominally equal to 50 Ω over the frequency range 0.5 GHz to 80 GHz. Consequently, it can be directly inserted into a 50 Ω system with no impedance matching circuitry required. This means that multiple numbers of HMC-AUH312 amplifiers can be cascaded back to back without the need for external matching circuitry.

Because the input and output impedances are sufficiently stable vs. variations in temperature and supply voltage, no impedance matching compensation is required.

The HMC-AUH312 is a wideband amplifier with a positive gain slope with increasing frequency, which helps users to compensate for the typical higher frequency loss introduced by several system components.

There are two methods for biasing the device. The typical biasing technique is shown by the circuit diagram in Figure 22 and the assembly diagram shown in Figure 24. This technique uses only the RFIN and RFOUT functions of the RFIN/VGG1 and RFOUT/VDD pins.

It is critical to supply very low inductance ground connections to the ground pins as well as to the die bottom. These connections ensure stable operation.

The alternate biasing technique is represented by the circuit shown in Figure 23 and the assembly shown in Figure 25, which include the use of the VGG1 and VDD functions of the RFIN/VGG1 and RFOUT/VDD pins.

13476-021

Figure 22. Applications Circuit

<!-- image -->

Figure 23. Suggested Alternate Applications Circuit

<!-- image -->

Figure 25. Suggested Alternate Assembly Diagram

<!-- image -->

13476-024

## DEVICE MOUNTING

The following are best practice layout practices:

- 1 mil wire bonds are used on the VGG1 and VGG2 connections to the capacitors.
- 0.5 mil × 3 mil round wire bonds are used on all other connections.
- Capacitors on VGG1 and VGG2 are used to filter the low frequency, &lt;800 MHz, RF noise.
- For best gain flatness and group delay variation, place the capacitors from VDD, VGG1, and VGG2 as close to the die as possible to minimize bond wire parasitics. VDD is especially sensitive to bond parasitics.
- Silver-filled conductive epoxy is used for die attachment. (Ground the backside of the die and connect the GND pads to the backside metal through vias.)

## DEVICE OPERATION

These devices are susceptible to damage from electrostatic discharge. Observe proper precautions during handling, assembly, and test. In addition, dc block the input and output to this device.

## Device Power-Up Instructions

Use the following steps to power up the device:

1. Ground the device.
2. Bring VGG1 to -2 V to pinch off the drain current.
3. Turn on VDD to 0 V. Bring VDD to 8 V; 6 V is the minimum recommended VDD (5 V if a bias tee is used for VD bias).
4. Turn on VGG2 to 1.8 V (no drain current).
5. Adjust VGG1 to achieve a target bias of 60 mA.
6. Apply the RF signal.

## Device Power-Down Instructions

To power down the device, reverse the sequence identified in Step 1 through Step 6 in the Device Power-Up Instructions.

Bias conditions provided in the Device Power-Up Instructions are the operating points recommended to optimize the overall performance.

Unless otherwise noted, the data shown in the Specifications section were taken using the recommended bias conditions (see Table 4). Operation of the HMC-AUH312 at different bias conditions may result in performance that differs from that shown in the Specifications section (Table 1 through Table 3) and the Typical Performance Characteristics section (Figure 8 through Figure 20). Typically, output power levels and linearity can be improved at the expense of power consumption.

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETERWAVE GaAs MMICS

## HANDLING GUIDELINES FOR ESD PROTECTION OF GaAs MMICS

All electrical components are sensitive to some degree to electrostatic discharge (ESD), and GaAs MMICs are no exception. Many digital semiconductions have some level of protection circuitry designed into the input and output pins. However, GaAs MMIC designs rarely include built-in protection circuitry because of RF performance issues. Specifically, protection circuits add reactive parasitics that limit high frequency performance.

Circuitry on GaAS MMICs can be damaged by ESD at voltages below 250 V. In some cases, this classifies these devices as Class 0, meaning that stringent levels of ESD protection must be observed.

Electrostatic charges are created by the contact and separation of two objects. The magnitude of this charge buildup varies within different materials. Conductive and static dissipative materials release this charge quite easily to a grounded surface. Insulators retain the charge for a longer period of time.

To protect static sensitive devices from an electrostatic discharge, the devices must be completely enclosed with protective conductive packaging. This shielding protects the devices inside by causing any static discharge to follow the shortest conductive path to ground. Prior to opening the protective packaging, the device must be placed on a conductive workbench to dissipate any charge that has built up on the outside of the package.

When the device is removed from its protective package, it must be handled only at a grounded workstation by an operator grounded through a conductive wrist strap. Equipment used in the manufacture, assembly, and test of GaAs MMIC devices must also be properly grounded.

Antistatic or dissipative tubes and pink poly bags provide no ESD protection to the device. The antistatic or dissipative name only implies that it does not create an ESD hazard.

The only proper protection is to completely enclose the device in a conductive static shield; that is, a silver colored bag, black conductive tote box, and/or conductive carrier tape.

For additional information on proper ESD handling, consult the Electrostatic Discharge Association Advisory ESD-ADV-2.01994 or MIL-STD-1686. Information contained in this section of the data sheet was obtained from the ESD Association Advisory (Reference) AS-9100.

## HANDLING PRECAUTIONS

Take the following precautions to avoid permanent damage to the device.

## Opening the Protective Packaging

Prior to opening the protective packaging, the device must be placed on a conductive workbench to dissipate any charge that has built up on the outside of the package.

## Storage

All bare die are placed in either waffle or gel-based ESD protective containers and sealed in an ESD protective bag for shipment. Immediately upon opening the sealed ESD protective bag, store all die in a dry nitrogen environment.

## Cleanliness

Handle the chips in a clean environment. Do not attempt to clean the chip using liquid cleaning systems.

## Static Sensitivity

Follow ESD precautions to protect against ESD strikes. Handle the device at a grounded workstation only by an operator that is also grounded through a conductive wrist strap. Equipment used in the manufacture, assembly, and test of GaAs MMIC devices must also be properly grounded.

## Transients

Suppress instrument and bias supply transients during bias application. To minimize inductive pickup, use shielded signal and bias cables.

## General Handling

Handle the chip on the edges only using a vacuum collet or a sharp pair of bent tweezers. Because the surface of the chip may have fragile air bridges, do not touch the chip surface with a vacuum collet, tweezers, or fingers.

## HMC-AUH312

## MOUNTING TECHNIQUES

Attach the die directly to the ground plane eutectically or with conductive epoxy.

Using 50 Ω microstrip transmission lines on 0.127 mm (5 mil) thick alumina thin film substrates is recommended for bringing the RF to and from the chip (see Figure 26). If 0.254 mm (10 mil) thick alumina thin film substrates must be used, raise the die 0.150 mm (6 mils) so that the surface of the die is coplanar with the surface of the substrate. One way to accomplish this is to attach the 0.100 mm (4 mil) thick die to a 0.150 mm (6 mil) thick molybdenum heat spreader (moly tab), which is then attached to the ground plane (see Figure 27).

To minimize bond wire length, place microstrip substrates as close to the die as possible. Typical die to substrate spacing is 0.076 mm to 0.152 mm (3 mil to 6 mil).

Figure 26. Routing RF Signals

<!-- image -->

## Data Sheet

Figure 27. Routing RF Signals Using Molly Tab

<!-- image -->

The chip is back-metallized and can be die mounted with AuSn eutectic preforms or with electrically conductive epoxy. Ensure that the mounting surface is clean and flat.

## Eutectic Die Attach

An 80% gold/20% tin preform is recommended with a work surface temperature of 255°C and a tool temperature of 265°C. When hot 90% nitrogen/10% hydrogen gas is applied, make sure that the tool tip temperature is 290°C. Do not expose the chip to a temperature greater than 320°C for more than 20 sec. No more than 3 sec of scrubbing is required for attachment.

## Epoxy Die Attach

Apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip when it is placed into position. Cure the epoxy per the schedule provided by the manufacturer.

## WIRE BONDING

RF bonds made with two 1 mil wires are recommended. These bonds must be thermosonically bonded with a force of 40 g to 60 g. Use of dc bonds of 0.001 inch (0.025 mm) diameter, thermosonically bonded, are recommended. Create ball bonds with a force of 40 g to 50 g and wedge bonds at 18 g to 22 g.

Create all bonds with a nominal stage temperature of 150°C. Apply a minimum amount of ultrasonic energy to achieve reliable bonds. Keep all bonds as short as possible, less than 12 mil (0.31 mm).

## OUTLINE DIMENSIONS

Figure 28. 5-Pad Bare Die [CHIP] (C-5-5)

<!-- image -->

Dimensions shown in millimeters

| Model         | Temperature Range   | Package Description   | Package Option   |
|---------------|---------------------|-----------------------|------------------|
| HMC-AUH312    | -55°C to +85°C      | 5-Pad Bare Die [CHIP] | C-5-5            |
| HMC-AUH312-SX | -55°C to +85°C      | 5-Pad Bare Die [CHIP] | C-5-5            |

<!-- image -->

## ORDERING GUIDE