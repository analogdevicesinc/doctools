<!-- lastmod 2022-08-02 -->
## General Description

The MAX3271 evaluation kit (EV kit) allows complete evaluation of the MAX3271 transimpedance amplifier. The EV kit includes a circuit that emulates the highspeed, zero-to-peak current input signal that would be produced by a photodiode. The kit also includes a calibration circuit that allows accurate bandwidth measurement. The MAX3271 EV kit is fully assembled and tested.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-444-2863 | 843-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 415-964-6321 | 415-964-8165 |

Note: Please indicate that you are using the MAX3271 when contacting these component suppliers.

| DESIGNATION    |   QTY | DESCRIPTION                                                                                     |
|----------------|-------|-------------------------------------------------------------------------------------------------|
| C1, C5, C6, C8 |     4 | 0.01µF ± 10% ceramic capacitors (0402) Murata GRM36X7R103K016A                                  |
| C2-C4, C9, C10 |     5 | 0.1µF ± 10% ceramic capacitors (0402) Murata GRM36X5R104K010AD                                  |
| C7             |     1 | 10µF ± 10% tantalum capacitor AVX TAJC106K010R                                                  |
| C11            |     1 | 100pF ± 10% ceramic capacitor (0402) Murata GRM36X7R102K050AD                                   |
| J1-J3, J6, J7  |     5 | SMA connectors (edge-mount, round contact) Note: Cut center pin to approximately 1/16in length. |
| JU1            |     1 | 1 × 2-pin header (0.1in centers)                                                                |
| L1             |     1 | 56nH inductor Coilcraft 0805HS-560XKBC                                                          |
| L2, L3         |     2 | 0 Ω resistors                                                                                   |

<!-- image -->

## Features

- ♦ Fully Assembled and Tested
- ♦ Includes Photodiode Emulation Circuit
- ♦ Calibration Circuit for Accurate Bandwidth Measurement

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE    |
|--------------|----------------|---------------|
| MAX3271EVKIT | -40°C to +85°C | Chip-On-Board |

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                                             |
|--------------------------|-------|---------------------------------------------------------|
| R1A, R1B, R5A, R5B       |     4 | 499 Ω ± 1% resistors (0402)                             |
| R3, R7                   |     2 | 4.99k Ω ± 1% resistors (0402)                           |
| R4, R8                   |     2 | 49.9 Ω ± 1% resistors (0402)                            |
| TP1, J4, J5              |     3 | Test points Digi-Key 5000K-ND                           |
| U1                       |     1 | MAX3271E/D die                                          |
| Outside Vendor to Supply |     0 | 1mil Au wire (8 bonds) American Fine Wire EL4-7 TS8 AW8 |
| Outside Vendor to Supply |     0 | Epoxy, Ablefilm 84-1 LMI                                |
| None                     |     1 | MAX3271 EV kit circuit board                            |
| None                     |     1 | MAX3271 data sheet                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX3271 Evaluation Kit

## Quick Start

- 1) Connect a signal source to IN (J1). Set the signal amplitude to 40mVp-p (this may require some attenuation between the source and the MAX3271 EV kit.) The signal should have a data rate of 2.5Gbps.
- 2) Connect OUT+ and OUT- to the 50 Ω inputs of a high-speed oscilloscope at J2 and J3.
- 3) Remove the shunt from jumper JU1.
- 4) Connect a +3.3V supply to the VCC terminal and ground to the GND terminal.
- 5) The differential signal at the oscilloscope should be between 75mVp-p and 150mVp-p.

## Detailed Description

The MAX3271 EV kit allows characterization without a photodiode. The MAX3271 is designed to accept a DCcoupled input from a high-speed photodiode. Diode currents may have 20µAp-p to 2mAp-p AC current with a DC component from 10µA to 1mA. The high-speed current source of the photodiode is emulated on the EV kit using separate AC and DC paths. The AC signal is supplied from a standard 50 Ω lab source that delivers power to an onboard termination resistor. A current is then generated from the voltage signal by a resistor with low stray capacitance. The effect of the DC photodiode current may be emulated by a current source at TP1. An isolation resistor prevents the DC source from loading the AC path.

The values of the series resistive elements, R1A and R1B, have been carefully selected so that the bandwidth of the transimpedance amplifier is not altered. Surface-mount resistors have parasitic capacitance that reduces their impedance at frequencies above 1GHz. Changes to R1A and R1B must be evaluated using the calibration network.

## Photodiode Emulation

The following procedure can be used to emulate the high-speed current signal generated by a photodiode:

- 1) Select the desired optical power (PAVE, dBm) and extinction ratio (re).
- 2) Calculate the average current (IAVE, A). Set the DC current at TP1 to IAVE.

<!-- formula-not-decoded -->

( ρ = photodiode responsivity in A/W)

- 3) Calculate the AC signal current and adjust the signal generator to obtain it.

<!-- formula-not-decoded -->

For example, to emulate a photodiode with an average power of -16dBm and an extinction ratio of 10:

- 1) -16dBm optical power will produce 25µA of average input current (assume photodiode responsivity of 1A/W). Set the DC current input to 25µA at TP1.
- 2) The signal amplitude is 2 IAVE (re-1)/(re+1) = 41µA. To generate this current through the 1000 Ω input resistors, set the signal source to produce an output level of 41µA ✕ 1000 Ω = 41mVp-p.

## Noise Measurement

Remove R1A and R1B before attempting noise measurements to minimize input capacitance. With R1A and R1B removed, the total capacitance at the IN pin is approximately 0.85pF. Refer to the Layout Considerations section in the MAX3271 data sheet for more information.

## Adjustment and Control Descriptions (see Quick Start)

| COMPONENT   | NAME              | FUNCTION                                             |
|-------------|-------------------|------------------------------------------------------|
| JU1         | OFFSET CORRECTION | Install a shunt on JU1 to disable offset correction. |
| TP1         | DC CURRENT INPUT  | Apply DC current for photodiode emulation.           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3271 Evaluation Kit

Figure 1. MAX3271 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3271 Evaluation Kit

<!-- image -->

Figure 2. MAX3271 EV Kit Component Placement GuideComponent Side

Figure 3. MAX3271 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX3271 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 5. MAX3271 EV Kit PC Board Layout-Power Plane

<!-- image -->

## MAX3271 Evaluation Kit

Figure 6. MAX3271 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5