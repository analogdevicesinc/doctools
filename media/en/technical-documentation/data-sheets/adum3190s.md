<!-- lastmod 2021-04-21 -->
<!-- image -->

## High Stability Isolated Error Amplifier

ADuM3190S

## 1.0 Scope

This specification documents the detail requirements for space qualified product manufactured on Analog Devices, Inc.'s QML certified line per MIL-PRF-38535 Level V except as modified herein.

The manufacturing flow described in the STANDARD SPACE LEVEL PRODUCTS PROGRAM brochure is to be considered a part of this specification.  http://www.analog.com/aeroinfo

This data specifically details the space grade version of this product. A more detailed operational description and a complete data sheet for commercial product grades can be found at http://www.analog.com/ADuM3190

## 2.0 Part Number

The complete part number(s) of this specification follows:

Specific Part Number

Description

ADUM3190P703F

High Stability Isolated Error Amplifier tested to 30krad

## 3.0 Case Outline

The case outline(s) are as designated in MIL-STD-1835 and as follows:

| Outline Letter   | Descriptive Designator   | Terminals   | Lead Finish    | Package style          |
|------------------|--------------------------|-------------|----------------|------------------------|
| X                | CDFP4-F16                | 16-lead     | Hot Solder Dip | Bottom Brazed FlatPack |

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

Figure 1 - Terminal Connections

| Package:X   | Package:X       | Package:X     | Package:X                                         |
|-------------|-----------------|---------------|---------------------------------------------------|
| Pin Number  | Terminal Symbol | Pin Type      | Pin Description                                   |
| 1           | VDD1            | Power         | Supply Voltage for Side 1 (3.0 V to 20 V). 1/     |
| 2           | GND1            | Power         | Ground Reference for Side 1. 3/, 12/              |
| 3           | VREG1           | Power         | Internal Supply Voltage for Side 1. 2/            |
| 4           | REFOUT1         | Analog output | Reference Output Voltage for Side 1. 5/           |
| 5           | GND             | Power         | Ground 6/, 12/                                    |
| 6           | EAOUT2          | Analog output | Isolated Output Voltage 2, Open-Drain Output. 7/  |
| 7           | EAOUT           | Analog output | Isolated Output Voltage.                          |
| 8           | GND1            | Power         | Ground Reference for Side 1. 3/, 12/              |
| 9           | GND2            | Power         | Ground Reference for Side 2. 4/                   |
| 10          | COMP            | Analog output | Output of the Op Amp. 8/                          |
| 11          | -IN             | Analog input  | Inverting Op AmpInput. 9/                         |
| 12          | +IN             | Analog input  | Noninverting Op AmpInput. 10/                     |
| 13          | REFOUT          | Analog output | Reference Output Voltage for Side 2. 11/          |
| 14          | VREG2           | Power         | Internal Supply Voltage for Side 2. 2/            |
| 15          | GND2            | Power         | Ground Reference for Side 2. 4/                   |
| 16          | VDD2            | Power         | Supply Voltage for Side 2 (3.0 V to 20 V) 1/      |
| Lid         |                 | Power         | Metal Lid electrically connected to ground (GND1) |

- 1/ Connect a ceram ic bypass capacitor of value 1 μF between VDD1 (Pin 1) and GND1 (Pin 2) and between VDD2 (Pin 16) and GND2 (Pin 15)
- 2/ Connect a 1 μF capacitor between VREG1 (Pin 3)  and GND1 (Pin2) and VREG2  (Pin 14)and GND2(Pin 15).
- 3/ Pin 2 and Pin 8 are internally connected, and connecting both to GND1 is recommended.
- 4/ Pin 9 and Pin 15 are internally connected, and connecting both to GND2 is recommended.
- 5/ The maximum capacitance for this pin (CREFOUT1) must not exceed 15 pF.
- 6/ Connect Pin 5 to GND1; do not leave this pin floating.
- 7/ Connect a pull-up resistor between EAOUT2 and VDD1 for current up to 1 mA.
- 8/ A loop compensation network can be connected between the COMP pin and the -IN pin.
- 9/ Pin 11 is the connection for the power supply setpoint and compensation network.
- 10/ Pin 12 can be used as a reference input.
- 11/ The maximum capacitance for this pin (CREFOUT) must not exceed 15 pF.
- 12/ Internally connected to Metal Lid.

