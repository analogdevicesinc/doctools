<!-- lastmod 2023-09-25 -->
V2.6

## QMOT QSH5718 MANUAL

+

+

<!-- image -->

TRINAMIC Motion Control GmbH &amp; Co. KG Hamburg, Germany www.trinamic.com

+

+

<!-- image -->

QSH-5718

-41-28-055

57mm 2.8A, 0.55Nm

-51-28-101 57mm 2.8A, 1.01Nm

-56-28-126 57mm 2.8A, 1.26Nm

-76-28-189

57mm 2.8A, 1.89Nm

## Contents

1

Life Support Policy ......................................................................................................................................................  3

2

3

4

5

6

7

Features ......................................................................................................................................................................  4

Order Codes ................................................................................................................................................................  5

Mechanical Dimensions ..............................................................................................................................................  6

4.1

Dimensions .........................................................................................................................................................  6

4.2

Leadwire Configuration ......................................................................................................................................  7

Torque Figures ............................................................................................................................................................  8

5.1

QSH5718-41-28-055 ...........................................................................................................................................  8

5.2

5.3

5.4

QSH5718-51-28-101 ...........................................................................................................................................  9

QSH5718-56-28-126 ...........................................................................................................................................  9

QSH5718-76-28-189 .........................................................................................................................................  10

Considerations for Operation ...................................................................................................................................  11

6.1

Choosing the best fitting motor for an application ..........................................................................................  11

6.2

Motor Current Setting ......................................................................................................................................  11

6.2.1

Choosing the optimum current setting ...................................................................................................  12

6.2.2

Choosing the standby current .................................................................................................................  12

6.3

Motor Driver Supply Voltage ............................................................................................................................  12

6.3.1

Determining if the given driver voltage is sufficient ...............................................................................  12

6.4

Back EMF (BEMF) ..............................................................................................................................................  13

6.5

Choosing the Commutation Scheme ................................................................................................................  14

6.5.1

Fullstepping .............................................................................................................................................  14

Revision History ........................................................................................................................................................  15

## 1 Life Support Policy

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.

Life support systems are equipment intended to support or sustain life,  and  whose  failure  to  perform,  when  properly  used  in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

## © TRINAMIC Motion Control GmbH &amp; Co. KG 2023

Information given in this data sheet is believed to be accurate and reliable. However,  neither responsibility is assumed  for the consequences  of  its  use  nor  for  any  infringement  of  patents  or other rights of third parties, which may result from its use.

Specifications are subject to change without notice.

## 2 Features

These two-phase hybrid stepper motors are optimized for microstepping and give a good fit to the TRINAMIC family of motor controllers and drivers.

## Characteristics:

- NEMA 23 mounting configuration
- 6.35mm axis diameter, 20mm axis length
- step angle 1.8
- optimized for microstep operation
- optimized fit for TMC239/TMC249/TMC262 based driver circuits
- 4 wire connection
- flange max. 56.5mm x 56.5mm
- D-cut of 15mm length and 0.5mm depth
- up to 75V recommended operation voltage

Table 2.1: Specifications of QSH5718-41-28-055, QSH5718-51-28-101, QSH5718-56-28-126, and QSH5718-76-28-189

