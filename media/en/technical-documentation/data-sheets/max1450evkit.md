<!-- lastmod 2022-08-03 -->
## General Description

The MAX1450 evaluation kit (EV kit) demonstrates silicon piezoresistive sensor calibration and temperature compensation using the MAX1450. The kit includes an assembled  and  tested  PC  board  with  a  Lucas NovaSensor ® pressure sensor calibrated at room temperature. It also supports several popular pressure-sensor packages. The board uses multiturn potentiometers and configuration switches to calibrate and temperature-compensate a sensor to 1% accuracy.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                                   |
|---------------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C1, C2, C3    |     3 | 0.1µF ceramic capacitors                                                                                                                                      |
| C4            |     1 | 0.01µF ceramic capacitor                                                                                                                                      |
| D1            |     1 | 6.2V, 500mW, surface-mount zener diode                                                                                                                        |
| JU1, JU2      |     0 | Open                                                                                                                                                          |
| P1, P2        |     2 | 4-pin headers                                                                                                                                                 |
| P3, P4        |     2 | 10-pin headers                                                                                                                                                |
| R1-R5         |     5 | 1M Ω ±5% resistors (1206)                                                                                                                                     |
| R6, R8-R11    |     0 | Open                                                                                                                                                          |
| SW1           |     1 | Five-position SPST dip switch                                                                                                                                 |
| S1            |     1 | Sensor site 1 Lucas NovaSensor NPH-8-100GH (TO-8, 100kPa gauge) Other possible sensors: Sentir AP-301 (modified TO-5) or IC sensors models 10/20/30/40 (TO-8) |
| S2            |     0 | Sensor site 2 Sensym SDX and ISO series, IC sensors LP series, or Lucas NovaSensor NPI series                                                                 |
| U1            |     1 | Maxim MAX1450CAP (20-pin SSOP)                                                                                                                                |
| VR1, VR2, VR3 |     3 | 50k Ω trim potentiometers                                                                                                                                     |
| VR4           |     1 | 500k Ω trim potentiometer (supplied but not mounted)                                                                                                          |
| VR5           |     1 | 100k Ω trim potentiometer                                                                                                                                     |
| None          |     1 | PC board                                                                                                                                                      |
| None          |     1 | MAX1450 EV kit data sheet                                                                                                                                     |
| None          |     1 | MAX1450 data sheet                                                                                                                                            |

NovaSensor is a registered trademark of Lucas Varity.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

- ♦ Proven PC Board Layout
- ♦ Convenient Test Points Provided On-Board
- ♦ Includes Calibrated (at room temperature) Lucas NovaSensor Pressure Sensor
- ♦ Fully Assembled and Tested
- ♦ Supports Many Popular Sensor Packages

## Ordering Information

| PART         | TEMP. RANGE     | IC PACKAGE   |
|--------------|-----------------|--------------|
| MAX1450EVKIT | -40°C to +125°C | 20 SSOP      |

## Quick Start

Use the quick-start procedure to evaluate initial factory calibration accuracy or to modify the calibration settings.  Before recalibrating the MAX1450, you should test  the  precalibrated  EV  board.  Supply power to the PC board and measure the output voltage as a function of pressure and temperature. As shipped from the factory,  the  EV  kit  has  been  calibrated  at  room  temperature but not compensated over temperature.

## Required Equipment

- Precision regulated power supply capable of providing +5.000V
- Multimeter with at least five significant digits
- 0-15psi gauge pneumatic pressure controller/calibrator

## Initial Setup

The four-pin sensor connector (P2) can be used to probe the four sensor nodes: sensor excitation (IN+), sensor ground (IN-), sensor positive output (OUT+), and sensor negative output (OUT-). This connector may also serve as a means of wiring to an alternate sensor. Connector P2 allows the user to supply power to the board, and to measure output voltage and sensor excitation voltage.

## Room Temperature Bench Test

The board's output is ratiometric to the supply; therefore, supply voltage must be set accurately to minimize measurement error.

Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## MAX1450 Evaluation Kit

Connect the negative power-supply terminal to the analog connector pin labeled VSS. Connect the positive power-supply terminal to the analog connector pin labeled VDD. Connect the DVM to the analog connector pin labeled VOUT; the ground return should be connected to the VSS pin.

IMPORTANT: To avoid problems with ground loops and noise, connect all equipment to the same AC circuit and use one common earth ground .  If  the  power  supply has a programmable current limit, set it to about 10mA. Adjust the supply voltage to +5.000V, measuring the voltage at test point VDD with respect to test point VSS. There should be no connection to the sensor pressure port. Since the sensor supplied is a gauge type, the output voltage at connector P2 should read approximately 0.5V.

