<!-- lastmod 2023-09-25 -->
V1.20

## QMOT QSH6018 MANUAL

+

+

+

+

QSH-6018 -45-28-110

60mm 2.8A, 1.10 Nm

-56-28-165 60mm 2.8A, 1.65 Nm

-65-28-210 60mm 2.8A, 2.10 Nm

-86-28-310 60mm 2.8A, 3.10 Nm

<!-- image -->

<!-- image -->

MOTORS

## Table of Contents

1

Features ...........................................................................................................................................................  3

2

3

4

5

6

7

8

Order Codes .....................................................................................................................................................  4

Mechanical Dimensions ...................................................................................................................................  5

3.1

Lead Wire Configuration  ..........................................................................................................................  5

3.2

Dimensions ..............................................................................................................................................  5

Torque Figures .................................................................................................................................................  6

4.1

Motor QSH6018-45-28-110 .....................................................................................................................  6

4.2

4.3

4.4

Motor QSH6018-56-28-165 .....................................................................................................................  6

Motor QSH6018-65-28-210 .....................................................................................................................  7

Motor QSH6018-86-28-310 .....................................................................................................................  7

Considerations for Operation ..........................................................................................................................  8

5.1

Choosing the Best Fitting Motor for an Application ................................................................................  8

5.1.1

Determining the Maximum Torque Required by Your Application................................................  8

5.2

Motor Current Setting .............................................................................................................................  8

5.2.1

Choosing the Optimum Current Setting  .........................................................................................  9

5.2.2

Choosing the Standby Current .......................................................................................................  9

5.3

Motor Driver Supply Voltage ...................................................................................................................  9

5.3.1

Determining if the Given Driver Voltage is Sufficient ....................................................................  9

5.4

Back EMF (BEMF) ...................................................................................................................................  10

5.5

Choosing the Commutation Scheme .....................................................................................................  11

5.5.1

Fullstepping ..................................................................................................................................  11

5.5.1.1

Avoiding Motor Resonance in Fullstep Operation  ............................................................  11

Optimum Motor Settings ...............................................................................................................................  12

Life Support Policy .........................................................................................................................................  13

Revision History .............................................................................................................................................  14

## 1 Features

These four phase hybrid stepper motors are optimized for microstepping and give a good fit to the TRINAMIC family of motor controllers and drivers.

## MAIN CHARACTERISTICS

- -NEMA 23 mounting configuration
- -flange max. 60.5mm * 60.5mm
- -7.5mm axis diameter, 22.4mm axis length with 20mm D-cut of 0.5mm depth
- -step angle: 1.8˚
- -optimized for microstep operation
- -up to 75V operating voltage

Table 1.1: Motor technical data

| Specifications                        | Parameter       | Units   | QSH6018    | QSH6018    | QSH6018    | QSH6018    |
|---------------------------------------|-----------------|---------|------------|------------|------------|------------|
|                                       |                 |         | -45-28-110 | -56-28-165 | -65-28-210 | -86-28-310 |
| Rated Voltage                         | V RATED         | V       | 2.1        | 2.52       | 3.36       | 4.17       |
| Rated Phase Current (nominal)         | I RMS_RATED_NOM | A       | 2.8        | 2.8        | 2.8        | 2.8        |
| Rated Phase Current (max. continuous) | I RMS_RATED_MAX | A       | 3.0        | 3.0        | 3.0        | 3.0        |
| Phase Resistance at 20°C              | R COIL          | Ω       | 0.75       | 0.9        | 1.2        | 1.5        |
| Phase Inductance (typ.)               |                 | mH      | 2          | 3.6        | 4.6        | 6.8        |
| Holding Torque (typ.)                 |                 | Nm      | 1.1        | 1.65       | 2.1        | 3.1        |
|                                       |                 | oz in   | 156        | 233        | 297        | 439        |
| Detent Torque                         |                 | Ncm     |            |            |            |            |
| Rotor Inertia                         |                 | gcm 2   | 275        | 400        | 570        | 840        |
| Weight (Mass)                         |                 | Kg      | 0.6        | 0.77       | 1.2        | 1.4        |
| Insulation Class                      |                 |         | B          | B          | B          | B          |
| Insulation Resistance                 |                 | Ω       | 100M       | 100M       | 100M       | 100M       |
| Dialectic Strength (for one minute)   |                 | VAC     | 500        | 500        | 500        | 500        |
| Connection Wires                      |                 | N°      | 4          | 4          | 4          | 4          |
| Max applicable Voltage                |                 | V       | 75         | 75         | 75         | 75         |
| Step Angle                            |                 | °       | 1.8        | 1.8        | 1.8        | 1.8        |
| Step angle Accuracy                   |                 | %       | 5          | 5          | 5          | 5          |
| Flange Size (max.)                    |                 | mm      | 60.5       | 60.5       | 60.5       | 60.5       |
| Motor Length (max.)                   | L MAX           | mm      | 45.0       | 56.0       | 65.0       | 86.0       |
| Axis Diameter                         |                 | mm      | 7.5        | 7.5        | 7.5        | 7.5        |
| Axis Length                           |                 | mm      | 22.4       | 22.4       | 22.4       | 22.4       |
| Axis D-cut (0.5mm depth)              |                 | mm      | 20.0       | 20.0       | 20.0       | 20.0       |
| Shaft Radial Play (450g load)         |                 | mm      | 0.02       | 0.02       | 0.02       | 0.02       |
| Shaft Axial Play (450g load)          |                 | mm      | 0.08       | 0.08       | 0.08       | 0.08       |
| Maximum Radial Force                  |                 | N       | 75         | 75         | 75         | 75         |
| Maximum Axial Force                   |                 | N       | 15         | 15         | 15         | 15         |
| Ambient Temperature                   |                 | °C      | -20..+50   | -20..+50   | -20..+50   | -20..+50   |
| Temp Rise (rated current, 2 phase on) |                 | °C      | max. 80    | max. 80    | max. 80    | max. 80    |
| Winding Thermal Time Constant         |                 |         |            |            |            |            |
| Surface Thermal Time Constant         |                 |         |            |            |            |            |