| Specifications                             | Paramet er   | Units   | QSH5718    | QSH5718    | QSH5718   | QSH5718    |
|--------------------------------------------|--------------|---------|------------|------------|-----------|------------|
| Specifications                             | Paramet er   | Units   | -41-28-055 | -51-28-101 | 56-28-126 | -76-28-189 |
| Number of Leads                            |              | N˚      | 4          | 4          | 4         | 4          |
| Step Angle                                 |              | ˚       | 1.8        | 1.8        | 1.8       | 1.8        |
| Step Angle Accuracy                        |              | %       | 5          | 5          | 5         | 5          |
| Rated Voltage                              | V RATED      | V       | 2          | 2.3        | 2.5       | 3.2        |
| Rated Phase Current                        | I RMS RATED  | A       | 2.8        | 2.8        | 2.8       | 2.8        |
| Phase Resistance at 20°C                   | R COIL       | Ω       | 0.7        | 0.83       | 0.9       | 1.13       |
| Phase Inductance (typ.)                    |              | mH      | 1.4        | 2.2        | 2.5       | 3.6        |
| Holding Torque                             |              | Nm      | 0.55       | 1.01       | 1.26      | 1.89       |
| Detent Torque                              |              | Nm      | 0.020      | 0.035      | 0.039     | 0.066      |
| Rotor Inertia                              |              | g cm 2  | 120        | 275        | 300       | 480        |
| Insulation Class                           |              |         | B          | B          | B         | B          |
| Max. applicable voltage                    |              | V       | 75         | 75         | 75        | 75         |
| Max. radial force (20mm from front flange) |              | N       | 75         | 75         | 75        | 75         |
| Max. axial force                           |              | N       | 15         | 15         | 15        | 15         |
| Weight                                     |              | kg      | 0.45       | 0.65       | 0.7       | 1          |
| Length                                     |              | mm      | 41         | 51         | 56        | 76         |
| Temp. Rise (rated current, 2 phase on)     |              | ˚C      | +80 max    | +80 max    | +80 max   | +80 max    |
| Ambient Temperature                        |              | ˚C      | -20 +50    | -20 +50    | -20 +50   | -20 +50    |
| Winding thermal time constant              |              | min     | 22         | 22         | 24        | 30         |
| Surface thermal time constant              |              | min     | 30         | 30         | 33        | 39         |

## 3 Order Codes

The length of the motor is specified without the length of the axis. For the total length of the product add 24mm.

Table 3.1: Order codes

| Order code        | Description                          | Dimensions (mm 3 )   | Length       |
|-------------------|--------------------------------------|----------------------|--------------|
| QSH5718-41-28-055 | QMot stepper motor 57mm 2.8A, 0.55Nm | 56.5 x 56.5 x 41     | 300mm+/-10mm |
| QSH5718-51-28-101 | QMot stepper motor 57mm 2.8A, 1.01Nm | 56.5 x 56.5 x 51     | 300mm+/-10mm |
| QSH5718-56-28-126 | QMot stepper motor 57mm 2.8A, 1.26Nm | 56.5 x 56.5 x 56     | 300mm+/-10mm |
| QSH5718-76-28-189 | QMot stepper motor 57mm 2.8A, 1.89Nm | 56.5 x 56.5 x 76     | 300mm+/-10mm |

## 4 Mechanical Dimensions

## 4.1 Dimensions

<!-- image -->

Figure 4.1: Dimensions of QSH5718. All values in mm.

| Motor              |   Length (mm) |
|--------------------|---------------|
| QSH5718-41-28- 055 |            41 |
| QSH5718-51-28- 101 |            51 |
| QSH5718-56-28- 126 |            56 |
| QSH5718-76-28- 189 |            76 |

## 4.2 Leadwire Configuration

<!-- image -->

Figure 4.2: Leadwire configuration

| Cable type 1   | Gauge        | Coil   | Function           |
|----------------|--------------|--------|--------------------|
| Black          | UL1430 AWG22 | A      | Motor coil A pin 1 |
| Green          | UL1430 AWG22 | A-     | Motor coil A pin 2 |
| Red            | UL1430 AWG22 | B      | Motor coil B pin 1 |
| Blue           | UL1430 AWG22 | B-     | Motor coil B pin 2 |

## 5 Torque Figures

The torque figures detail motor torque characteristics for half step operation in order to allow simple comparison for half step operation there are always a number of resonance points (with less torque) which are not depicted. These will be minimized by microstep operation in most applications.

## 5.1 QSH5718-41-28-055

VM: 30V, 2,8A/Phase

Figure 5.1: QSH5718-41-28-055 speed vs. torque characteristics

<!-- image -->

## 5.2 QSH5718-51-28-101

VM: 30V, 2,8A/Phase

Figure 5.2: QSH-5718-51-28-101 speed vs. torque characteristics

<!-- image -->

## 5.3 QSH5718-56-28-126

VM: 30V, 2,8A/Phase

Figure 5.3: QSH5718-56-28-126 speed vs. torque characteristics