## 4.0 Specifications

## 4.1.  Absolute Maximum Ratings 1/

| Supply voltage (V DD1, V DD2 ) ...........................................................     | 24 V 2/                   |
|------------------------------------------------------------------------------------------------|---------------------------|
| Supply voltage (V REG1, V REG2 ) ........................................................      | 3.6 V 2/                  |
| Input voltage (+IN, -IN) ..................................................................    | 3.6 V 7/                  |
| Output voltages ( REF OUT , COMP, REF OUT1 , EA OUT )......................................    | 3.6 V                     |
| Output voltages ( EA OUT2 )................................................................... | 5.8 V                     |
| Output Current per Output Pin.......................................................           | -11 mAto +11 mA7/         |
| Common-Mode Transients ............................................................            | -100 kV/µs - 100 kV/µs 3/ |
| Storage temperature range ..........................................................           | -65 ° C to +150 ° C       |
| Junction temperature maximum (T J ) ............................................               | +150 ° C                  |
| Lead temperature (soldering, 60 seconds) ..................................                    | +300 ° C                  |
| Thermal resistance, junction-to-case ( θ JC ) ...................................              | 52 ° C/W 4/               |
| Thermal resistance, junction-to-ambient ( θ JA ) ..............................                | 104 ° C/W 4/              |
| ESD Sensitivity(HBM)………………………………………………..                                                       | Class 2                   |

## 4.2.  Recommended Operating Conditions

| Supply voltage (V DD1, V DD2 ) ...........................................................   | 3.0 V to 20.0 V   |
|----------------------------------------------------------------------------------------------|-------------------|
| Ambient operating temperature range (T A )………………………….-55                                     | ° C to +125 ° C   |
| Max input signal rise and fall times (t R , t F ) ....................................... 1  | ms                |

## 4.3.  Nominal Operating Performance Characteristics  5/

| Input Capacitance ......................................................................    | 2 pF      |
|---------------------------------------------------------------------------------------------|-----------|
| EA OUT Impedance ( V DD2 or V DD1 < UVLO threshold) .............................           | High-Z    |
| Input-to-Output Capacitance (C I-O ) ..............................................         | 2.2 pF 6/ |
| Input Capacitance (C I )................................................................. 4 | pF        |

## 4.4.  Radiation Features

Maximum total dose available (dose rate = 50 - 300 rads(Si)/s)….30 krads(Si)

1/ Stresses above those listed under Absolute Maximum Ratings may cause permanent damage to the device.  This is a stress rating only; functional operation of the device at these or any other conditions outside of those indicated in the operation sections of this specification is not implied.  Exposure to absolute maximum ratings for extended periods may affect device reliability.

2/ All voltages are relative to their respective grounds.

3/ Refers to common-mode transients across the insulation barrier. Common-mode transients exceeding the absolute maximum ratings may cause latch-up or permanent damage

4/ Measurement taken under absolute worst case condition and represents data taken with thermal camera for highest power density location. See MIL-STD1835 for average Θ JC number.

5/ All typical specifications are at TA = 25 °C and VDD1 = VDD2 = 5 V, unless otherwise noted.

6/ Input capacitance is from any input data pin to ground.

7/ See Figure 2 for maximum rated power for various temperatures.

## ADuM3190S

## TABLE IA - ELECTRICAL PERFORMANCE CHARACTERISTICS

