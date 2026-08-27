<!-- lastmod 2019-02-14 -->
<!-- image -->

Data Sheet

## FEATURES

Amplitude settling time: 200 ns Wideband rejection: ≥35 dB Single-chip replacement for mechanically tuned designs RoHS compliant, 32-lead, 5 mm × 5 mm LFCSP package

## APPLICATIONS

Testing and measurement equipment Military radar and electronic warfare/electronic counter measures (ECMs) Satellite communication and space Industrial and medical equipment

## GENERAL DESCRIPTION

The HMC882A is a monolithic microwave integrated circuit (MMIC) low-pass filter that features a user-selectable cutoff frequency (f3dB). The cutoff frequency can be varied from 3.95 GHz to 6.9 GHz by applying a single analog tuning voltage between 0 V and 14 V. This low-pass filter provides a low 3 dB insertion loss, 13 dB return loss, and &gt;20 dB stopband attenuation at 1.28 × f3dB GHz. This tunable filter can be used as a much

## 3.95 GHz to 6.9 GHz Tunable Low-Pass Filter

## ,

[HMC882A](https://www.analog.com/HMC882A?doc=HMC882A.pdf)

## FUNCTIONAL BLOCKDIAGRAM

<!-- image -->

smaller alternative to physically large switched filter banks and cavity tuned filters. The HMC882A has excellent microphonics due to the monolithic design and low residual phase noise of -165 dBc/Hz, and provides a dynamically adjustable solution in advanced communications applications. The low-pass tunable filter is packaged in a RoHS compliant, 5 mm × 5mm LFCSP package.

<!-- image -->

## [HMC882A](https://www.analog.com/HMC882A?doc=HMC882A.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1       |
| Functional BlockDiagram ............................................................... 1                   |
| General Description......................................................................... 1              |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| Absolute Maximum Ratings............................................................ 4                      |
| ESD Caution.................................................................................. 4             |
| Pin Configuration and Function Descriptions............................. 5                                  |

## REVISION HISTORY

2/2019-Revision 0: Initial Version

| Typical Performance Characteristics ..............................................6            |
|------------------------------------------------------------------------------------------------|
| Theory of Operation .........................................................................9 |
| Applications Information.............................................................. 10      |
| Typical Application Circuit....................................................... 10          |
| Evaluation Printed Circuit Board (PCB)................................. 10                     |
| Outline Dimensions....................................................................... 11   |
| Ordering Guide .......................................................................... 11   |

## SPECIFICATIONS

TA = 25°C, with cutoff frequency control voltage (VFCTL) varying from 0 V to 14 V , unless otherwise noted.

## Table 1.

| Parameter                                  |   Min | Typ          | Max   | Unit   | Test Conditions/Comments                                                          |
|--------------------------------------------|-------|--------------|-------|--------|-----------------------------------------------------------------------------------|
| FREQUENCY RANGE                            |       |              |       |        |                                                                                   |
| Passband                                   |     0 |              | 6.9   | GHz    |                                                                                   |
| Cutoff Frequency (f 3dB )                  |  3.95 |              | 6.9   | GHz    |                                                                                   |
| REJECTION                                  |       |              |       |        |                                                                                   |
| Stopband Frequency                         |       | 1.28 × f 3dB |       | GHz    | ≥20 dB                                                                            |
| Re-Entry Frequency                         |       | ≥30          |       | GHz    | ≥35 dB wideband rejection                                                         |
| LOSS                                       |       |              |       |        |                                                                                   |
| Insertion Loss                             |       | 3            |       | dB     |                                                                                   |
| Return Loss                                |       | 13           |       | dB     |                                                                                   |
| DYNAMIC PERFORMANCE                        |       |              |       |        |                                                                                   |
| Maximum Input Power for Linear Operation   |       |              | 10    | dBm    |                                                                                   |
| Input Third-Order Intercept                |       | 41           |       | dBm    | Input power (P IN ) = 20 dBm, two-tone                                            |
| Group Delay                                |       | 0.4          |       | ns     |                                                                                   |
| Amplitude Settling                         |       | 200          |       | ns     | Time to settle to minimum insertion loss, within ≤0.5 dB of static insertion loss |
| Drift Rate                                 |       | 0.3          |       | MHz/°C |                                                                                   |
| RESIDUAL PHASE NOISE 1MHzOffset            |       | -165         |       | dBc/Hz |                                                                                   |
| TUNING                                     |       |              |       |        |                                                                                   |
| Voltage (V FCTL )                          |     0 |              | 14    | V      |                                                                                   |
| Cutoff Frequency Control Current (I FCTL ) |       |              | ±1    | µA     | Rated current for pin                                                             |

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                                                           | Rating          |
|-------------------------------------------------------------------------------------|-----------------|
| Tuning                                                                              |                 |
| Voltage (V FCTL )                                                                   | -0.5V to +15V   |
| Current (I FCTL )                                                                   | ±1mA            |
| RF Input Power                                                                      | 27dBm           |
| Temperature                                                                         |                 |
| Operating Temperature Range                                                         | -40°C to +85°C  |
| Storage Temperature Range                                                           | -65°C to +150°C |
| Junction Temperature for 1 Million Mean Time to Failure (MTTF)                      | 175°C           |
| Nominal Junction Temperature (Exposed PadTemperature, T EPAD = 85°C, P IN = 10 dBm) | 90              |
| Electrostatic Discharge (ESD) Rating                                                |                 |
| Human Body Model (HBM)                                                              | 1000V           |
| Field Induced Charge Device Model (FICDM)                                           | 1250V           |
| Moisture Sensitivity Level (MSL) Rating                                             | MSL3            |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

## NIC NIC NIC NIC NIC NIC NIC NIC

## 32 31 30 29 28 27 26 25

<!-- image -->

## Table 3. Pin Function Descriptions

## NOTES

1. NIC = NOT INTERNALLY CONNECTED. ALL DATA SHOWN HEREIN WAS MEASURED WITH THESE PINS CONNECTED TO RF AND DC GROUND EXTERNALLY.
2. EXPOSED PAD. THE PACKAGE BOTTOM HAS AN EXPOSED PAD THAT MUST BE CONNECTED TO RF AND DC GROUND.

Figure 2. Pin Configuration

| Pin No.                        | Mnemonic   | Description                                                                                                                                                     |
|--------------------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1to 4, 7to 13,15to 18, 21to 32 | NIC        | Not Internally Connected. These pins are not connected internally. All data shown herein was measured with these pins connected to RF and dc ground externally. |
| 5, 20                          | GND        | Ground. Connect these pins to RF and dc ground.                                                                                                                 |
| 6                              | RFIN       | Radio Frequency Input. This pin is dc-coupled and matched to 50 Ω. Do not apply an external voltage to this pin.                                                |
| 14                             | V FCTL     | Cutoff Frequency Control Voltage. This pin controls the cutoff frequency of the device.                                                                         |
| 19                             | RFOUT      | Radio Frequency Output. This pin is dc-coupled and matched at 50 Ω. Do not apply an external voltage to this pin.                                               |
|                                | EPAD       | Exposed Pad. The package bottom has an exposed metal pad that must be connected to RF and dc ground.                                                            |

<!-- image -->

Figure 3. GND Interface Schematic

<!-- image -->

Figure 4. RFIN Interface Schematic

Figure 5. VFCTL Interface Schematic

<!-- image -->

Figure 6. RFOUT Interface Schematic

<!-- image -->

17300-002

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 7. Insertion Loss vs. Broadband Frequency at Various VFCTL Voltages

<!-- image -->

17300-008

<!-- image -->

Figure 8. Insertion Loss vs. RF Frequency at Various VFCTL Voltages

Figure 9. Insertion Loss vs. RF Frequency at Various Temperatures, VFCTL = 7 V

<!-- image -->

Figure 10. Return Loss vs. Broadband Frequency at Various VFCTL Voltages

<!-- image -->

17300-011

Figure 11. Return Loss vs. RF Frequency at Various VFCTL Voltages

<!-- image -->

Figure 12. Return Loss vs. RF Frequency at Various Temperatures, VFCTL = 7 V

<!-- image -->

<!-- image -->

Figure 13. Cutoff Frequency (f3dB) vs. VFCTL at Various Temperatures

<!-- image -->

Figure 14. Rejection Ratio vs. VFCTL at Various Temperatures; Rejection Ratio Is the Ratio of the Frequency of Which the Relative Insertion Loss Is 20 dB to f3dB

Figure 15. Insertion Loss vs. VFCTL at Various Temperatures

<!-- image -->

<!-- image -->

Figure 16. Return Loss vs. VFCTL at Various Temperatures, 2 dB Bandwidth

<!-- image -->

17300-017

Figure 17. Tuning Sensitivity vs. VFCTL at Various Temperatures

<!-- image -->

17300-018

Figure 18. Residual Phase Noise vs. Offset Frequency at Various VFCTL Voltages

<!-- image -->

<!-- image -->

Figure 19. Group Delay vs. RF Frequency at Various VFCTL Voltages

<!-- image -->

Figure 20. Input IP3 vs. VFCTL at Various Temperatures, PIN = 20 dBm

<!-- image -->

17300-021

Figure 21. Phase Shift vs. Input Power (PIN) at Various VFCTL Voltages

<!-- image -->

## THEORY OF OPERATION

The HMC882A is a MMIC low-pass filter that features a userselectable pass band frequency. Varying the applied analog tuning voltage between 0 V and 14 V at VFCTL varies the f3dB frequency between 3.95 GHz and 6.9 GHz.

## APPLICATIONS INFORMATION TYPICAL APPLICATION CIRCUIT

Figure 22 shows the typical application circuit for the HMC882A. The RFIN and RFOUT pins are dc-coupled and require external, 100 pF series capacitors (C1 and C2).

Figure 22. Typical Application Circuit

<!-- image -->

## EVALUATION PRINTED CIRCUIT BOARD (PCB)

All RF traces are routed on Layer 1 (primary side) and the remaining three layers are ground planes that provide a solid ground for RF transmission lines, as shown in Figure 23. The top dielectric material is Rogers 4350, which offers low loss performance. The prepreg material in Layer 2 attaches the Isola 370HR core layer with copper traces layers above and below the core layer. Both the prepreg material and the Isola 370HR core layer are used to achieve the required board finish thickness.

Figure 23. Cross Sectional View of the EV1HMC882ALP5 PCB Layers

<!-- image -->

The PCB in this application uses RF circuit design techniques. Signal lines must have 50 Ω impedance and the package ground leads and exposed pad must be connected directly to the ground plane (see Figure 23). Use a sufficient number of via holes to connect the top and bottom ground planes. The evaluation PCB shown in Figure 24 is available from Analog Devices, Inc., upon request.

## Table 4. Bill of Materials for the EV1HMC882ALP5

| Item     | Description                                          |
|----------|------------------------------------------------------|
| J1 to J2 | PCB mount SRI Subminiature Version A (SMA) connector |
| J3 to J4 | PCB mount Johnson SMAconnector                       |
| C1, C2   | Capacitor, 100 pF, 0402                              |
| U1       | HMC882A                                              |
| PCB 1    | 08-049598 2 evaluation PCB                           |

- 1 Circuit board material is Arlon 25FR or Rogers 25FR.
- 2  08-049598 is the raw, bare PCB identifier. Reference the EV1HMC882ALP5 when ordering the complete evaluation PCB.

Figure 24. Evaluation PCB Top Layer Outline Dimensions

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

DETAIL A

COMPLIANT TO JEDEC STANDARDS MO-220-WHHD-5

Figure 25. 32-Lead Lead Frame Chip Scale Package [LFCSP] 5 mm × 5 mm Body and 0.75 mm Package Height (CP-32-12)

Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1       | Temperature Range   | Package Description                           | Package Option   |
|---------------|---------------------|-----------------------------------------------|------------------|
| HMC882ALP5E   | -40°C to +85°C      | 32-Lead Lead Frame Chip Scale Package [LFCSP] | CP-32-12         |
| HMC882ALP5ETR | -40°C to +85°C      | 32-Lead Lead Frame Chip Scale Package [LFCSP] | CP-32-12         |
| EV1HMC882ALP5 |                     | Evaluation PCB                                |                  |

PKG-004570

<!-- image -->

09-12-2018-C

<!-- image -->