<!-- image -->

## 5.4 QSH5718-76-28-189

VM: 30V, 2,8A/Phase

Figure 5.4: QSH5718-76-28-189 speed vs. torque characteristics

<!-- image -->

## 6 Considerations for Operation

The following chapters try to help you to correctly set the key operation parameters to get a stable system.

## 6.1 Choosing the best fitting motor for an application

For an optimum solution it is important to fit the motor to the application and to choose the best mode of operation. The key parameters are the desired motor torque and velocity. While the motor holding torque describes the torque at stand-still, and gives a good indication for comparing different motors, it is not the key parameter for the best fitting motor. The required torque is a result of static load on the motor, dynamic  loads which occur during acceleration/deceleration and loads due to friction. In most applications the load at maximum desired motor velocity is most critical, because of the reduction of motor torque at higher velocity. While the required velocity generally is well known, the required torque often is only roughly known. Generally, longer motors and motors with a larger diameter deliver a higher torque. But, using the same driver voltage for the motor, the larger motor earlier loses torque when increasing motor velocity. This means, that for a high torque at a high motor velocity, the smaller motor might be the better fitting solution.

Please refer to the torque vs. velocity diagram to determine the best fitting motor, which delivers enough torque at the desired velocities.

## Determining the maximum torque required by your application

Just try a motor with a torque 30-50% above the appli cation's maximum requirement. Take into consideration worst case conditions, i.e., minimum driver supply voltage and minimum driver current, maximum, or minimum environment temperature (whichever is worse) and maximum friction of mechanics. Now, consider that you want to be on the safe side, and add some 10 percent safety margin to consider for unknown degradation of mechanics and motor. Therefore, try to get a feeling for the motor reliability at slightly increased load, especially at maximum velocity. That is also a good test to check the operation at a velocity a little higher than the maximum application velocity.

## 6.2 Motor Current Setting

Basically, the motor torque is proportional to the motor current if the current stays at a reasonable level. At the same time, the power consumption of the motor (and driver) is proportional to the square of the motor current. Optimally, the motor should be chosen to bring the required performance at the rated motor current. For a short time, the motor current may be raised above this level to get increased torque, but care must be taken in order not to exceed the maximum coil temperature of 130°C respectively a continuous motor operation temperature of 90°C.

Table 6.1: Motor current settings

| Percentage of rated current   | Percentage of motor torque   | Percentage of static motor power dissipation   | Comment                                                                              |
|-------------------------------|------------------------------|------------------------------------------------|--------------------------------------------------------------------------------------|
| 150%                          | ≤150%                        | 225%                                           | Limit operation to a few seconds                                                     |
| 125%                          | 125%                         | 156%                                           | Operation possible for a limited time                                                |
| 100%                          | 100%                         | 100% = 2 * I RMS_RATED * R COIL                | Normal operation                                                                     |
| 85%                           | 85%                          | 72%                                            | Normal operation                                                                     |
| 75%                           | 75%                          | 56%                                            | Normal operation                                                                     |
| 50%                           | 50%                          | 25%                                            | Reduced microstep exactness due to torque reducing in the magnitude of detent torque |
| 38%                           | 38%                          | 14%                                            | - ' -                                                                                |
| 25%                           | 25%                          | 6%                                             | - ' -                                                                                |
| 0%                            | see detent torque            | 0%                                             | Motor might lose position if the application's friction is too low                   |

## 6.2.1 Choosing the optimum current setting

Generally, you choose the motor to give the desired performance at nominal current. For short time operation, you might want to increase the motor current to get a higher torque than specified for the motor. In a hot environment, you might want to work with a reduced motor current to reduce motor self-heating.

The Trinamic drivers allow setting the motor current for up to three conditions:

- -Standstill (choose a low current)
- -Nominal operation (nominal current)
- -High acceleration (if increased torque is required: You may choose a current above the nominal setting, but be aware, that the mean power dissipation shall not exceed the motors nominal rating)

## 6.2.2 Choosing the standby current

