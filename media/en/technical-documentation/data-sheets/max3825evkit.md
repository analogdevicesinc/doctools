<!-- lastmod 2022-08-02 -->
## General Description

The MAX3825 evaluation kit (EV kit) simplifies the evaluation of the MAX3825 quad transimpedance amplifier.

The EV kit includes a circuit that emulates the high-speed current input signal produced by a photodiode array.

The MAX3825 EV kit is fully assembled and tested.

## Component List

| DESIGNATION                        | QTY   | DESCRIPTION                                                      |
|------------------------------------|-------|------------------------------------------------------------------|
| C2, C5, C8, C11, C17-C24, C26, C27 | 14    | 0.1 µ F ± 10% ceramic capacitors (0402) Murata GRM36X7R104K010A  |
| C3, C6, C9, C12-C16, C28           | 9     | 0.01 µ F ± 10% ceramic capacitors (0402) Murata GRM36X7R103K016A |
| C25                                | 1     | 10 µ F ± 10% tantalum capacitor AVX TAJC106K016                  |
| R1, R5, R9, R13, R18               | 5     | 681 Ω ± 1% resistors (0402)                                      |
| R2, R6, R10, R14, R19              | 5     | 221 Ω ± 1% resistors (0402)                                      |
| R3, R7, R11, R15, R20              | 5     | 4.99k Ω ± 1% resistors (0402)                                    |
| R4, R8, R12, R16, R21              | 5     | 53.6 Ω ± 1% resistors (0402)                                     |
| R17                                | 0     | Not installed                                                    |
| L1                                 | 1     | 56nH inductor Coilcraft 0805HT-56NTKBC                           |
| J1-J4, J15                         | 5     | SMA connectors (PC-mount)                                        |
| J5-J12, J16                        | 9     | SMA connectors (edge-mount)                                      |
| TP1-TP4, J13, J14                  | 6     | Test points                                                      |
| U1                                 | 1     | MAX3825U/D die                                                   |
| None                               | 1     | MAX3825 Rev C EV kit circuit                                     |
| None                               | 1     | MAX3825 EV kit data sheet                                        |
| None                               | 1     | MAX3825 data sheet                                               |
| None                               | -     | 1mil Au wire for bond pad wiring                                 |
| None                               | -     | Conductive epoxy                                                 |

<!-- image -->

Features

- ♦ Fully Assembled and Tested
- ♦ Includes Photodiode Emulation Circuit

## Ordering Information

| PART         | TEMP. RANGE      | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX3825EVKIT | 0 ° C to +85 ° C | Dice         |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-946-0238 | 843-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 770-436-1300 | 770-436-3020 |

Note: Please indicate that you are using the MAX3825 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX3825 Evaluation Kit

## Quick Start

- 1) Connect a signal source to the input of channel 1, J1.  Set  the  signal  amplitude  to  50mVp-p (this may require some attenuation between the source and the MAX3825 EV kit). The signal should have a data rate of 2.488Gbps.
- 2) Connect the differential CML outputs of channel 1, J11 and J12, to the 50 Ω inputs of a high-speed oscilloscope.
- 3) Connect a +3.3V supply to the VCC terminal and ground to the GND terminal.
- 4) The differential signal at the oscilloscope should be between 150mVp-p and 250mVp-p.

## Detailed Description

The MAX3825 EV kit evaluates a MAX3825 quad transimpedance amplifier (TIA) DC-coupled to a high-speed photodiode array with an input current of 10µAp-p to 2mAp-p. This EV kit allows characterization without using a photodiode array by providing a simple circuit that emulates the array's photocurrent using standard 50 Ω test equipment.

Each channel's input transmission line is terminated with 50 Ω to ground and AC-coupled into a resistive network. The TIA's AC input current component is found by dividing the input signal by a voltage-to-current converting 902 Ω series resistance. The DC bias current component is adjusted by a separate DC reference (applied to TPn (n = 1, 2, 3, 4) used to set the extinction ratio of a channel's input signal.

The values of the series resistive elements R1, R2, R5, R6, R9, R10, R13, and R14 have been carefully selected not to change the bandwidth of the transimpedance amplifier. Surface-mount resistors may have parasitic capacitance that reduces their impedance at frequencies above 1GHz. The user should carefully evaluate any changes to input series resistors using the calibration network provided on the EV kit.

## Table 1. Connections and Adjustments

| CONNECTION   | DESCRIPTION                                                                                |
|--------------|--------------------------------------------------------------------------------------------|
| J1-J4        | Inputs (IN1, IN2, IN3, IN4)                                                                |
| J5-J12       | 50 Ω CML outputs from the MAX3825 (OUT4+, OUT4-, OUT3+, OUT3-, OUT2+, OUT2-, OUT1+, OUT1-) |
| VCC (J13)    | Power-supply connection pin. Connect a +3.3V power supply.                                 |
| GND (J14)    | Ground                                                                                     |
| J15          | Calibration strip input                                                                    |
| J16          | Calibration strip output                                                                   |
| TP1-TP4      | Input bias current voltage supply (IN1, IN2, IN3, IN4)                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Photodiode Emulation

The following procedure can be used to estimate the high-speed current signal generated by a photodiode:

- 1) Select the desired optical power (PAVE in dBm) and extinction ratio (re).
- 2) Calculate the average current (IAVE in A), and adjust a DC reference in series with an ammeter connected to TPn (n = 1, 2, 3, 4) until the proper bias current is obtained:

<!-- formula-not-decoded -->

( ρ = photodiode responsivity in A/W)

Calculate the AC signal current amplitude, and adjust the signal generator to obtain it.

<!-- formula-not-decoded -->

For example:

- 1) Emulate a signal with an average power of -13dBm and an extinction ratio of 10 on channel 1.
- 2) -13dBm optical power will produce 50µA of average input current (assume photodiode responsivity ρ = 1A/W). Connect a power supply in series with an ammeter to TP1. Adjust the power supply until the ammeter reads 50µA.
- 3) The signal amplitude is 2 ✕ IAVE(re -  1)/(re + 1) = 82µAp-p. To generate this current through the 902 Ω input resistors, set the signal source to produce an output level of 82µA ✕ 902 Ω = 74mVp-p.

## MAX3825 Evaluation Kit

<!-- image -->

Figure 1. MAX3825 Evaluation Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3825 Evaluation Kit

Figure 2. MAX3825 Evaluation Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3825 Evaluation Kit

<!-- image -->

Figure 3. MAX3825 Evaluation Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3825 Evaluation Kit

Figure 4. MAX3825 Evaluation Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3825 Evaluation Kit

<!-- image -->

Figure 5. MAX3825 Evaluation Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3825 Evaluation Kit

Figure 6. MAX3825 Evaluation Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8