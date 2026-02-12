from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Delete existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create Teams
        marvel = Team.objects.create(name='Team Marvel', members=[])
        dc = Team.objects.create(name='Team DC', members=[])

        # Create Users
        tony = User.objects.create(name='Tony Stark', email='tony@marvel.com', team=marvel.name)
        steve = User.objects.create(name='Steve Rogers', email='steve@marvel.com', team=marvel.name)
        bruce = User.objects.create(name='Bruce Wayne', email='bruce@dc.com', team=dc.name)
        clark = User.objects.create(name='Clark Kent', email='clark@dc.com', team=dc.name)

        # Add users to teams
        marvel.members = [tony.email, steve.email]
        marvel.save()
        dc.members = [bruce.email, clark.email]
        dc.save()

        # Create Activities
        from datetime import date
        Activity.objects.create(user=tony.name, type='Running', duration=30, date=date.today())
        Activity.objects.create(user=steve.name, type='Cycling', duration=45, date=date.today())
        Activity.objects.create(user=bruce.name, type='Swimming', duration=60, date=date.today())
        Activity.objects.create(user=clark.name, type='Yoga', duration=40, date=date.today())

        # Create Workouts
        Workout.objects.create(name='Avenger HIIT', description='High intensity workout for Marvel heroes', suggested_for='Team Marvel')
        Workout.objects.create(name='Justice League Cardio', description='Cardio workout for DC heroes', suggested_for='Team DC')

        # Create Leaderboard
        Leaderboard.objects.create(team=marvel.name, points=2300)
        Leaderboard.objects.create(team=dc.name, points=2550)

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data!'))
