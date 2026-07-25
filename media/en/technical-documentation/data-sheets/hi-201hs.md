<!-- lastmod 2022-08-04 -->
## MIXIPIM

## High-Speed, CMos, Quad, SPST Analog Switch

## General Description

Maxim's HI-201HS is a monolithic, CMOS, quad, singlepole-single-throw (SPST), high-speed analog switch featuring fast switching times (toFF,toN ≤50ns) and low on resistance (5oΩ max).It is pin compatible with the industry-standardDG201A.

Maxim's new high-voltage silicon-gate technology increases themaximum supply-voltageratingto 44V.This improvement allows continuous operation with ±2oV supplies,whichis notpermittedwith the original manufacturer's devices.Maxim's Hl-201HS operates from dual supplies ranging from ±5V to ±20v, or from single supplies from +12V to +20v.Logic levels are TTL-/CMOS-compatible withsingleor dual supplies within these ranges.

Maxim'sHi-201HSisguaranteed nottolatchupifpower supplies are disconnected while the analog-switch inputs are present, provided the switch continuous-current ratings are not exceeded. When powered up, the Hi-201HS will switch analog signals up to the power-supply rails.

## Applications

Automatic Test Equipment (ATE) Heads-Up Displays Communication Systems Sample-and-Hold Circuits Military Integrator Reset Circuits

## Functional Diagram

<!-- image -->

MAXIM.

## Features

- ◆ Guaranteed Single-Supply Operation: +12V to +20V
- ◆ Guaranteed Dual Supplles: ±5V to ±20V
- ← Fast Switching Times: ton = 30ns toFF = 40ns
- ← Low, 50Ω Max On Resistance
- ← TTL-/CMOS-Compatible
- ← 44V Max Supply Rating

## Ordering Information

| PART         | TEMP.RANGE    | PIN-PACKAGE    |
|--------------|---------------|----------------|
| HI3-0201HS-5 | 0°℃ to +70°℃  | 16 PlasticDIP  |
| HI6-0201HS-5 | 0°℃ to +70°℃  | 16NarrowSO     |
| HI1-0201HS-5 | 0°℃ to+70°℃   | 16CERDIP       |
| HI0-0201HS-6 | 0°℃ to +70℃   | Dice*          |
| HI3-0201HS-9 | -40°℃to +85℃  | 16 Plastic DIP |
| HI6-0201HS-9 | -40°℃to+85℃   | 16 NarrowSO    |
| HI1-0201HS-9 | -40°℃to+85℃   | 16CERDIP       |
| H11-0201HS-2 | -55°℃ to+125℃ | 16 CERDIP      |
| H14-0201HS-8 | -55°℃to+125℃  | 20LCC**        |

- *Contact factory for dice specifications.

** Contact factory for availability.

## Pin Configurations

<!-- image -->

Maxim Integrated Products 1

## s 1 2

## High-Speed, CMoS, Quad, SPsT Analog Switch

## ABSOLUTEMAXIMUMRATINGS

VoltageReferenced toV-

ContinuousPowerDissipation(TA =+70°C,Note 2)

V+

44V

16-Pin DIP(derate 10.53mW/C above +70°C) ... .. 842mW

GND.

25V

16-PinWideSO(derate9.52mW/C above+70°C)...762mW

Digital Inputs Vs, VD (Note 1) .. . (V- - 4V) to (V+ + 4V) or 30mA

16-Pin CERDIP(derate10.00mW/C above+70°C)..800mW

(whichever occurs first)

20-Pin LCC(derate 9.09mW/C above +70°C) .. .... 727mW

Current(any terminal,except S or D)

30mA

OperatingTemperatureRanges:

Continuous Current, S or D.....

20mA

HI-0201HS-5/-6

0°℃ to +70℃℃

Peak Current, S or D

HI-0201HS-9

-40°℃ to+85°℃

(pulsed at 1ms,10% duty cycle max)..

40mA

HI-0201HS-2/-8

-55°C to +125℃

StorageTemperatureRange

.-65°℃ to +150°℃

LeadTemperature(soldering,10sec)

......+300°℃

Note1:SignalsonSx,Dx,orINxexceedingV+orV-areclampedbyinternaldiodes.Limitforwardcurrenttomaximumcurrent

Note2:AllleadssolderedorweldedtoPCboard.

ratings.

StressesbeyondthoselistedunderAbsoluteMaximumRatings'maycausepermanentdamagetothedevice.Thesearestressratingsonly,andfunctional operationofthedeviceattheseoranyotherconditionsbeyondthoseindicatedintheoperationalsectionsofthespecificationsisnotimplied.Exposureto absolutemaximumratingconditionsforextendedperiodsmayaffectdevicereliability.