## Room Temperature Pressure Test

Carefully remove the plastic sensor protector (if supplied) and connect a silicone pressure tube to the sensor pressure port. Grasp the sensor, not the PC board, while fitting the tube in place. Perform any required pressure controller initialization/calibration procedures, then vent the system. At 0psig, the output voltage should read between 0.49V and 0.51V. Perform a few pressure cycles (0-15psi with supplied sensor) to minimize hysteresis effects. Apply full-scale pressure and confirm that the output reads between 4.49V and 4.51V. Test at intermediate pressures to measure for pressure linearity errors.

## Detailed Description of Hardware

The MAX1450 EV kit performs analog calibration and temperature compensation of a silicon piezoresistive sensor. The board is shipped fully assembled and tested, with a calibrated Lucas Novasensor. Three sensor connection sites are provided: S1, S2, and P1. The board operates with a 5V nominal supply voltage. Since its output is ratiometric (proportional) to the supply voltage, it is critical to maintain a precise supply voltage during test.  The  nominal  calibrated  output  voltage  range  will be 0.5V (at minimum pressure) to 4.5V (at maximum pressure). Other output voltage ranges are also possible, within the common-mode output range of the MAX1450.

## Replacing the Sensor

The MAX1450 may be used to calibrate and temperature-compensate a wide variety of pressure sensor types; however, some sensors may require additional external circuitry. This EV kit is designed for bulk micromachined silicon piezoresistive pressure sensors. See Table 1. Connector P1 will accept any generic sensor configured as a four-wire closed Wheatstone bridge. It is most useful with sensors that require off-board mounting, such as those that have large threaded pressure ports.  This  connector may also be used as a sensor test point. Sensor sites S1 and S2 provide several overlapping footprints for popular metal, plastic, and ceramic sensors, which use a slip tube as a pressure port. See the Component List for  models that are accepted at these sites. Only one sensor may be installed at a time. Sensor sites S1 and S2 are not provided for accommodating differential pressure-sensing applications that require two pressure sensors.

## Power Requirements

The MAX1450 EV kit operates with a nominal supply voltage of +5V and requires about 5mA of supply current, i ncluding the sensor. The supply may vary between +4.5V and +5.5V, and a 6.2V zener diode has been added across the power-supply lines (VDD and VSS) to protect the MAX1450. Connector P2 is provided for connecting power, as well as for measuring the output voltage and sensor excitation voltage.

## Calibration and TemperatureCompensation Procedure

The MAX1450 EV kit can correct four common types of sensor errors: offset, full-span output (FSO), offset tempco, and FSO tempco. The user may choose which parameters to correct depending on the sensor behavior, operating temperature range, and desired accuracy. Sensor calibration corrects the offset and FSO errors at a single temperature. Temperature compensation, which is optional, minimizes offset and FSO error drifts with changes in temperature, and will require an environmental chamber. To correct offset and FSO errors over a range of temperatures, use the offset tempco (VR1, OFTC) and FSO tempco (VR4, FSOTC) potentiometers.

Since the PC board is not conformal coated, the environmental chamber must not allow condensation to take place. If condensation occurs, bake the PC board at +125°C (with no power applied) for a minimum of one hour. The circuit may behave erratically if moisture condenses on the PC board due to weak ionic paths affecting high-impedance nodes on the board. The electronics should be conformal coated in any application where moisture condensation may occur.

Put the board in an environmental chamber and test the board over any temperatures between -40°C and +125°C. First perform one or two full excursions of temperature and pressure to minimize hysteresis errors.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 1. Sensor Requirements for EV Kit

| PARAMETER            | VALUE                              | DESCRIPTION                                                                                                                                                          |
|----------------------|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bridge Resistance    | 5k Ω (typ)                         | Sensor input impedance at +25°C                                                                                                                                      |
| Resistance Tempco    | TCR > &#124; TCS &#124;            | The sensor input impedance tempco must exceed the absolute value of the sensor pressure- sensitivity tempco.                                                         |
| Pressure Sensitivity | ~10 to 30 mV/V/FSO                 | Differential output FSO, per volt of sensor excitation                                                                                                               |
| Sensitivity Tempco   | TCS < 0                            | The sensitivity tempco must be negative.                                                                                                                             |
| Sensor Offset        | &#124; V OFFSET &#124; < 100mV     | The sensor offset voltage (absolute value) at minimum gain must be less than about 100mV. At higher gains, the offset must be proportionately smaller.               |
| Offset Tempco        | &#124;OTC&#124;< &#124; TCS &#124; | The absolute value of the sensor offset tempco must be less than the absolute value of its sensitivity tempco, when both are expressed in terms of the sensor's FSO. |