| Parameter See notes at end of table   | Symbol                | Conditions 1/ Unless otherwise specified                             | Sub- Group   |   Limit Min |   Limit Max | Units   |
|---------------------------------------|-----------------------|----------------------------------------------------------------------|--------------|-------------|-------------|---------|
| ACCURACY                              |                       |                                                                      |              |             |             |         |
| Error 7/                              | Err                   | (1.225 V - EA OUT )/1.225 V × 100%                                   | 1,3          |        -0.5 |         0.5 | %       |
|                                       |                       |                                                                      | 2            |        -0.7 |         0.7 | %       |
|                                       |                       | M,D,P                                                                | 1            |       -0.75 |        0.75 | %       |
| OPAMP                                 |                       |                                                                      |              |             |             |         |
| Offset Error                          | V OS_OPAMP            |                                                                      | 1,2,3        |          -5 |           5 | mV      |
|                                       |                       | M,D,P                                                                | 1            |          -5 |           5 | mV      |
| Open -Loop Gain                       | Avo                   |                                                                      | 1,2,3        |          66 |             | dB      |
|                                       |                       | M,D,P                                                                | 1            |          66 |             | dB      |
| Input Common-Mode                     | IVR                   |                                                                      | 1,2,3        |        0.35 |         1.5 | V       |
| Range                                 |                       | M,D,P                                                                | 1            |        0.35 |         1.5 | V       |
| Gain Bandwidth                        | GBP                   |                                                                      | 4,5,6        |             |          10 | MHz     |
| Common-Mode                           | CMRR                  |                                                                      | 1,2,3        |          60 |             | dB      |
| Rejection Ratio                       |                       | M,D,P                                                                | 1            |          60 |             | dB      |
| Output Voltage                        | VOH OPAMP             | COMPpin                                                              | 1,2,3        |         2.7 |             | V       |
| Range                                 |                       | M,D,P                                                                | 1 1,2,3      |         2.7 |         0.2 | V       |
|                                       | VOL OPAMP             |                                                                      | 1            |             |             | V       |
|                                       |                       | M,D,P                                                                |              |             |         0.2 | V       |
| Input Bias Current                    | I B                   |                                                                      | 1,2,3        |       -0.01 |        0.01 | uA      |
|                                       |                       | M,D,P                                                                | 1            |       -0.01 |        0.01 | uA      |
| REFERENCE                             |                       |                                                                      |              |             |             |         |
| Output Voltage                        | Vref                  | 0 to 2 mA, C REFOUT = 15 pF                                          | 1            |       1.215 |       1.235 | V       |
|                                       |                       |                                                                      | 2,3          |       1.213 |       1.237 | V       |
|                                       |                       | M,D,P                                                                | 1            |       1.215 |       1.235 |         |
| Output Current                        | I VREF                | C REFOUT = 15 pF                                                     | 1,2,3        |         2.0 |             | mA      |
|                                       |                       | M,D,P                                                                | 1            |         2.0 |             | mA      |
| UVLO                                  |                       |                                                                      |              |             |             |         |
| Positive Going                        | UVLO LO-HI            |                                                                      | 1,2,3        |             |        2.96 | V       |
| Threshold 6/                          |                       | M,D,P                                                                | 1            |             |        2.96 | V       |
| Negative Going                        | UVLO HI-LO            |                                                                      | 1,2,3        |         2.4 |             | V       |
| Threshold                             |                       | M,D,P                                                                | 1            |         2.4 |             | V       |
| OUTPUTCHARACTERISTICS                 | OUTPUTCHARACTERISTICS |                                                                      |              |             |             |         |
| Output Gain 4/                        | Gain                  | From COMPto E Aout , 0.4 V to 1.92 V, +/-3 mA, VDD1 = 3 V, 5 V       | 1,2,3        |        0.83 |        1.17 | V/V     |
|                                       |                       | M,D,P                                                                | 1            |        0.83 |        1.17 | V/V     |
|                                       |                       | From E Aout to E Aout2 , 0.4 V to 1.92 V, +/-1 mA, VDD1 = 10 V, 20 V | 1,2,3        |         2.5 |         2.7 | V/V     |
|                                       |                       | M,D,P                                                                | 1            |         2.5 |         2.7 |         |
| Output Offset Voltage                 | V OS_COMP_EAout       | From COMPto EAout, 0.4 V to 1.92 V, +/-3 mA, VDD1 = 3 V, 5 V         | 1,2,3        |        -0.2 |        +0.2 | V       |
|                                       |                       | M,D,P                                                                | 1            |        -0.2 |        +0.2 | V       |
|                                       | V OS_EAout_EAout2     | From E Aout to E Aout2 , 0.4 V to 1.92 V, +/-1 mA, VDD1 = 10 V, 20 V | 1,2,3        |        -0.1 |        +0.1 | V       |
|                                       |                       | M,D,P                                                                | 1            |        -0.1 |        +0.1 |         |
| Output Linearity 5/                   | LE                    | From COMPto EAout, 0.4 V to 1.92 V, +/-3 mA, VDD1 = 3 V, 5 V         | 1,2,3        |          -1 |          +1 | %       |
|                                       |                       | M,D,P                                                                | 1            |          -1 |          +1 |         |