## ELECTRICAL CHARACTERISTICS

(V+ = 15V, V- = -15V, GND = OV, TA = +25°C, unless otherwise noted.)

|                                       |             |                                                    | HI-201HS-2/-8                   | HI-201HS-2/-8   | HI-201HS-2/-8   | HI-201HS-5/-6/-9   | HI-201HS-5/-6/-9   | HI-201HS-5/-6/-9   |                |
|---------------------------------------|-------------|----------------------------------------------------|---------------------------------|-----------------|-----------------|--------------------|--------------------|--------------------|----------------|
| PARAMETER                             | SYMBOL      | CONDITIONS                                         | MIN (Note3)                     | TYP (Note 4)    | MAX             | MIN (Note 3)       | TYP (Note 4)       |                    | MAX&#124;UNITS |
| SWITCH                                | SWITCH      | SWITCH                                             | SWITCH                          | SWITCH          | SWITCH          | SWITCH             | SWITCH             | SWITCH             | SWITCH         |
| Analog-Signal Range                   | VANALOG     |                                                    | -15                             |                 | 15              | -15                |                    | 15                 | V              |
| Drain-Source On Resistance (Note 5)   | rDS (on)    | VD = ±10V, VIN = 0.8V, Is = 1mA                    | VD = ±10V, VIN = 0.8V, Is = 1mA | 30              | 50              |                    | 30                 | 50                 | Ω              |
| Source-Off Leakage Current            | Is (off)    | VIN = 3.0V                                         | Vs = 14V, VD = -14V -1          | ±0.01           | 1               | -1                 | ±0.01              | 1                  | nA             |
|                                       | Is (off)    | VIN = 3.0V                                         | Vs = -14V,VD = 14V -1           | ±0.02           | 1               | -1                 | ±0.02              | 1                  | nA             |
| Drain-Off Leakage Current             | ID (off)    | VIN = 3.0V VD = 14V, Vs = -14V VD = -14V, Vs = 14V | -1                              | ±0.01           | 1               | -1                 | ±0.01              | 1                  | nA             |
| Drain-Off Leakage Current             | ID (off)    | VIN = 3.0V VD = 14V, Vs = -14V VD = -14V, Vs = 14V | -1                              | ±0.02           | 1               | -1                 | ±0.02              | 1                  | nA             |
| Drain-On Leakage Current (Note 6)     | ID (on)     | VD = -14V, VIN = 0.8V -1                           | VD = -14V, VIN = 0.8V -1        | ±0.10           | 1               | -1                 | ±0.10              | ，                  | nA             |
| Drain-On Leakage Current (Note 6)     | ID (on)     | VD = 14V, VIN = 0.8V -1                            | VD = 14V, VIN = 0.8V -1         | ±0.15           | 1               | -1                 | ±0.15              | 1                  | nA             |
| LOGIC INPUT                           | LOGIC INPUT | LOGIC INPUT                                        | LOGIC INPUT                     | LOGIC INPUT     | LOGIC INPUT     | LOGIC INPUT        | LOGIC INPUT        | LOGIC INPUT        | LOGIC INPUT    |
| Input Current with Input Voltage High | INH         | VIN = 3.0V                                         | -1                              | 0               | 1               | -1                 | 0                  | 1                  | μA             |
| Input Current with Input Voltage High | INH         | VIN = 15V                                          | -1                              | 0               | 1               | -1                 | 0                  | 1                  | μA             |
| Input Current with Input VoltageLow   | INL         | VIN = 0.8V                                         | -1                              | 0               | 1               | -1                 | 0                  | 1                  | μA             |

## High-Speed, CMos, Quad, SPST Analog Switch

## ELECTRICAL CHARACTERISTICS (continued)

(V+ = 15V, V-= -15V, GND = 0V, TA = +25°C, unless otherwise noted.)