Most applications do not need much torque during motor standstill. You should always reduce the motor current during standstill. This reduces power dissipation and heat generation. Depending on your application, you typically at least can half power dissipation. There are several aspects why this is possible: In standstill, motor torque is higher than at any other velocity. Thus, you do not need the full current even with a static load! Your application might need no torque at all, but you might need to keep the exact microstep position: Try how low you can go in your application. If  the  microstep  position  exactness does not matter for the time of standstill, you might even reduce the motor current to zero if there is no static load on the motor and enough friction to avoid complete position loss.

## 6.3 Motor Driver Supply Voltage

The driver supply voltage in many applications cannot be chosen freely because other components have a fixed supply voltage of, e.g., 24V DC. If you have the possibility to choose the driver supply voltage, please refer to the driver data sheet and consider that a higher voltage means a higher torque at higher velocity. The motor torque diagrams are measured for a given supply voltage. You typically can scale the velocity axis (steps/sec) proportionally to the supply voltage to adapt the curve, e.g., if the curve is measured for 48V and you consider operation at 24V, half all values on the x-Axis to get an idea of the motor performance.

For a chopper driver, consider the following corner values for the driver supply voltage (motor voltage). The table is based on the nominal motor voltage, which normally just has a theoretical background to determine the resistive loss in the motor.

## Comment on the nominal motor voltage:

(Please refer to motor technical data table.)

<!-- image -->

Table 6.2: Driver supply voltage considerations

| Parameter                           | Value                                  | Comment                                                                                                                                                                                                        |
|-------------------------------------|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Minimum driver supply voltage       | 2 * U COIL_NOM                         | Very limited motor velocity. Only slow movement without torque reduction. Chopper noise might become audible.                                                                                                  |
| Optimum driver supply voltage       | ≥ 4 * U COIL_NOM and ≤ 22 * U COIL_NOM | Choose the best fitting voltage in this range using the motor torque curve and the driver data. You can scale the torque curve proportionally to the actual driver supply voltage.                             |
| Maximum rated driver supply voltage | 25 * U COIL_NOM                        | When exceeding this value, the magnetic switching losses in the motor reach a relevant magnitude and the motor might get too hot at nominal current. Thus, there is no benefit in further raising the voltage. |

## 6.3.1 Determining if the given driver voltage is sufficient

Try to brake the motor and listen to it at different velocities. Does the sound of the motor get raucous or harsh when exceeding some velocity? Then the motor gets into a resonance area. The reason is that the motor back-EMF voltage reaches the supply voltage. Thus, the driver cannot bring the full current into the motor anymore. This is typically a

sign, that the motor velocity should not be further increased, because resonances and reduced current affect motor torque.

Measure the motor coil current at maximum desired velocity

For microstepping:

If the waveform is still basically sinusoidal, the motor driver supply voltage is sufficient.

For Fullstepping:

If the motor current still reaches a constant plateau, the driver voltage is sufficient.

If you determine that the voltage is not sufficient, you could either increase the voltage or reduce the current (and thus torque).

## 6.4 Back EMF (BEMF)

Within SI units, the numeric value of the BEMF constant has the same numeric value as the numeric value of the torque constant. For example, a motor with a torque constant of 1 Nm/A would have a BEMF constant of 1V/rad/s. Turning such a motor with 1 rps (1 rps = 1 revolution per second = 6.28 rad/s) generates a BEMF voltage of 6.28V.

## The Back EMF constant can be calculated as:

<!-- formula-not-decoded -->

The voltage is valid as RMS voltage per coil, thus the nominal current INOM is multiplied by 2 in this formula, since the nominal current assumes a full step position, with two coils switched on. The torque is in unit [Nm] where 1Nm = 100cNm = 1000mNm.

One can easily measure the BEMF constant of a two-phase stepper motor with a (digital) scope. One just must measure the  voltage  of  one  coil  (one  phase)  when  turning  the  axis  of  the  motor  manually.  With  this,  one  gets  a  voltage (amplitude) and a frequency of a periodic voltage signal (sine wave). The full step frequency is 4 times the frequency the measured sine wave.

## 6.5 Choosing the Commutation Scheme