Most of the error after compensation is due to sensor drift  and  nonrepeatable behavior. To understand the source of these errors, monitor the low-level sensor output using the P1 sensor connector to separate sensor errors  from  MAX1450 errors. To avoid attenuating the sensor output signal, take this measurement using a multimeter with an input impedance &gt;10M Ω .

## Required Equipment

- Precision regulated power supply capable of providing +5.000V
- Multimeter with at least five significant digits
- 0-15psi gauge pneumatic pressure controller/calibrator
- Dry air or nitrogen
- Noncondensing environmental chamber capable of handling -40°C to +125°C

## Initial Setup

Trim potentiometer VR4 (FSOTC) is required only when compensating over temperature. Installing VR4 may perturb previous calibration setpoints. Begin with the switches and potentiometers as shown in Table 2.

Connect the sensor to a pressure source and test for leaks. Connect the EV kit to a +5V power source. Since output voltage is ratiometric to the power supply, an accurate power-supply setting is required. If the power supply has a programmable current limit, set it to about 10mA. Current consumption should not exceed 5mA.

## Calibration Procedure

This procedure describes how to calibrate at a single temperature. The following example is designed to calibrate a sensor with a nominal output voltage of 0.5V at PMIN and an output voltage of 4.5V at PMAX; thus, the ideal FSO will be 4V.

## Choosing PGA Gain Setting

- 1) Set the temperature to T1 and allow sufficient soak time.
- 2) Confirm that the supply voltage is correct.
- 3) Set the pressure to PMIN.
- 4) Adjust VR3 (FSO trim) until VBDRIVE (Vbdr, BDRV) is approximately 2.0V.
- 5) Measure the differential sensor output (INP - INM).
- 6) Set the pressure to PMAX; remeasure (INP - INM).
- 7) Calculate the sensor FSO.
- 8) Divide the ideal FSO (4V) by the sensor FSO to calculate the ideal PGA gain required.
- 9) Choose the PGA gain setting that is closest to the calculated ideal gain.
- 10) Program the PGA gain chosen using the three programming switches (SW1-1, SW1-2, SW1-3).

## Example:

- 1) Set the temperature to T1 and allow it to soak.
- 2) Confirm the supply voltage.
- 3) Set the pressure to PMIN.
- 4) Adjust VR3 until VBDRIVE = 2.42V.
- 5) Measure (INP - INM) at PMIN to be -0.011V.
- 6) Measure (INP - INM) at PMAX to be 0.056V.
- 7) Calculate sensor FSO to be 0.067V.
- 8) Calculate the ideal gain to be 4 / 0.067 = 59.7V/V.
- 9) Determine the closest available gain setting to be 65 (PGA value is 1).
- 10) Set the PGA to 001 (binary), close SW1-1 (LSB), open SW1-2, and open SW1-3.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1450 Evaluation Kit

## MAX1450 Evaluation Kit

## Table 2. Initial Settings

| PARAMETER   | FUNCTION         | INITIAL SETTING                                          | DESCRIPTION                                                 |
|-------------|------------------|----------------------------------------------------------|-------------------------------------------------------------|
| SW1-1       | PGA LSB          | Off (open)                                               | Minimum gain                                                |
| SW1-2       | PGA NSB          | Off (open)                                               | Minimum gain                                                |
| SW1-3       | PGA MSB          | Off (open)                                               | Minimum gain                                                |
| SW1-4       | Offset Sign      | On (closed)                                              | Sign bit is set to positive.                                |
| SW1-5       | Offset TC Sign   | On (closed)                                              | Sign bit is set to positive.                                |
| VR1         | Offset TC Adjust | Fully CCW                                                | No offset TC correction is performed. V OFFSET , pin 9 = 0. |
| VR2         | Offset Adjust    | Fully CCW                                                | No offset correction is added. V OFFTC , pin 8 = 0.         |
| VR3         | FSO Adjust       | Approximately midscale                                   | Sets initial V ISRC to ~2.5V.                               |
| VR4         | FSO TC Adjust    | Do not install VR4 unless compensating over temperature. | No FSO TC adjustment                                        |
| VR5         | R ISRC Adjust    | Approximately midscale                                   | Sets initial R ISRC to ~ 50k Ω .                            |

## Determining and Setting the Ideal Sensor Excitation Voltage at T1