## ADuM3190S

| Parameter See notes at end of table   | Symbol        | Conditions 1/ Unless otherwise specified                                                  | Sub- Group   |   Limit Min |   Limit Max | Units   |
|---------------------------------------|---------------|-------------------------------------------------------------------------------------------|--------------|-------------|-------------|---------|
|                                       |               | From EAout to EAout2, 0.4 V to 1.92 V, +/-1 mA, VDD1 = 10 V, 20 V                         | 1,2,3        |          -1 |          +1 |         |
|                                       |               | M,D,P                                                                                     | 1            |          -1 |          +1 | kHz     |
|                                       | -3dB EAOUT2   | From COMPto EAOUT2 Vin= 0.4 V to 0.95 V, VDD1 = 3 V, 5 V Vin= 0.4 V to 2.1 V, VDD1 = 20 V | 1,2,3        |         250 |             | kHz     |
| Output Voltage, EA OUT                | VOL EAOUT     | +/-3mA output, VDD1 = 3 V, 5 V                                                            | 1,2,3        |             |         0.4 | V       |
|                                       |               | M,D,P                                                                                     | 1            |             |         0.4 | V       |
|                                       | VOH EAOUT     | +/-3mA output, VDD1 = 3 V, 5 V                                                            | 1,2,3        |         2.4 |             | V       |
|                                       |               | M,D,P                                                                                     | 1            |         2.4 |             | V       |
| Output Voltage, EA OUT2               | VOL EAOUT2    | +/-1mA output, VDD1 = 4.5 V, 5.5 V, 10 V, 15 V, 20 V                                      | 1,2,3        |             |         0.6 | V       |
|                                       | VOH EAOUT2    | +/-1mA output, VDD1 = 4. 5 V                                                              | 1,2,3        |         4.4 |             | V       |
|                                       |               | M,D,P                                                                                     | 1            |         4.4 |             | V       |
|                                       |               | +/-1mA output, VDD1 = 5 V, 5.5 V                                                          | 1,2,3        |         4.8 |             | V       |
|                                       |               | M,D,P                                                                                     | 1            |         4.8 |             | V       |
|                                       |               | +/-1mA output, VDD1 = 10 V,                                                               | 1,2,3        |           5 |             | V       |
|                                       |               | 15 V, & 20 V                                                                              | 1            |           5 |             | V       |
| Noise, E Aout 2/, 3/                  | e n rms       | M,D,P VDD1=VDD2=3 V                                                                       | 4,5,6        |             |           2 | mVrms   |
|                                       |               | VDD1=VDD2=5 V                                                                             | 4,5,6        |             |         2.8 | mVrms   |
|                                       |               | VDD1=VDD2=20 V                                                                            | 4,5,6        |             |         3.5 | mVrms   |
| Noise, E Aout2 2/, 3/                 | e n rms       | VDD1=VDD2=5 V                                                                             | 4,5,6        |             |           7 | mVrms   |
|                                       |               | VDD1=VDD2=20 V                                                                            | 4,5,6        |             |         7.5 | mVrms   |
| POWERSUPPLY                           |               |                                                                                           |              |             |             |         |
| Operating range: Both Sides           | V DD1 , V DD2 | M,D,P                                                                                     | 1,2,3        |           3 |          20 | V       |
|                                       |               | M,D,P                                                                                     | 1            |           3 |          20 | V       |
| Power Supply Rejection Ratio          | PSRR          | DC, VDD1 = VDD2 = 3 V to 20 V                                                             | 1,2,3        |          60 |             | dB      |
|                                       |               | DC, VDD1 = VDD2 = 3 V to 20 V                                                             | 1            |          60 |             | dB      |
| Supply Current                        | I DD1         | M,D,P                                                                                     | 1,2,3        |             |           2 | mA      |
|                                       |               | M,D,P                                                                                     | 1            |             |           2 | mA      |
|                                       | I DD2         | M,D,P                                                                                     | 1            |             |           5 | mA      |