While the motor performance curves are depicted for fullstepping and halfstepping, most modern drivers provide a microstepping scheme. Microstepping uses a discrete sine and a cosine wave to drive both coils of the motor and gives a very smooth motor behavior as well as an increased position resolution. The amplitude of the waves is 1.41 times the nominal motor current, while the RMS values equal the nominal motor current. The stepper motor does not make loud steps anymore -it turns smoothly! Therefore, 16 microsteps or more are recommended for a smooth operation and the avoidance of resonances. To operate the motor at fullstepping, some considerations should be considered.

Table 6.3: Comparing microstepping and fullstepping

| Driver Scheme                                                 | Resolution                                | Velocity range                                                          | Torque                                                                   | Comments                                                              |
|---------------------------------------------------------------|-------------------------------------------|-------------------------------------------------------------------------|--------------------------------------------------------------------------|-----------------------------------------------------------------------|
| Fullstepping                                                  | 200 steps per rotation                    | Low to very high. Skip resonance areas in low to medium velocity range. | Full torque if dampener used, otherwise reduced torque in resonance area | Audible noise especially at low velocities                            |
| Halfstepping                                                  | 200 steps per rotation * 2                | Low to very high. Skip resonance areas in low to medium velocity range. | Full torque if dampener used, otherwise reduced torque in resonance area | Audible noise especially at low velocities                            |
| Microstepping                                                 | 200 * (number of microsteps) per rotation | Low to high.                                                            | Reduced torque at very high velocity                                     | Low noise, smooth motor behavior                                      |
| Mixed: Micro- stepping and full- stepping for high velocities | 200 * (number of microsteps) per rotation | Low to very high.                                                       | Full torque                                                              | At high velocities, there is no audible difference for full- stepping |

Microstepping gives the best performance for most applications and can be considered as state-of-the art. However, fullstepping  allows  some  ten  percent  higher  motor  velocities,  when  compared  to  microstepping.  A  combination  of microstepping at low and medium velocities and fullstepping at high velocities gives best performance at all velocities and is most universal. Most Trinamic driver modules support all three modes.

## 6.5.1 Fullstepping

When operating the motor in fullstep, resonances may occur. The resonance frequencies depend on the motor load. When the  motor  gets  into  a  resonance  area,  it  even  might  not  turn  anymore!  Thus,  you  should  avoid  resonance frequencies.

## 6.5.1.1 Avoiding motor resonance in fullstep operation

Do not operate the motor at resonance velocities for extended periods of time. Use a reasonably high acceleration to accelerate to a resonance-free velocity. This avoids the build-up of resonances. When resonances occur at very high velocities, try reducing the current setting.

A resonance dampener might be required if the resonance frequencies cannot be skipped.

## 7 Revision History

Table 7.1: Documentation revision

|   Version | Comment         | Description                                                                                                                         |
|-----------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------|
|      1    | Initial Release |                                                                                                                                     |
|      1.01 | 20-Jun-07       | Chapter 0 Optimum motor settings added                                                                                              |
|      1.02 | 24-Oct-07       | Torque figures corrected                                                                                                            |
|      1.03 | 13-Nov-07       | Chapter 6.4 Back EMF (BEMF) added                                                                                                   |
|      1.04 | 2008-04-01      | New picture added, minor corrections                                                                                                |
|      2    | 2009-05-14      | New version of the document with QSH5718-41-28-055/ -51-28-101/-56-28-126/-76-28-189 included                                       |
|      2.1  | 2010-SEP-25     | Dimensions of QSH5718-41-28-055/-51-28-101/-56-28-126/ -76-28-189 corrected. Torque characteristics of QSH5718-56-28-126 corrected. |
|      2.2  | 2010-OCT-18     | Information about outdated motors delighted.                                                                                        |
|      2.3  | 2011-APR-12     | Drawing of dimensions with D-Cut and rear hole completed, new front page                                                            |
|      2.4  | 2019-DEC-11     | Motor wire type updated to UL1430 Motor drawing updated.                                                                            |
|      2.5  | 2020-AUG-13     | Motor cable length information added. Thermal time constant information added.                                                      |
|      2.6  | 2023-APR-24     | Typos and layout corrected.                                                                                                         |