- 1) Set the pressure to PMIN.
- 2) Measure the output voltage (VOUT) at PMIN.
- 3) If VOUT &gt; 0.5V, open SW1-4 (SOF); if VOUT &lt; 0.5V, close SW1-4.
- 4) Adjust VR2 (OFST trim) until VOUT is 0.5V.
- 5) Set the pressure to PMAX, and measure VOUT at PMAX.
- 6) Calculate the uncorrected FSO as follows: VOUT at PMAX - VOUT at PMIN.
- 7) Calculate the FSO error as follows: uncorrected FSO / ideal FSO.
- 8) Set the pressure to PMIN, and measure VBDRIVE (uncorrected VBDRIVE).
- 9) Determine the ideal VBDRIVE as follows: uncorrected VBDRIVE / FSO error.
- 10) Using VR3 (FSO trim), set VISRC (pin 17) to ideal VBDRIVE.
- 11) Using VR5 (RISRC trim), set VBDRIVE to ideal VBDRIVE.

## Example:

- 1) Set the pressure to PMIN.
- 2) Measure VOUT at PMIN to be 0.987V.
- 3) Open SW1-4 (the voltage at OFFSET, pin 9, is subtracted from the output).
- 4) Adjust VR2 until VOUT at PMIN = 0.503V.
- 5) Set the pressure to PMAX, then measure VOUT at PMAX to be 4.742V.
- 6) Calculate the uncorrected FSO as follows: 4.742 - 0.503 = 4.239V.
- 7) Calculate the FSO error as follows: 4.239 / 4 = 1.0597 (approximately 6% too high).
- 8) Measure  VBDRIVE as  2.42V  (uncorrected VBDRIVE).
- 9) Calculate ideal VBDRIVE as follows: 2.42 / 1.0597 = 2.284V.
- 10) Adjust VR3 until VISRC = 2.284V.
- 11) Adjust VR5 until VBDRIVE = 2.284V.

## Setting Offset Voltage at T1

- 1) Set VR2 fully CCW (VOFFSET, pin 9 = 0).
- 2) Set the pressure to PMIN.
- 3) Measure the output voltage VOUT at PMIN.
- 4) If VOUT &gt; 0.5V, open SW1-4; if VOUT &lt; 0.5V, close SW1-4.
- 5) Adjust VR2 until VOUT is 0.5V.

## Example:

- 1) Set VR2 fully CCW.
- 2) Set the pressure to PMIN.
- 3) Measure VOUT PMIN to be 0.387V.
- 4) Close SW1-4 (the voltage at OFFSET, pin 9, is added to the output).
- 5) Adjust VR2 until VOUT at PMIN = 0.496V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

4

Offset and FSO calibration (at T1) is now complete. Remeasure the EV kit's output voltage (VOUT) at both PMIN and PMAX. If required, make small readjustments to  FSO and to offset using their respective adjusting potentiometers. If large errors are observed (~ 0.5% or greater), recalibrate from step 1.

Temperature-Compensation Procedure Accuracy may be improved by measuring offset and FSO errors at a second temperature T2 (T2 &gt; T1). The FSOTC and OFFTC potentiometers will be used to compensate for the drift in offset and FSO.

## Compensating FSO TC Error at T2

- 1) Increase the temperature to T2 and allow sufficient soak time.
- 2) Confirm that the supply voltage is correct.
- 3) Set the pressure to PMIN.
- 4) Measure VBDRIVE (uncorrected VBDRIVE at T2).
- 5) Compare this uncorrected VBDRIVE with the ideal VBDRIVE at T1 (see Determining and Setting the Ideal Sensor Excitation Voltage at T1 ). If the uncorrected VBDRIVE is less than or equal to the ideal VBDRIVE at T1, the sensor cannot be compensated and you should abort the procedure. If it is greater than the ideal VBDRIVE, the sensor can be compensated and you may proceed.
- 6) Measure VOUT at PMIN.
- 7)  Set the pressure to PMAX, and measure VOUT at PMAX.
- 8) Calculate the uncorrected FSO as follows: VOUT at PMAX - VOUT at PMIN.
- 9) Calculate the FSO error as follows: uncorrected FSO / ideal FSO.
- 10) Set the pressure to PMIN, and remeasure VBDRIVE (uncorrected VBDRIVE).
- 11) Determine the ideal VBDRIVE as follows: uncorrected VBDRIVE / FSO error.
- 12) Using VR4 (FSO TC trim), set VBDRIVE to ideal VBDRIVE.

## Example:

- 1) Increase the temperature to T2 and allow sufficient soak time.
- 2) Confirm that the supply voltage is correct.
- 3) Set the pressure to PMIN.
- 4)  Measure the uncorrected VBDRIVE at T2 as 2.961V.