## 2 Order Codes

Table 2.1: Order codes

| Order code                            | Description                           | Dimensions (mm 3 )   |
|---------------------------------------|---------------------------------------|----------------------|
| QMot Steppermotor 60 mm, 2.8A, 1.10Nm | 60 x 60 x 45                          | QSH6018-45-28-110    |
| QMot Steppermotor 60 mm, 2.8A, 1.65Nm | 60 x 60 x 56                          | QSH6018-56-28-165    |
| QMot Steppermotor 60 mm, 2.8A, 2.10Nm | 60 x 60 x 65                          | QSH6018-65-28-210    |
| QSH6018-86-28-310                     | QMot Steppermotor 60 mm, 2.8A, 3.10Nm | 60 x 60 x 86         |

## 3 Mechanical Dimensions

## 3.1 Lead Wire Configuration

Table 3.1: Lead wire configuration

| Cable type   | Gauge        | Coil   | Function           | Length       |
|--------------|--------------|--------|--------------------|--------------|
| Black        | UL1430 AWG22 | A      | Motor coil A pin 1 | 300mm+/-10mm |
| Green        | UL1430 AWG22 | A-     | Motor coil A pin 2 | 300mm+/-10mm |
| Red          | UL1430 AWG22 | B      | Motor coil B pin 1 | 300mm+/-10mm |
| Blue         | UL1430 AWG22 | B-     | Motor coil B pin 2 | 300mm+/-10mm |

## 3.2 Dimensions

<!-- image -->

Figure 3.1: Dimensions (all values in mm)

<!-- image -->

## 4 Torque Figures

The torque figures detail motor torque characteristics for full step operation to allow simple comparison. For half step operation there are always several resonance points (with less torque) which are not depicted. These will be minimized by microstep operation in most applications.

## 4.1 Motor QSH6018-45-28-110

Testing conditions: 30V supply voltage; 3.0A RMS phase current

Figure 4.1: QSH6018-45-28-110 Speed vs. Torque Characteristics

<!-- image -->

## 4.2 Motor QSH6018-56-28-165

Testing conditions: 30V supply voltage; 3.0A RMS phase current

Figure 4.2: QSH6018-56-28-165 Speed vs. Torque Characteristics

<!-- image -->

## 4.3 Motor QSH6018-65-28-210

Testing conditions: 30V supply voltage; 3.0A RMS phase current

Figure 4.3: QSH6018-65-28-210 Speed vs. Torque Characteristics

<!-- image -->

## 4.4 Motor QSH6018-86-28-310

Testing conditions: 30V supply voltage; 3.0A RMS phase current

Figure 4.4: QSH6018-86-28-310 Speed vs. Torque Characteristics

<!-- image -->

## 5 Considerations for Operation

The following chapters try to help you to correctly set the key operation parameters to get a stable system.