## TABLE IA NOTES:

1/ TA nom = 25 ºC, TA max = 125 ºC, TA min = -55 ºC and VDD1 = VDD2 = 3 V min, VDD1 = VDD2 = 5 V nom and VDD1 = VDD2 = 20 V max unless otherwise noted.

2/ Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent wafer lots.

3/ Parameter is not tested post irradiation

4/ Output gain is defined as the slope of the best-fit line of the output voltage vs. the input voltage over the specified input range, with the offset error adjusted out .

5/ Output linearity is defined as the peak-to-peak output deviation from the best-fit line of the output gain, expressed as a percentage of the full-scale output

## ADuM3190S

voltage.

- 6/ For VDD2, if ramping the supply voltage to turn on the outputs, be sure to start ramp where 2.55 V &lt; VDD2 &lt; 2.7 V.

7/ Accuracy is measured using circuit configuration in Figure 3 for EAout and Figure 4 for EAout2

## TABLE IB - ELECTRICAL PERFORMANCE CHARACTERISTICS- INSULATION AND SAFETY-RELATED SPECIFICATIONS1/, 2/

| Parameter                             | Symbol   | Value   | Unit   | Conditions                           |
|---------------------------------------|----------|---------|--------|--------------------------------------|
| Rated Dielectric Insulation Voltage   | Iso      | 700     | Vpeak  | 1 minute duration                    |
| Resistance (Input-to-Output) 3/       | R I-O    | 10 12   | Ω      |                                      |
| Maximum Working Insulation Voltage 4/ | CWV      | 466     | Vpeak  | 1 ppmfor 30-year minimum lifetime 5/ |

## TABLE IB NOTES:

- 1/ Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent wafer lots TA = 25 ºC.
- 2/ Parameter is not tested post irradiation
- 3/ The device is considered a 2-terminal device: Pin 1 through Pin 8 are shorted together and Pin 9 through Pin 16 are shorted together.
- 4/ Refers to continuous voltage magnitude imposed across the isolation barrier. Long term operation at this high voltage can lead to shortened isolation life. Continuous working voltage exceeding the rated value may cause permanent damage.

5/ For Bipolar AC Voltage environment which is worst case condition for i Coupler products.

Figure 2.Thermal Derating Curve,Dependence of Safety LimitingValues on Case Temperature,perDINVVDEV0884-10 See note 7/at the end of Section 4.0

<!-- image -->

TABLE IIA - ELECTRICAL TEST REQUIREMENTS:

## ADuM3190S

| Table IIA                               | Table IIA                                               |
|-----------------------------------------|---------------------------------------------------------|
| Test Requirements                       | Subgroups (in accordance with MIL-PRF-38535, Table III) |
| Interim Electrical Parameters           | 1                                                       |
| Final Electrical Parameters             | 1,2,3,4,5,6 1/ 2/                                       |
| Group A Test Requirements               | 1,2,3, 4,5,6                                            |
| Group C end-point electrical parameters | 1,2,3, 4,5,6 2/                                         |
| Group Dend-point electrical parameters  | 1,2,3, 4,5,6                                            |
| Group E end-point electrical parameters | 1                                                       |

TABLE IIB - LIFE TEST/BURN-IN DELTA LIMITS (VDD1 = VDD2= 3 V to 20 V) 1/ 2/