| PARAMETER                                  | SYMBOL           | CONDITIONS                      |          | HI-201HS-2/-8   |                  |     | HI-201HS-5/-6/-9   |              |     |       |
|--------------------------------------------|------------------|---------------------------------|----------|-----------------|------------------|-----|--------------------|--------------|-----|-------|
|                                            |                  |                                 |          | MIN (Note 3)    | TYP MAX (Note 4) |     | MIN (Note 3)       | TYP (Note 4) | MAX | UNITS |
| DYNAMIC                                    |                  |                                 |          |                 |                  |     |                    |              |     |       |
| Turn-On Time                               | ton              | Figure 6                        |          | 30              | 50               |     |                    | 30           | 50  | ns    |
| Turn-Off Time                              | toff             | Figure 6                        |          | 40              | 50               |     |                    | `40          | 50  | ns    |
|                                            | toff2            |                                 |          | 150             |                  |     |                    | 150          |     |       |
| Output Settling Time                       |                  |                                 |          | 180             |                  |     |                    | 180          |     | ns    |
| Charge Injection                           | Q                | CL=1000pF.VGEN=0V,RGEN=0Q       |          | 10              |                  |     |                    | 10           |     | pC    |
| Source-Off Capacitance                     | Cs (off)         | Vs = 0V, Vin = 5V               | f=140kHz | 10              |                  |     |                    | 10           |     | PF    |
| Drain-OffCapacitance                       | CD (off)         | Vs =0V,VIN=5V                   | f=140kHz | 10              |                  |     |                    | 10           |     | pF    |
| Channel-On Capacitance                     | CD (on)+ Cs (on) | VD =VS =OV,VIN= OV              | f=140kHz | 30              |                  |     |                    | 30           |     | pF    |
| Off Isolation                              |                  | VIN = 3VRMS,ZL = 1kΩ,f = 100kHz |          | 72              |                  |     |                    | 72           |     | dB    |
| Crosstalk (Channel-to-Channel)             |                  | Vs = 2.0V,f=100kHz              |          | 06              |                  |     |                    | 06           |     | dB    |
| SUPPLY                                     |                  |                                 |          |                 |                  |     |                    |              |     |       |
| Positive Supply Current                    | 1+               | All channels on or off          |          | -3.0 3.8        | 6.5              |     | -3.0               | 3.8          | 6.5 | mA    |
| Negative Supply Current                    | I-               |                                 |          | 1.0             |                  |     |                    | 1.0          |     | mA    |
| Power-Supply Range forContinuous Operation | VoP              | (Note 5)                        |          | ±4.5            |                  | ±20 | ±4.5               |              | ±20 | V     |

3

## s 1 20

## High-Speed, CMos, Quad, SPST Analog Switch

## ELECTRICALCHARACTERISTICS

(V+ = 15V, V- = -15V, GND = OV, TA = TMIN to TMAX, unless otherwise noted.)

| PARAMETER                             | SYMBOL   | CONDITIONS              |                         | HI-201HS-2/-8        | HI-201HS-2/-8   | HI-201HS-5/-6/-9   | HI-201HS-5/-6/-9   |   HI-201HS-5/-6/-9 |                 |
|---------------------------------------|----------|-------------------------|-------------------------|----------------------|-----------------|--------------------|--------------------|--------------------|-----------------|
|                                       |          |                         |                         | MIN (Note 3)(Note 4) | TYP MAX         | MIN (Note3)(       | TYP (Note 4)       |                    | MAX &#124;UNITS |
| SWITCH                                |          |                         |                         |                      |                 |                    |                    |                    |                 |
| Analog-Signal Range                   | VANALOG  |                         |                         | -15                  |                 | 15 -15             |                    |                 15 | V               |
| Drain-Source On Resistance (Note 5)   | rDS (on) | VD=±10V,VIN=0.8V,IS=1mA | VD=±10V,VIN=0.8V,IS=1mA |                      | 75              |                    |                    |                 75 | Ω               |
| Source-Off Leakage Current            | Is (off) | VIN = 3.0V              | Vs = 14V, VD = -14V     | -100                 |                 | 100 -50            |                    |                 50 | nA              |
|                                       | Is (off) | VIN = 3.0V              | Vs = -14V, VD = 14V     | -100                 | 100             | -50                |                    |                 50 | nA              |
| Drain-OffLeakage Current              | ID (off) | VIN = 3.0V              | VD = 14V, Vs = -14V     | -100                 | 100             | -50                |                    |                 50 | nA              |
| Drain-OffLeakage Current              | ID (off) | VIN = 3.0V              | VD = -14V, Vs = 14V     | -100                 | 100             | -50                |                    |                 50 | nA              |
| Drain-On Leakge Current (Note 6)      | ID (on)  | VD = -14V, VIN = 0.8V   | VD = -14V, VIN = 0.8V   | -100                 | 100             | -50                |                    |                 50 | nA              |
| Drain-On Leakge Current (Note 6)      | ID (on)  | VD = 14V, VIN = 0.8V    | VD = 14V, VIN = 0.8V    | -100                 | 100             | -50                |                    |                 50 | nA              |
| LOGIC INPUT                           |          |                         |                         |                      |                 |                    |                    |                    |                 |
| Input Current with Input Voltage High | INH      | VIN = 3.0V              |                         | -1.0                 | 1.0             | -1.0               |                    |                1.0 | μA              |
| Input Current with Input Voltage High | INH      | VIN = 15V               |                         | -1.0                 | 1.0             | -1.0               |                    |                1.0 | μA              |
| Input Currentwith Input Voltage Low   | INL      | VIN = 0.8V              |                         | -1.0                 | 1.0             | -1.0               |                    |                1.0 | μA              |
| DYNAMIC                               |          |                         |                         |                      |                 |                    |                    |                    |                 |
| Turn-On Time                          | ton      | See Figure 6            |                         |                      | 75              |                    |                    |                 75 | ns              |
| Turn-Off Time                         | toff     | See Figure 6            |                         |                      | 75              |                    |                    |                 75 | ns              |
| SUPPLY                                |          |                         |                         |                      |                 |                    |                    |                    |                 |
| PositiveSupply Current                | I+       | All channelsonoroff     |                         |                      | 10              |                    |                    |                 10 | mA              |
| Negative Supply Current               | 1-       | All channels on or off  |                         | 6                    |                 | 6                  |                    |                    | mA              |

MAXIM

Note6:ID(on)isleakagefromdriverintoonswitch.

## High-Speed, CMos, Quad, SPST Analog Switch

## Protecting Against Fault Conditions

Fault conditions occur when power supplies are turned off and input signals are still present, or when overvoltages occur at the inputs during normal operation. In either case, source-to-body diodes can be forward biased and conduct current from thesignal source.If this currentmust bekept at low(uA) levels,werecommend adding external protection diodes (Figure 1).

To provide protection for overvoltages up to 2oV above the supplies, place a 1N4001 or iN914 type diode in series with the positive and negative supplies, as shown in Figure 1. Adding these diodes will reduce the analogsignal range to 1V below the positive supply and 1v above the negative supply.

Figure1.ProtectionAgainstFaultConditions

<!-- image -->

Figure 3.On Leakage Current

<!-- image -->

WWIXVWW

Figure 2.On Resistance

<!-- image -->

Figure4.OffLeakageCurrent

<!-- image -->

5

## High-Speed, CMos, Quad, SPsT Analog Switch

Figure 6.Switching-Tlme TestCircuit

<!-- image -->

6

## High-Speed, CMOS, Quad, SPST Analog Switch

## Package Information

|       | INCHES   | INCHES   | MILLIMETERS   | MILLIMETERS   |
|-------|----------|----------|---------------|---------------|
| DIM   | MIN      | MAX      | MIN           | MAX           |
| A     | 0.053    | 0.069    | 1.35          | 1.75          |
| A1    | 0.004    | 0.010    | 0.10          | 0.25          |
| B     | 0.014    | 0.019    | 0.35          | 0.49          |
| C     | 0.007    | 0.010    | 0.19          | 0.25          |
| E     | 0.150    | 0.157    | 3.80          | 4.00          |
| 0.050 | 0.050    | 0.050    | 1.27          | 1.27          |
| H     | 0.228    | 0.244    | 5.80          | 6.20          |
| L     | 0.016    | 0.050    | 0.40          | 1.27          |

<!-- image -->

## High-Speed, CMos, Quad, SPST Analog Switch

## Package Information (continued)

| DIM   | PINS   | INCHES   | INCHES   | MILLIMETERS   | MILLIMETERS   |
|-------|--------|----------|----------|---------------|---------------|
|       | PINS   | MIN      | MAX      | MIN           | MAX           |
| D     | 8      | 二        | 0.405    |               | 10.29         |
| D     | 14     | 二        | 0.785    | 二             | 19.94         |
| D     | 16     |          | 0.840    | 二             | 21.34         |
| D     | 18     | 二        | 0.960    | 二             | 24.38         |
| D     | 20     | 二        | 1.060    | 二             | 26.92         |
| D     | 24     | 二        | 1.280    | 二             | 32.51         |

<!-- image -->

MaximcannotassumeresponsibilityforuseofanycircuitryotherthancircuitryentirelyembodiedinaMaximproduct.Nocircuitpatentlicensesare implied.Maximreservestherighttochangethecircuitryandspecificationswithoutnoticeatanytime.

<!-- image -->

8

Maxim IntegratedProducts, 120 San Gabrlel Drlve, Sunnyvale, CA 94086 (408) 737-7600

<!-- image -->