## 5.1 Choosing the Best Fitting Motor for an Application

For an optimum solution it is important to fit the motor to the application and to choose the best mode of operation.  The  key  parameters  are  the  desired  motor  torque  and  velocity.  While  the  motor  holding  torque describes the torque at stand-still, and gives a good indication for comparing different motors, it is not the key parameter for the best fitting motor. The required torque is a result of static load on the motor, dynamic loads which occur during acceleration/deceleration and loads due to friction. In most applications the load at maximum desired motor velocity is most critical, because of the reduction of motor torque at higher velocity. While the required velocity generally is well known, the required torque often is only roughly known. Generally, longer motors and motors with a larger diameter deliver a higher torque. But, using the same driver voltage for the motor, the larger motor earlier loses torque when increasing motor velocity. This means, that for a high torque at a high motor velocity, the smaller motor might be the fitting solution. Please refer to the torque vs. velocity diagram to determine the best fitting motor, which delivers enough torque at the desired velocities.

## 5.1.1 Determining the Maximum Torque Required by Your Application

Just try a motor with a torque 3050% above the application's maximum requirement. Take into consideration worst case conditions, i.e., minimum driver supply voltage and minimum driver current, maximum, or minimum environment temperature (whichever is worse) and maximum friction of mechanics. Now, consider that you want to be on the safe side, and add some 10 percent safety margin to consider for unknown degradation of mechanics and motor. Therefore, try to get a feeling for the motor reliability at slightly increased load, especially at maximum velocity. That is also a good test to check the operation at a velocity a little higher than the maximum application velocity.

## 5.2 Motor Current Setting

Basically, the motor torque is proportional to the motor current if the current stays at a reasonable level. At the same time, the power consumption of the motor (and driver) is proportional to the square of the motor current. Optimally, the motor should be chosen to bring the required performance at the rated motor current. For a short time, the motor current may be raised above this level to get increased torque, but care must be taken in order not to exceed the maximum coil temperature of 130°C respectively a continuous motor operation temperature of 90°C.

Table 5.1: Motor current settings

| Percentage rated current   | of   | Percentage motor torque   | of Percentage of static motor power dissipation   | Comment                                                                              |
|----------------------------|------|---------------------------|---------------------------------------------------|--------------------------------------------------------------------------------------|
| 150%                       |      | ≤150%                     | 225%                                              | Limit operation to a few seconds                                                     |
| 125%                       |      | 125%                      | 156%                                              | Operation possible for a limited time                                                |
| 100%                       |      | 100%                      | 100% = 2 * I RMS_RATED * R COIL                   | Normal operation                                                                     |
| 85%                        |      | 85%                       | 72%                                               | Normal operation                                                                     |
| 75%                        |      | 75%                       | 56%                                               | Normal operation                                                                     |
| 50%                        |      | 50%                       | 25%                                               | Reduced microstep exactness due to torque reducing in the magnitude of detent torque |
| 38%                        |      | 38%                       | 14%                                               | - ' -                                                                                |
| 25%                        |      | 25%                       | 6%                                                | - ' -                                                                                |
| 0%                         |      | see detent torque         | 0%                                                | Motor might lose position if the application's friction is too low                   |

## 5.2.1 Choosing the Optimum Current Setting

Generally, you choose the motor to give the desired performance at nominal current. For short time operation, you might want to increase the motor current to get a higher torque than specified for the motor. In a hot environment, you might want to work with a reduced motor current to reduce motor self-heating.

The TRINAMIC drivers allow setting the motor current for up to three conditions:

- -Standstill (choose a low current)
- -Nominal operation (nominal current)
- -High  acceleration  (if  increased  torque  is  required:  You  may  choose  a  current  above  the  nominal setting, but be aware, that the mean power dissipation shall not exceed the motors nominal rating)

## 5.2.2 Choosing the Standby Current

Most applications do not need much torque during motor standstill. You should always reduce the motor current during  standstill.  This  reduces  power  dissipation  and  heat  generation.  Depending  on  your  application,  you typically at least can half power dissipation. There are several aspects why this is possible: In standstill, motor torque is higher than at any other velocity. Thus, you do not need the full current even with a static load! Your application might need no torque at all, but you might need to keep the exact microstep position: Try how low you can go in your application. If the microstep position exactness does not matter for the time of standstill, you might even reduce the motor current to zero if there is no static load on the motor and enough friction to avoid complete position loss.

## 5.3 Motor Driver Supply Voltage