| Table IIB                                                          | Table IIB         | Table IIB   | Table IIB   |
|--------------------------------------------------------------------|-------------------|-------------|-------------|
| Parameter                                                          | Symbol            | Delta       | Units       |
| Offset Error VDD1=VDD2 = 3 V                                       | V OS_OPAMP        | ±0.25       | mV          |
| Offset Error VDD1=VDD2 = 5 V                                       | V OS_OPAMP        | ±0.25       | mV          |
| Offset Error VDD1=VDD2 = 20 V                                      | V OS_OPAMP        | ±0.25       | mV          |
| Input Bias Current VDD1=VDD2 = 3 V                                 | I B               | ±0.95       | nA          |
| Input Bias Current VDD1=VDD2 = 5 V                                 | I B               | ±0.95       | nA          |
| Input Bias Current VDD1=VDD2 = 20 V                                | I B               | ±0.95       | nA          |
| Output Offset Voltage (EAout to EAout2) at VDD1 = VDD2 =10 V, -1mA | V OS_EAout_EAout2 | 16          | mV          |
| Output Offset Voltage (EAout to EAout2) at VDD1 = VDD2 =20 V, -1mA | V OS_EAout_EAout2 | 16          | mV          |
| Output Offset Voltage (Comp to EAout) at VDD1 = VDD2 =3 V, -3mA    | V OS_COMP_EAout   | 10          | mV          |
| Output Offset Voltage (Comp to EAout) at VDD1 = VDD2 =5 V, -3mA    | V OS_COMP_EAout   | 10          | mV          |
| Supply Current IDD1 at Vdd =3 V, Vdd =5 V and Vdd =20 V            | I DD1             | ±0.5        | mA          |
| Supply Current, IDD2 at Vdd =3 V, Vdd =5 V and Vdd =20 V           | I DD2             | ±0.5        | mA          |

## ADuM3190S

## 5.0 Burn-In Life Test, and Radiation

## 5.1.  Burn-In Test Circuit, Life Test Circuit

- 5.1.1.  The test conditions and circuit shall be maintained by the manufacturer under document revision level control and shall be made available to the preparing or acquiring activity upon request.  The test circuit shall specify the inputs, outputs, biases, and power dissipation, as applicable, in accordance with the intent specified in method 1015 test condition B of MIL -STD-883.
- 5.1.2.  HTRB is not applicable for this drawing.

## 5.2.  Radiation Exposure Circuit

- 5.2.1.  The radiation exposure circuit shall be maintained by the manufacturer under document revision level control and shall be made available to the preparing and acquiring activity upon request. Total dose irradiation testing shall be performed in accordance with MIL-STD-883 method 1019, condition A.

## 6.0 MIL-PRF-38535 QMLV Exceptions

## 6.1.  Wafer Fabrication

Wafer fabrication occurs at MIL-PRF-38535 QML Class Q certified facility.

## 6.2.  Wafer Lot Acceptance (WLA)

WLA per MIL-STD-883 TM 5007 is not available for this product. SEM inspection per MIL-STD-883 TM2018 is not applicable to the ADuM3190S. The wafer fabrication process is manufactured using planarized metallization

- 6.3.  Device contains bi-metallic wire bonds (Gold bond wires on Aluminum die pads).

## 7.0 Application Notes

TEST CIRCUITS

<!-- image -->

Figure 3. Test Circuit :Accuracy Circuit Using EAovr

Figure 4. Test Circuit 2: Accuracy Circuit UsingEAovr

<!-- image -->

Figure 5. Test Circuit 3: isofated AmplifierCircuit

<!-- image -->

## THEORY OF OPERATION

In the test circuits of the ADuM3190 (see Figure 3 through Figure 5), external supply voltages from 3 V to 20 V are provided to the VDD1 and VDD2 pins, and internal regulators provide 3.0 V to operate the internal

ASD0016561 Rev. G | Page 9 of 15

## ADuM3190S

## ADuM3190S

circuits of each side of the ADuM3190.  An internal precision 1.225 V reference provides the reference for the ±1% accuracy of the isolated error amplifier. UVLO circuits monitor the VDDx supplies to turn on the internal circuits when the 2.96 V rising threshold is met and to turn off the error amplifier outputs to a high impedance state when VDDx falls below 2.5 V.

The op amp on the right side of the device has a noninverting +IN pin and an inverting -IN pin availa ble for connecting a feedback voltage in an isolated dc-to-dc converter output, usually through a voltage divider. The COMP pin is the op amp output, which can be used to attach resistor and capacitor components in a compensation network. The COMP pin internally drives the Tx transmitter block, which converts the op amp output voltage into an encoded output that is used to drive the digital isolator transformer.

