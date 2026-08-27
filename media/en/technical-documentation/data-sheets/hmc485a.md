<!-- lastmod 2020-06-03 -->
<!-- image -->

<!-- image -->

## Typical Applications

The HMC485AMS8GE is ideal for:

- High Dynamic Range Infrastructure:
- GSM, GPRS &amp; EDGE

<!-- image -->

| Parameter                         |   Min. |   Typ. |   Max | Units   |
|-----------------------------------|--------|--------|-------|---------|
| RF Frequency Range                |    1.7 |        |   2.4 | GHz     |
| LO Frequency Range                |    1.4 |        |  2.35 | GHz     |
| IF Frequency Range                |     50 |        |   300 | MHz     |
| LO Drive Level                    |     -2 |        |     4 | dBm     |
| Conversion Loss                   |        |    9.5 |    11 | dB      |
| Noise Figure (SSB)                |        |    9.5 |    11 | dB      |
| LO to RF Isolation                |        |     10 |       | dB      |
| LO to IF Isolation                |        |     25 |       | dB      |
| Input Third-Order Intercept (IP3) |     29 |     34 |       | dBm     |
| Supply Current                    |        |     45 |       | mA      |

## HMC485AMS8GE

v00.0815

## HIGH IP3 GaAs MMIC I/Q MIXER WITH INTEGRATED LO AMPLIFIER, 1.7 - 2.4 GHz

## Features

Input Third-Order Intercept (IP3): 34 dBm

Conversion Loss: 9 dB

LO to RF Isolation: 10 dB

Functional Diagram General Description · CDMA &amp; W-CDMA · Cable Modem Termination Systems The HMC485AMS8GE is a high dynamic range passive MMIC mixers with integrated LO amplifier in plastic  surface mount 8 lead MiniSmall Outline Package (MSOP) covering 1.7 to 2.4 GHz. Excellent input IP3 performance of 34 dBm for downconversion and 27 dBm  for  upconversion  is  provided  for  2.5  G  &amp;  3  G GSM/CDMA based UMTS or PCS applications at an LO drive of 0 dBm. With an input 1 dB compression of 19 dBm, the RF port will accept a wide range of input signal levels. Conversion loss is 9 dB typical. The 50 to 300 MHz IF frequency response will satisfy many UMTS/PCS transmit or receive frequency plans con -figured for low side LO. The HMC485AMS8GE input IP3 performance coupled with its high P1dB rivals traditional active FET mixers while offering a much small -er 14.8 mm 2  standard IC footprint. Electrical Specifications, T A = +25°C, LO = 0 dBm, IF = 200 MHz  [1] , Vdd = 5 V LO to IF Isolation: 25 dB Single Positive Supply: 5 V at 45 mA Ultra Small MSOP Package PRELIMINARY

[1] Unless otherwise noted, all measurements performed as a downconverter with upper sideband selected and IF = 200 MHz.

<!-- image -->

<!-- image -->

## HMC485AMS8GE

v00.0815

## HIGH IP3 GaAs MMIC I/Q MIXER WITH INTEGRATED LO AMPLIFIER, 1.7 - 2.4 GHz

## Absolute Maximum Ratings

| Bias Supply (Vdd)                                           | 7 Vdc          |
|-------------------------------------------------------------|----------------|
| RF Input Power                                              | 27 dBm         |
| IF Input Power                                              | 27 dBm         |
| LO Drive                                                    | 10 dBm         |
| IF DC Current                                               | ±40 mA         |
| Channel Temperature                                         | 150 °C         |
| Continuous Pdiss (T = 85°C) (derate (TBD)W/ ° C above 85 °C | (TBD)mW        |
| Thermal Resistance (R TH ) (junction to ground paddle)      | (TBD) °C/W     |
| Operating Temperature                                       | -40°C to +85°C |
| Storage Temperature                                         | -65°C to 125°C |
| ESD Sensitivity (HBM)                                       | TBD            |

## Outline Drawing

<!-- image -->

<!-- image -->

<!-- image -->

PRELIMINARY

## Package Information

| Part Number   | Package Body Material                              | Lead Finish   | MSL Rating [2]   | Package Marking [1]   |
|---------------|----------------------------------------------------|---------------|------------------|-----------------------|
| HMC485AMS8GE  | RoHS-compliant Low Stress Injection Molded Plastic | 100% matte Sn | MSL1             | H485A XXXX            |

<!-- image -->

<!-- image -->

## Pin Descriptions

| Pin Number   | Function   | Description                                                                                                                                                                                                                                                                                                                                                                  | Pin Schematic   |
|--------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| 1            | LO         | Local Oscillator Port. This pin is ac-coupled and matched to 50 Ohms.                                                                                                                                                                                                                                                                                                        |                 |
| 2            | NIC        | No Internal Connection. These pins are not connected internally.                                                                                                                                                                                                                                                                                                             |                 |
| 3, 6, 7      | GND        | Ground Connect. Connect these pins and package bottom to RF/dc ground.                                                                                                                                                                                                                                                                                                       |                 |
| 4            | Vdd        | Power supply for the LO amplifier. An external bypass capacitor is required.                                                                                                                                                                                                                                                                                                 |                 |
| 5            | IF         | Intermediate Frequency Port. This pin is dc-coupled. For applications not requiring operation to dc, block this pin externally using a series capacitor with a value chosen to pass the necessary IF frequency range. For operation to dc, this pin must not source or sink more than 40 mA of current or device non-functionality or device failure may result. PRELIMINARY |                 |
| 8            | RF         | Radio Frequency port. This pin is dc-coupled and matched to 50 Ohms.                                                                                                                                                                                                                                                                                                         |                 |

## HMC485AMS8GE

v00.0815

## HIGH IP3 GaAs MMIC I/Q MIXER WITH INTEGRATED LO AMPLIFIER, 1.7 - 2.4 GHz

<!-- image -->

<!-- image -->

## Evaluation PCB

<!-- image -->

## Evaluation Order Information

| Item Contents                                   | Part Number        |
|-------------------------------------------------|--------------------|
| Evaluation PCB Only HMC485AMS8GE Evaluation PCB | EV1HMC485AMS8G [1] |

## List of Materials for Evaluation

| Item    | Description                         |
|---------|-------------------------------------|
| J1 - J3 | PCB Mount SMA RF Connector          |
| J4 - J5 | DC Pin                              |
| C1      | 10,000 pF Chip Capacitor, 0603 Pkg. |
| U1      | HMC485AMS8GE Mixer                  |
| PCB [1] | 104813 Evaluation Board             |

PRELIMINARY

[1] Circuit Board Material: Rogers 4350 or Arlon 25FR

## HMC485AMS8GE

v00.0815

## HIGH IP3 GaAs MMIC I/Q MIXER WITH INTEGRATED LO AMPLIFIER, 1.7 - 2.4 GHz

The circuit board used in the application should use RF circuit  design  techniques.  Signal  lines  should have 50 Ohm impedance while the package ground leads  and  exposed  paddle  should  be  connected directly to the ground plane similar to that shown. A sufficient number of via holes should be used to connect  the  top  and  bottom  ground  planes.  The evaluation  circuit  board  shown  is  available  from Analog Devices upon request.