The driver supply voltage in many applications cannot be chosen freely because other components have a fixed supply voltage of, e.g., 24V DC. If you have the possibility to choose the driver supply voltage, please refer to the driver data sheet and consider that a higher voltage means a higher torque at higher velocity. The motor torque diagrams  are  measured  for  a  given  supply  voltage.  You  typically  can  scale  the  velocity  axis  (steps/sec) proportionally to the supply voltage to adapt the curve, e.g., if the curve is measured for 48V and you consider operation at 24V, half all values on the x-Axis to get an idea of the motor performance.

For a chopper driver, consider the following corner values for the driver supply voltage (motor voltage). The table is  based  on  the  nominal  motor  voltage,  which  normally  just  has  a  theoretical  background  to  determine  the resistive loss in the motor.

## Comment on the nominal motor voltage:

(Please refer to motor technical data table.)

<!-- image -->

Table 5.2: Driver supply voltage considerations

| Parameter                           | Value                                  | Comment                                                                                                                                                                                                        |
|-------------------------------------|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Minimum driver supply voltage       | 2 * U COIL_NOM                         | Very limited motor velocity. Only slow movement without torque reduction. Chopper noise might become audible.                                                                                                  |
| Optimum driver supply voltage       | ≥ 4 * U COIL_NOM and ≤ 22 * U COIL_NOM | Choose the best fitting voltage in this range using the motor torque curve and the driver data. You can scale the torque curve proportionally to the actual driver supply voltage.                             |
| Maximum rated driver supply voltage | 25 * U COIL_NOM                        | When exceeding this value, the magnetic switching losses in the motor reach a relevant magnitude and the motor might get too hot at nominal current. Thus, there is no benefit in further raising the voltage. |

## 5.3.1 Determining if the Given Driver Voltage is Sufficient

Try to brake the motor and listen to it at different velocities. Does the sound of the motor get raucous or harsh when exceeding some velocity? Then the motor gets into a resonance area. The reason is that the motor backEMF voltage reaches the supply voltage. Thus, the driver cannot bring the full current into the motor anymore.

This is typically a sign, that the motor velocity should not be further increased, because resonances and reduced current affect motor torque.

Measure the motor coil current at maximum desired velocity

For microstepping: If the waveform is still basically sinusoidal, the motor driver supply voltage is sufficient. For Fullstepping:   If the motor current still reaches a constant plateau, the driver voltage is sufficient.

If you determine that the voltage is not sufficient, you could either increase the voltage or reduce the current (and thus torque).

## 5.4 Back EMF (BEMF)

Within SI units, the numeric value of the BEMF constant has the same numeric value as the numeric value of the torque  constant.  For  example,  a  motor  with  a  torque  constant  of  1  Nm/A  would  have  a  BEMF  constant  of 1V/rad/s. Turning such a motor with 1 rps (1 rps = 1 revolution per second = 6.28 rad/s) generates a BEMF voltage of 6.28V.

The Back EMF constant can be calculated as:

<!-- formula-not-decoded -->

The voltage is valid as RMS voltage per coil, thus the nominal current INOM is multiplied by 2 in this formula, since the nominal current assumes a full step position, with two coils switched on. The torque is in unit [Nm] where 1Nm = 100cNm = 1000mNm.

One can easily measure the BEMF constant of a two-phase stepper motor with a (digital) scope. One just must measure the voltage of one coil (one phase) when turning the axis of the motor manually. With this, one gets a voltage (amplitude) and a frequency of a periodic voltage signal (sine wave). The full step frequency is 4 times the frequency the measured sine wave.

## 5.5 Choosing the Commutation Scheme

While  the  motor  performance  curves  are  depicted  for  fullstepping  and  halfstepping,  most  modern  drivers provide a microstepping scheme. Microstepping uses a discrete sine and a cosine wave to drive both coils of the motor and gives a very smooth motor behavior as well as an increased position resolution. The amplitude of the waves is 1.41 times the nominal motor current, while the RMS values equal the nominal motor current. The stepper motor does not make loud steps anymore -it  turns smoothly! Therefore, 16 microsteps or more are recommended for a smooth operation and the avoidance of resonances. To operate the motor at fullstepping, some considerations should be considered.

Table 5.3 Comparing microstepping and fullstepping