On the left side of the ADuM3190, the transformer output PWM signal is decoded by the Rx block, which converts the signal into a voltage that drives an amplifier block; the amplifier block produces the error amplifier output available at the EAOUT pin. The EAOUT pin can deliver ±3 mA and has a voltage level between 0.4 V and 2.4 V, which is typically used to drive the input of a PWM controller in a dc-to-dc circuit.

For applications that need more output voltage to drive their controllers, Figure 4 illustrates the use of the EAOUT2 pin output, which delivers up to ±1 mA with an output voltage of 0.6 V to 4.8 V for an output that has a pull-up resistor to a 5 V supply. If the EAOUT2 pull-up resistor connects to a 10 V to 20 V supply, the output is specified to a minimum of 5.0 V to allow use with a PWM controller requiring a minimum input operation of 5V.

## ACCURACY CIRCUIT OPERATION

See Figure 3 and Figure 4 for stability of the accuracy circuits. The op amp on the right side of the ADuM3190,  from the -IN pin to the COMP pin, has a unity -gain bandwidth (UGBW) of10 MHz. Figure 6, Bode Plot 1, shows a dashed line for the op amp alone and its 10 MHz pole.

Figure 6 also shows the linear isolator alone (the blocks from the op amp output to the ADuM3190 output, labeled as the linear isolator), which introduces a pole at approximately 400 kHz. This total Bode plot of the op amp and linear isolator shows that the phase shift is app roximately -180° from the -IN pin to the EA OUT pin before the crossover frequency. Because a -180° phase shift can ma ke the system unstable, adding an integrator configuration, as shown in the test circuits in Figure 3 and Figure 4, consisting of a 2.2 nF capacitor and a 680 Ω resistor helps to make the system stable. In Figure 7, Bode Plot 2 with an integrator configuration added, the system crosses over 0 dB at approximately 100 kHz, but the circuit is more stable with a phase shift of app roximately -120° , which yields a stable 60° phase margin.

This circuit is used for accuracy tests only, not for real-world applicat ions, because it has a 680 Ω resistor across the isolation barrier to close the loop for the error amplifier; this resistor causes leakage current to flow across the isolation barrier. For this test circuit only, GND1 must be connected to GND2 to create a return for the leakage current created by the 680 Ω resistor connection.

<!-- image -->

## ISOLATED AMPLIFIER CIRCUIT OPERATION

Figure 5 shows an isolated amplifier circuit. In this circuit, the input side amplifier is set as a unity-gain buffer so that the EAOUT output follows the +IN input. The EAOUT2 output follows the EAOUT output, but with a voltage gain of 2.6.

This circuit has an open-drain output, which must be pulled up to a supply voltage from 3 V to 20 V using a resistor value set for an output current of up to 1 mA. The EAOUT2 output can be used to drive up to 1 mA to the input of a device that requires a minimum input operation of 5 V. The EAOUT2 circuit has an internal diode clamp to protect the internal circuits from voltages greater than 5 V.

The gain, offset, and linearity of EAOUT and EAOUT2 are specified in Table 1 using this test circuit. When designing applications for voltage monitoring using an isolated amplifier, review these specifications, noting that the 1% accuracy specifications for the isolated error amplifier do not apply. In addition, the EAOUT circuit in Figure 5 is shown with an optional external RC low-pass filter with a corner frequency of 500 kHz, which can reduce the 3 MHz output noise from the internal voltage to the PWM converter.

## ADuM3190S

## ADuM3190S

## DC CORRECTNESS AND MAGNETIC FIELD IMMUNITY

Positive and negative logic transitions at the isolator input cause narrow (~1 ns) pulses to be sent to the decoder via the transformer. The decoder is bistable and is, therefore, either set or reset by the pulses, indicating input logic transitions. In the absence of logic transitions of more than 1 μs at the input, a periodic set of refresh pulses indicative of the correct input state are sent to ensure dc correctness at the output.