<!-- image -->

## MAX1450 Evaluation Kit

- 5) Since it is greater than 2.284V, we can proceed.
- 6) Measure VOUT at PMIN to be 0.6V.
- 7) Set the pressure to PMAX, and measure VOUT at PMAX to be 4.72V.
- 8) Calculate the uncorrected FSO as follows: 4.72 - 0.6 = 4.12V.
- 9) Calculate FSO error as follows: 4.12 / 4 = 1.03 (approximately 3% too high).
- 10) Set the pressure to PMIN, and remeasure VBDRIVE (uncorrected VBDRIVE).
- 11) Determine the ideal VBDRIVE as follows: 2.961 / 1.03 = 2.875V.
- 12) Adjust VR4 (FSO TC trim) until VBDRIVE = 2.875V.

## Compensating Offset TC Error at T2

- 1) Set the pressure to PMIN.
- 2) Measure VOUT at PMIN.
- 3) Calculate the offset TC error as follows: VOUT at PMIN - 0.5.
- 4)  Calculate the delta VBDRIVE as follows: ideal VBDRIVE at T2 - ideal VBDRIVE at T1.
- 5) Calculate the offset TC correction factor as follows: offset TC error / (1.15 · delta VBDRIVE).
- 6) If  offset  TC  error  is  positive,  set  SW1-5  to  open (negative offset TC correction); if it is negative, close SW1-5.
- 7) Calculate VOFFTC as follows: offset TC correction factor · VBDRIVE at T2.
- 8) Measure the voltage at OFFTC (pin 8), and adjust VR1 to the value VOFFTC.

## Example:

- 1) Set the pressure to PMIN.
- 2) Measure VOUT at PMIN to be 0.75V.
- 3) Calculate the offset TC error as follows: 0.75 0.5 = +0.25V.
- 4) Calculate delta VBDRIVE as follows: 2.875 2.284 = +0.591V.
- 5) Calculate offset TC correction factor as follows: 0.25  /  (1.15 · 0.591)  =  0.368  (+36.7%  of VBDRIVE).
- 6) Since offset TC correction factor is positive, open SW1-5.
- 7) Calculate VOFFTC as 0.368 · 2.875 = 1.058V.
- 8) Adjust VR1 until VOFFTC = 1.058V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1450 Evaluation Kit

## Final Offset Readjustment at T2

- 1) Set VR2 fully CCW (VOFFSET, pin 9 = 0).
- 2) Set the pressure to PMIN.
- 3) Measure the output voltage (VOUT) at PMIN.
- 4) If VOUT &gt; 0.5V, open SW1-4; if VOUT &lt; 0.5V, close SW1-4.
- 5) Adjust VR2 until VOUT is 0.5V.

## Example:

- 1) Set VR2 fully CCW.
- 2) Set the pressure to PMIN.
- 3) Measure VOUT at PMIN to be 0.05V (saturated).
- 4) Close SW1-4 (add an offset voltage to the output).
- 5) Adjust VR2 until VOUT at PMIN = 0.504V.

Calibration and temperature compensation are now complete. Temperature compensation is linear and has been optimized at the two chosen temperature points, T1 and T2. The EV kit can now be evaluated at other intermediate temperature points to determine the magnitude  of  nonlinear  temperature  errors  that  the MAX1450 cannot compensate. Consider the MAX1457, MAX1459, or MAX1478 for improved accuracy and manufacturability.

## Frequently Asked Questions

- The sensor voltage and/or output voltage jump erratically. How can I correct this?

This is caused by moisture condensation in the test oven. Purge with dry air or nitrogen.

- The output of the board is noisy. How can I correct this?

Keep the sensor wires as short as possible, especially when operating at high gain settings. Add a bypass capacitor across the sensor output lines. If using an external sensor, connect shielded cables between the sensor and the MAX1450.

- Will Maxim make custom modifications to the MAX1450 to better suit my application?

Yes. The MAX1450 can be modified for an N R E fee and/or a production order commitment. Contact the factory for details.

- What can I do to minimize sensor repeatability errors on the EV kit?

Sensor parameters may change over time or during shipment. The sensor offset is notorious for drifting over time. A sensor 'wake-up' is recommended before precise calibration measurements can be taken. This wake-up should include several full-temperature excursions, combined with full-scale pressure excursions.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1. MAX1450 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1450 Evaluation Kit

<!-- image -->

Figure 2. MAX1450 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1450 EV Kit PC Board Layout-Component Side

Figure 3. MAX1450 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5. MAX1450 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 8 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 2000 Maxim Integrated Products