| Driver Scheme                                               | Resolution                                | Velocity range                                                          | Torque                                                                       | Comments                                                              |
|-------------------------------------------------------------|-------------------------------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| Fullstepping                                                | 200 steps per rotation                    | Low to very high. Skip resonance areas in low to medium velocity range. | Full torque if dampener used, otherwise re- duced torque in re- sonance area | Audible noise especially at low velocities                            |
| Halfstepping                                                | 200 steps per rotation * 2                | Low to very high. Skip resonance areas in low to medium velocity range. | Full torque if dampener used, otherwise re- duced torque in re- sonance area | Audible noise especially at low velocities                            |
| Microstepping                                               | 200 * (number of microsteps) per rotation | Low to high.                                                            | Reduced torque at very high velocity                                         | Low noise, smooth motor behavior                                      |
| Mixed: Micro- stepping and fullstepping for high velocities | 200 * (number of microsteps) per rotation | Low to very high.                                                       | Full torque                                                                  | At high velocities, there is no audible difference for full- stepping |

Microstepping  gives  the  best  performance  for  most  applications  and  can  be  considered  as  state-of-the  art. However, fullstepping allows some ten percent higher motor velocities, when compared to microstepping. A combination  of  microstepping  at  low  and  medium  velocities  and  fullstepping  at  high  velocities  gives  best performance at all velocities and is most universal. Most TRINAMIC driver modules support all three modes.

## 5.5.1 Fullstepping

When operating the motor in fullstep, resonances may occur. The resonance frequencies depend on the motor load.  When the motor gets into a resonance area, it even might not  turn anymore!  Thus, you should avoid resonance frequencies.

## 5.5.1.1 Avoiding Motor Resonance in Fullstep Operation

Do  not  operate  the  motor  at  resonance  velocities  for  extended  periods  of  time.  Use  a  reasonably  high acceleration to accelerate to a resonance-free velocity. This avoids the build-up of resonances. When resonances occur at very high velocities, try reducing the current setting.

A resonance dampener might be required if the resonance frequencies cannot be skipped.

## 6 Optimum Motor Settings

Following table shows settings for highest reachable fullstep velocities.

Table 6.1: Optimum motor settings

| Optimum Motor Settings                          | Motor   | Unit   | QSH6018    | QSH6018    |
|-------------------------------------------------|---------|--------|------------|------------|
|                                                 | voltage |        | -65-28-210 | -86-28-310 |
| Motor current (RMS)                             |         | A      | 2.8        | 2.8        |
| Maximum microstep velocity = Fullstep threshold | 24      | RPS    | 1.907      | 1.144      |
| Maximum fullstep velocity                       | 24      | RPS    | 3.815      | 2.575      |
| Maximum microstep velocity = Fullstep threshold | 48      | RPS    | 2.861      | 2.003      |
| Maximum fullstep velocity                       | 48      | RPS    | 7.629      | 5.245      |

## 7 Life Support Policy

TRINAMIC  Motion  Control  GmbH  &amp;  Co.  KG  does  not  authorize  or warrant any of its products for use in life support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.

Life support systems are equipment intended to support or sustain life, and whose failure to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

## © TRINAMIC Motion Control GmbH &amp; Co. KG 2023

Information  given  in  this  data  sheet  is  believed  to  be  accurate  and reliable. However, neither responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties, which may result from its use.

Specifications are subject to change without notice.

Revision History

## 8 Revision History

Table 8.1: Documentation revision

|   Version | Comment         | Description                                                                                |
|-----------|-----------------|--------------------------------------------------------------------------------------------|
|      1    | Initial Release |                                                                                            |
|      1.01 | 2007-JUN-07     | Chapter 5 Optimum motor settings added                                                     |
|      1.02 | 2007-NOV-07     | Chapter 5.4 added                                                                          |
|      1.03 | 2008-FEB-08     | New motors added                                                                           |
|      1.04 | 2010-OCT-14     | Minor changes                                                                              |
|      1.05 | 2011-MAR-19     | Dimensions updated, new front page                                                         |
|      1.06 | 2011-DEC-06     | Features corrected                                                                         |
|      1.07 | 2012-FEB-14     | Axis diameter corrected                                                                    |
|      1.08 | 2014-SEP-04     | Changes related to the design. Tolerances for axis diameter corrected + clarified          |
|      1.09 | 2019-DEC-11     | Motor wire type updated to UL1430 Motor drawings updated. TMCM-109 settings table removed. |
|      1.1  | 2020-AUG-13     | Motor cable length information added. Thermal time constant information added.             |
|      1.2  | 2023-APR-24     | Typos and layout corrected.                                                                |