If the decoder receives no internal pulses for more than approximately 3 μs, the input side is assumed to be unpowered or nonfunctional, in which case the isolator output is forced to a default high impedance state by the watchdog timer circuit. In addition, the outputs are in a default high impedance state while the power is increasing before the UVLO threshold is crossed.

The ADuM3190 is immune to external magnetic fields. The limitation on the ADuM3190 magnetic field immunity is set by the condition whereby induced voltage in the transformer receiving coil is sufficiently large to either falsely set or reset the decoder. The following analysis defines the conditions under which this can occur. The 3 V operating condition of the ADuM3190 is examined because it represents the most susceptible mode of operation. The pulses at the transformer output have an amplitude that is greater than 1.0 V. The decoder has a sensing threshold at approximately 0.5 V, therefore establishing a 0.5 V margin within which induced voltages are tolerated. The voltage induced across the receiving coil is given by

V = ( -dβ / dt ) ∑ π rn 2 , n = 1, 2, … , N

where:

β

rn

N

is the magnetic flux density (gauss). is the radius of the nth turn in the receiving coil (cm). is the number of turns in the receiving coil.

Given the geometry of the receiving coil in the ADuM3190 and an imposed requirement that the induced voltage be, at most, 50% of the 0.5 V margin at the decoder, a maximum allowable magnetic field is calculated, as shown in Figure 8.

Figure 8. Maximum Allowabie Externai Magnetic Flux Density

<!-- image -->

For example, at a magnetic field frequency of 1 MHz, the maximum allowable magnetic field of 0.02 kgauss induces a voltage of 0.25 V at the receiving coil. This is approximately 50% of the sensing threshold and does not cause a faulty output transition.

Similarly, if such an event were to occur during a transmitted pulse (and had the worst-case polarity), the received pulse is reduced from &gt;1.0 V to 0.75 V, still well above the 0.5 V sensing threshold of the decoder. The preceding magnetic flux density values correspond to specific current magnitudes at given distances

away from the ADuM3190 transformers. Figure 9 shows these allowable current magnitudes as a function of frequency for selected distances. As shown in Figure 9, the ADuM3190 is immune and can be affected only by extremely large currents operating at a high frequency very close to the component. For the 1 MHz example, a 0.7 kA current must be placed 5 mm away from the ADuM3190 to affect the operation of the device.

Figure 9.Maximum Allowable Current forVarious Current-to-ADuM3190 Spacings

<!-- image -->

## ADuM3190S

## 8.0 Package Outline Dimensions

Figure 10. 16-Lead Bottom Brazed Flatpack

<!-- image -->

Dimensions shown in inches and (millimeters)

PLANE

## ORDERING GUIDE

| Model         | Temperature Range   | Package Description             | Package Option   |
|---------------|---------------------|---------------------------------|------------------|
| ADUM3190P703F | -55 °C to +125 °C   | 16-Lead Bottom Brazed Flat Pack | CDFP4-F16        |

## 9.0 Revision History

| Revision History   | Revision History                                                                                                                                                                | Revision History   |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| Rev                | Description of Change                                                                                                                                                           | Date               |
| A                  | Initial Release                                                                                                                                                                 | 2/15/2018          |
| B                  | Remove 'Preliminary' from 1 st page                                                                                                                                             | 2/21/2018          |
| C                  | Corrected typo on Delta Limits, added bi-metallic bonding note, added functional block diagram, corrected typo for burn in condition section 5.1.1, added ESD sensitivity level | 3/19/2018          |
| D                  | Corrected typo for thermal resistance specifications                                                                                                                            | 8/30/2018          |
| E                  | Added ADUM3190L703F device model. Widened accuracy limits for ADUM3190P703F. Moved Maximum Working Voltage from Section 4.3 to Table IB. Editorial corrections.                 | 12/06/2019         |
| F                  | Added Radiation note, updated QMLV exception and added Package Outline Drawing.                                                                                                 | 10/14/2020         |
| G                  | Deleted ADUM3190L703F device model and corrected typo for Voltage Gain Accuracy Error formula at Table 1A.                                                                      | 4/5/2021           |

<!-- image -->